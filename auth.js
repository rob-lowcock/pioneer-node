const auth = require('basic-auth')

const admin = { name: process.env.LOGINUSER, pass: process.env.LOGINPASS }

module.exports = function (req, res, next) {
  const user = auth(req)
  if (!user || user.name !== admin.name || user.pass !== admin.pass) {
    res.set('WWW-Authenticate', 'Basic realm="example"')
    return res.status(401).send()
  }
  return next()
}