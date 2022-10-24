import { HttpStatus } from '@nestjs/common'
import mercurius from 'mercurius'

import type { ValidationError } from 'class-validator'

type ValidationFields = Record<string, unknown>

// TODO: move to proper packages

export class MercuriusValidationException extends mercurius.ErrorWithProps {
  public static MESSAGE = 'Validations failed!'

  constructor(message = MercuriusValidationException.MESSAGE, fields: ValidationFields = {}) {
    super(
      message,
      {
        code: 'api.validation',
        fields
      },
      HttpStatus.OK // graphql definition is 200 on validation errors
    )
  }

  public static exceptionFactory(errors: ValidationError[]) {
    return new MercuriusValidationException(
      MercuriusValidationException.MESSAGE,
      MercuriusValidationException.getFieldsFromErrors(errors)
    )
  }

  public static getFieldsFromErrors(errors: ValidationError[]): ValidationFields {
    return errors.reduce((userInputError, validationError) => {
      if (!validationError.constraints) {
        if (validationError.children) {
          return {
            ...userInputError,
            ...this.getFieldsFromErrors(validationError.children)
          }
        }

        return userInputError
      }

      const firstErrorConstraint = Object.keys(validationError.constraints)[0]
      userInputError[validationError.property] = validationError.constraints[firstErrorConstraint]

      return userInputError
    }, {})
  }
}
