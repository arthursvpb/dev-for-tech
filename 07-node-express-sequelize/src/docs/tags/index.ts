import { components } from '../config';

const {
  successResponse,
  badRequestError,
  unauthorizedError,
  forbiddenError,
  internalError,
} = components.responses;

export const tags = {
  '/tags': {
    post: {
      tags: ['Tags'],
      summary: 'Create new tag',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                },
              },
              required: ['name'],
              example: {
                name: 'Cool tag',
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
};
