exports.verifyLogin = (req, res, next) => {
  console.log("VER")
  if(typeof req.cookies.token !== 'undefined') return next()
  else return res.status(401).render('invalid')
}

exports.verifyNotLogin = (req, res, next) => {
  console.log("NVER")
  if( typeof req.cookies.token !== 'undefined') return res.status(304).redirect('/')
  else return next()
}

exports.addslashes = str => (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0')
