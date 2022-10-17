import { components } from '../config';

const {
  successResponse,
  badRequestError,
  unauthorizedError,
  forbiddenError,
  internalError,
} = components.responses;

export const users = {
  '/users': {
    post: {
      tags: ['Users'],
      summary: 'Create new user',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                },
                password: {
                  type: 'string',
                },
              },
              required: ['email', 'password'],
              example: {
                email: 'contato@arthurvasconcellos.com',
                password: 'password',
              },
            },
          },
        },
      },
      responses: {
        '200': successResponse,
        '400': badRequestError,
        '401': unauthorizedError,
        '403': forbiddenError,
        '500': internalError,
      },
    },
  },
  '/users/{id}': {
    get: {
      tags: ['Users'],
      summary: 'Get user info',
      parameters: [
        {
          in: 'path',
          name: 'id',
          required: true,
          schema: { type: 'number' },
          description: 'Insert id patient',
        },
      ],
      responses: {
        '200': successResponse,
        '400': badRequestError,
        '401': unauthorizedError,
        '403': forbiddenError,
        '500': internalError,
      },
    },
  },
};
