// const config = {
//   roots: ['./src/__test__'],
// };

// module.exports = config;

const { createJestConfig } = require('@craco/craco');
const cracoConfig = require('./craco.config.js');
const jestConfig = createJestConfig(cracoConfig);
module.exports = jestConfig;
