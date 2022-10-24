import { NestFastifyApplication } from '@nestjs/platform-fastify'
import { CursorConnectionType } from '@ptc-org/nestjs-query-graphql'
import request from 'supertest'
import { Connection } from 'typeorm'

import { fastifyInit } from '../../helpers/app-init'
import { AppModule } from '../src/app.module'
import { TodoItemDTO } from '../src/todo-item/dto/todo-item.dto'
import { refresh } from './fixtures'
import { edgeNodes, pageInfoField, todoItemFields } from './graphql-fragments'

describe('TodoItemResolver (filters mercurius - e2e)', () => {
  let app: NestFastifyApplication

  beforeAll(async () => {
    app = await fastifyInit(AppModule)
    await refresh(app.get(Connection))
  })

  afterAll(() => refresh(app.get(Connection)))

  describe('query', () => {
    it(`should require "completed" filter`, () =>
      request(app.getHttpServer())
        .post('/graphql')
        .send({
          operationName: null,
          variables: {},
          query: `{
          todoItems {
            ${pageInfoField}
            ${edgeNodes(todoItemFields)}
          }
        }`
        })
        .expect(400)
        .then(({ body }) => {
          expect(body.errors[0].message).toBe(
            'Field "todoItems" argument "filter" of type "TodoItemFilter!" is required, but it was not provided.'
          )
        }))

    it(`should accepted "completed" filter`, () =>
      request(app.getHttpServer())
        .post('/graphql')
        .send({
          operationName: null,
          variables: {},
          query: `{
          todoItems (filter: { completed: { is: true } }) {
            ${pageInfoField}
            ${edgeNodes(todoItemFields)}
          }
        }`
        })
        .expect(200)
        .then(({ body }) => {
          const { edges, pageInfo }: CursorConnectionType<TodoItemDTO> = body.data.todoItems
          expect(pageInfo).toEqual({
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
            hasNextPage: false,
            hasPreviousPage: false,
            startCursor: 'YXJyYXljb25uZWN0aW9uOjA='
          })
          expect(edges).toHaveLength(1)

          expect(edges.map((e) => e.node)).toEqual([{ id: '1', title: 'Create Nest App', completed: true, description: null }])
        }))

    it(`should not accepted empty "completed" filter`, () =>
      request(app.getHttpServer())
        .post('/graphql')
        .send({
          operationName: null,
          variables: {},
          query: `{
          todoItems (filter: { completed: { } }) {
            ${pageInfoField}
            ${edgeNodes(todoItemFields)}
          }
        }`
        })
        .expect(200)
        .then(({ body }) => {
          // TODO: not the same payload :( do we improve it ?
          expect(JSON.stringify(body.errors[0])).toContain(`{"completed":"There was no filter provided for \\"completed\\"!"}}}`)
        }))
  })

  afterAll(async () => {
    await app.close()
  })
})
