import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MercuriusFederationDriver, MercuriusFederationDriverConfig } from '@nestjs/mercurius'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusFederationDriverConfig>({
      driver: MercuriusFederationDriver,
      autoSchemaFile: 'schema.gql',
      gateway: {
        services: [
          { name: 'todo-items', url: 'http://localhost:3001/graphql' },
          { name: 'sub-tasks', url: 'http://localhost:3002/graphql' },
          { name: 'tags', url: 'http://localhost:3003/graphql' },
          { name: 'user', url: 'http://localhost:3004/graphql' }
        ]
      }
    })
  ]
})
export class AppModule {}
