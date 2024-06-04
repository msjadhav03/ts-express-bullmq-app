module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/_test_/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverage: true,
  //   setupFiles: ["./src/setupTests.ts"],
  collectCoverageFrom: [
    "src/**/*.{ts,js,jxs}",
    "!**/node_modules/**",
    "!**/__test__/**",
  ],
};
