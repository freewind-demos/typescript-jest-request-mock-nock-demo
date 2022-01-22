import {InitialOptionsTsJest} from "ts-jest";

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      // disable type check since we normally do it in separate commands
      diagnostics: false
    }
  },
  preset: 'ts-jest', // ts-jest/presets/js-with-ts
  testEnvironment: 'node'
}

export default config;
