#!/usr/bin/env node

const HttpAgent = require('agentkeepalive');
const HttpsAgent = require('agentkeepalive').HttpsAgent;
const urllib = require('urllib');

const url = process.argv[2];

if (!url) {
  console.log('Usage: $ http-doctor <url>');
  process.exit(1);
}

const options = {
  freeSocketTimeout: 40000,
};
const agent = new HttpAgent(Object.assign({}, options));
const httpsAgent = new HttpsAgent(Object.assign({}, options));
let responseTime;

urllib.request(url, {
  agent,
  httpsAgent,
  timing: true,
}).then(result => {
  responseTime = Date.now();
  const connection = result.headers.connection || 'keep-alive';
  console.log('status: %s', result.status);
  console.log('timing: %j', result.res.timing);
  console.log('connection: %j', connection);
  console.log('headers: %j', result.headers);

  if (connection !== 'keep-alive') {
    console.warn('❌  Server don\'t support KeepAlive');
    process.exit(0);
  }

  console.log('✅  Server support KeepAlive');
  setTimeout(timeoutHandler, 31000);
}).catch(err => {
  console.error('GET %s error:', url);
  console.error(err);
  process.exit(1);
});

function closeHandler() {
  let keepAliveTime = Date.now() - responseTime;
  keepAliveTime = Math.round(keepAliveTime / 1000);
  console.log('✅  Server KeepAlive timeout is %ss, you should set client KeepAlive timeout to %ss',
    keepAliveTime, keepAliveTime - 1);
  process.exit(0);
}
agent.once('close', closeHandler);
httpsAgent.once('close', closeHandler);

function timeoutHandler() {
  console.log('✅  Server KeepAlive timeout > 30s, you should set client KeepAlive timeout to 30s');
  process.exit(0);
}
