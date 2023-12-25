// netlify/functions/proxy.js

const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  const url = 'http://localhost:4000' + event.path;
  const response = await fetch(url, {
    method: event.httpMethod,
    headers: event.headers,
    body: event.body,
  });

  return {
    statusCode: response.status,
    body: await response.text(),
    headers: response.headers,
  };
};
