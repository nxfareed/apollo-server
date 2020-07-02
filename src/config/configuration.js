import {
  config
} from 'dotenv';

config();
const configuration = Object.freeze({
  port: process.env.PORT,
  serviceUrl: process.env.URL,
  env: process.env.NODE_ENV
});
export default configuration;
