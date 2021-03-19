'use strict';

const awsServerlessExpress = require('aws-serverless-express');
const setupapplication = require('./src/app');

const server = awsServerlessExpress.createServer(setupapplication);

exports.handler = (event, context) => {
  return awsServerlessExpress.proxy(server, event, context);
}

