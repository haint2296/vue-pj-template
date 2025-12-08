import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    input: './openapi.yaml',
    output: {
      mode: 'tags-split',
      target: './src/shared/services/api/hooks',
      schemas: './src/shared/services/api/models',
      client: 'vue-query',
      clean: true,
      headers: true,
      allParamsOptional: true,
      override: {
        mutator: {
          path: './src/shared/lib/axios/lib.ts',
          name: 'customInstance',
        },
        query: {
          useQuery: true,
          signal: true,
        },
      },
      mock: {
        type: 'msw',
        delay: 1000,
        generateEachHttpStatus: true,
      },
      prettier: true,
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'prettier --write .',
        injectGeneratedDirsAndFiles: false,
      },
    },
  },
});
