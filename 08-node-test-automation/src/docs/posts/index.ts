import { components } from '../config';

const {
  successResponse,
  badRequestError,
  unauthorizedError,
  forbiddenError,
  internalError,
} = components.responses;

export const posts = {
  '/posts': {
    post: {
      tags: ['Posts'],
      summary: 'Create a new post',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                title: {
                  type: 'string',
                },
                text: {
                  type: 'string',
                },
                user_id: {
                  type: 'number',
                },
              },
              required: ['title', 'text', 'user_id'],
              example: {
                title: 'My post title',
                text: 'My post text',
                user_id: 1,
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
  '/posts/all': {
    get: {
      tags: ['Posts'],
      summary: 'Get all posts with user info',
      responses: {
        '200': successResponse,
        '400': badRequestError,
        '401': unauthorizedError,
        '403': forbiddenError,
        '500': internalError,
      },
    },
  },
  '/posts/tag': {
    post: {
      tags: ['Posts'],
      summary: 'Tag a post with an existant tag',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                tag_id: {
                  type: 'string',
                },
                post_id: {
                  type: 'string',
                },
              },
              required: ['tag_id', 'post_id'],
              example: {
                tag_id: 1,
                post_id: 1,
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
  '/posts/tag/filter': {
    post: {
      tags: ['Posts'],
      summary: 'Get all posts with the specified tag',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                tag_id: {
                  type: 'string',
                },
              },
              required: ['tag_id'],
              example: {
                tag_id: 1,
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
