const appConfig = {
  development: require('./env/DEV'),
  test: require('./env/TEST'),
  production: require('./env/PROD')
};

const effectiveConfig = appConfig[(process.env.NODE_ENV || 'development')];

process.stdout.write(`\nPicking up config settings as: ${JSON.stringify(effectiveConfig)}\n`);

module.exports = effectiveConfig;
