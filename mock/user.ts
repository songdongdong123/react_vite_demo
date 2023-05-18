import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'success',
        data: {
          name: 'John Doe',
          age: 30,
        },
      }
    },
  },
] as MockMethod[];

