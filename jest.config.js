module.exports = {
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
  moduleFileExtensions: ["ts", "json", "node", "js"],
  transform: {
    "^.+\\.(ts)$": "babel-jest"
  },
  testURL: "http://localhost/"
};
