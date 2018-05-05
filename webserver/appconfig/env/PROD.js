let config = {
  PORT: process.env.PORT || 3000,
  LOG_PATH: process.env.LOG_PATH || './prod_logs',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:99017/mernapp'
};

module.exports = config;
