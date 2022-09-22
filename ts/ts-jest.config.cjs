/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "\\.ts?$": ["ts-jest", { useESM: true }],
  },
};
