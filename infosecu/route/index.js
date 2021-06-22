const crypto = require('crypto')
const express = require('express')
const router = express.Router()
const { verifyNotLogin, addslashes, verifyLogin } = require('../util')
const { login, register, encryptAES128CBC, decryptAES128CBC } = require('../native/module.node')

router.get('/', (req, res) => {
    let logined = false
    if(typeof req.cookies.token !== 'undefined'){
        logined = decryptAES128CBC(req.cookies.token)
    }

    res.status(200).render('index', { logined })
})

router.get('/error', (req, res) => {
    res.render('error')
})

router.post('/login', verifyNotLogin, (req, res) => {
    const { id, pw } = req.body

    let hashedPw = crypto.createHash('sha256').update(pw).digest('hex')
    if(login(addslashes(id), hashedPw) == 1){
        const token = encryptAES128CBC(id)
        res.cookie('token', token)
        res.status(200).redirect('/')
    } else {
        res.status(401).redirect('/error')
    }
})

router.post('/register', verifyNotLogin, (req, res) => {
    const { id, pw } = req.body
    
    if(id.indexOf(`'`) !== -1) return res.status(500).redirect('/error')

    let hashedPw = crypto.createHash('sha256').update(pw).digest('hex')
    if(register(addslashes(id), hashedPw) == 1) res.status(200).redirect('/')
    else res.status(401).redirect('/error')
})

router.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.status(200).redirect('/')
})

module.exports = router