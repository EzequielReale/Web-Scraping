import {
  AuthenticationBindings,
  AuthenticationStrategy,
} from '@loopback/authentication';
import {BindingKey} from '@loopback/core';
import jwt from 'express-jwt'; 

export interface JWTConfig {
  jwksUri: string;
  audience: string;
  issuer: string | string[];
  algorithms: ['RS256'];
}

export const JWT_SERVICE = BindingKey.create<jwt.RequestHandler>(
  'services.JWTService',
);

export const KEY = BindingKey.create<AuthenticationStrategy>(
  `${AuthenticationBindings.AUTHENTICATION_STRATEGY_EXTENSION_POINT_NAME}.JWTAuthenticationStrategy`,
);
