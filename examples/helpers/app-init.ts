import { ValidationPipe } from '@nestjs/common'
import { DynamicModule } from '@nestjs/common/interfaces/modules/dynamic-module.interface'
import { ForwardReference } from '@nestjs/common/interfaces/modules/forward-reference.interface'
import { Type } from '@nestjs/common/interfaces/type.interface'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'
import { Test } from '@nestjs/testing'

import { MercuriusValidationException } from './MercuriusValidationException'

type NestModule = Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference

export const fastifyInit = async (module: NestModule): Promise<NestFastifyApplication> => {
  const moduleRef = await Test.createTestingModule({
    imports: [module]
  }).compile()

  const app = moduleRef.createNestApplication<NestFastifyApplication>(new FastifyAdapter())
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      skipMissingProperties: false,
      forbidUnknownValues: true,
      // eslint-disable-next-line @typescript-eslint/unbound-method
      exceptionFactory: MercuriusValidationException.exceptionFactory
    })
  )

  await app.init()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
  await app.getHttpAdapter().getInstance().ready()

  return app
}
