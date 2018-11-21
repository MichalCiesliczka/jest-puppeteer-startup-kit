module.exports = {
  launch: {
    dumpio: true,
    args : [ '--disable-web-security' ],
    slowMo: process.env.HEADLESS !== 'false' ? 0 : 400,
    headless: process.env.HEADLESS !== 'false',
  },
}
