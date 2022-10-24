import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify'

import { MercuriusValidationException } from '../../../helpers/MercuriusValidationException'
import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter())

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

  await app.listen(3003, '0.0.0.0')
}

// eslint-disable-next-line no-void
void bootstrap()
