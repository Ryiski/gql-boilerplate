import Joi from 'joi';
import { ERoles, GQL_CreateUserInput } from '../../../generated-types/graphql.js';
import { enumValues } from '../../../utils/index.js';

const options = { abortEarly: false, errors: { wrap: { label: '' } }, allowUnknown: true };

export const createUserDtoV = (input: GQL_CreateUserInput): Joi.ValidationResult => {
  const joiObj: Record<keyof GQL_CreateUserInput, any> = {
    name: Joi.string().required().min(3).label('Name'),
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(8).label('Password'),
    role: Joi.string()
      .required()
      .allow(...enumValues(ERoles))
      .label('Role'),
  };

  return Joi.object(joiObj).validate(input, { ...options });
};