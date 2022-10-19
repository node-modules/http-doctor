const path = require('path');
const doctorBin = path.join(__dirname, '../bin/doctor.js');

describe('test/cli.test.cjs', () => {
  it('should work', async () => {
    const { runner } = await import('clet');
    await runner()
      .fork(doctorBin, [ 'https://www.alipay.com/' ])
      .log('result.stdout')
      .stdout('✅  Server support KeepAlive');
  });
});
