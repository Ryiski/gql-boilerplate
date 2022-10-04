import Joi from 'joi';
import { GQL_UpdateProfileInput } from '../../../generated-types/graphql.js';

const options = { abortEarly: false, errors: { wrap: { label: '' } }, allowUnknown: true };

export const updateProfileDtoV = (input: GQL_UpdateProfileInput): Joi.ValidationResult => {
  const joiObj: Record<keyof GQL_UpdateProfileInput, any> = {
    name: Joi.string().required().min(3).label('Name'),
    email: Joi.string().required().email().label('Email'),
    password: Joi.string().required().min(8).label('Password'),
  };

  return Joi.object(joiObj).validate(input, { ...options });
};
