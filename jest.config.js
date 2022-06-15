module.exports = {
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    // globals: {
    //     'ts-jest': {
    //         diagnostics: true,
    //     },
    // },
    collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/stories/*.tsx',
        '!src/serviceWorker.ts',
        '!src/setupTests.ts',
        '!src/index.tsx',
    ],
    setupFiles: ["./src/setupTests.ts"],
    coveragePathIgnorePatterns: ['./src/*/*.types.{ts,tsx}', './src/*/*.stories.tsx'],
    coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
    coverageThreshold: {
        global: {
            statements: 95,
            branches: 95,
            lines: 95,
            functions: 95,
        },
    },
    testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
    automock: false,
    modulePaths: [],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/ts-jest',
    },
    moduleNameMapper: {
        '^react-native$': 'react-native-web',
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
        'src/(.*)$': '<rootDir>/src/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};