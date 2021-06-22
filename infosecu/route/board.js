const express = require('express')
const router = express.Router()
const path = require('path')
const mime = require('mime-types')
const { verifyLogin, addslashes } = require('../util')
const { listBoard, writeBoard , readBoard, getFilePath, checkAuthor, decryptAES128CBC } = require('../native/module.node')

const multer = require('multer')
const upload = multer({ 
  storage: multer.diskStorage({
    destination: function(req, file ,callback){
        callback(null, 'uploads/')
    },
    filename: function(req, file, callback){
        let extension = path.extname(file.originalname)
        let basename = path.basename(file.originalname, extension)
        callback(null, basename + '-' + Date.now() + extension)
    }
  }) 
})

const fs = require('fs')

router.post('/list', verifyLogin, (req, res) => {
  const category = req.body.category ?? 'free'

  const id = decryptAES128CBC(req.cookies.token)
  const result = listBoard(category, id)

  if(result == 0) {
    res.status(403).redirect('/error')
    return 0
  }

  res.json(result)
})

router.post('/write', verifyLogin, upload.array('file'),(req, res) => {
  const { title, content, category } = req.body
  const { path } = req.files[0] ?? ''

  const id = decryptAES128CBC(req.cookies.token)

  if(writeBoard(addslashes(title), addslashes(category), addslashes(content), path, id) == 1) return res.status(200).redirect('/')
  else return res.status(500).redirect('/error')
})

router.get('/download/:no(\\d+)', verifyLogin, (req, res) => {
  const { no } = req.params

  const id = decryptAES128CBC(req.cookies.token)

  if(checkAuthor(parseInt(no), id) == 0) {
    res.status(403).redirect('/error')
    return 0
  }

  const path = getFilePath(parseInt(no))

  if(path !== 0){
    const data = fs.readFileSync(path, 'binary')
    
    res.setHeader('Content-type', mime.lookup(path))
    res.setHeader('Content-Length', data.length);
    res.write(data, 'binary')
  } else {
    res.status(404).redirect('/error')
  }
})


router.get('/:no(\\d+)', verifyLogin, (req, res) => {
  const { no } = req.params

  const logined = decryptAES128CBC(req.cookies.token)

  if(checkAuthor(parseInt(no), logined ) == 0) {
    res.status(403).redirect('/error')
    return 0
  }
  const data = readBoard(parseInt(no))

  if(data === 0) {
    res.status(404).render('404')
    return 0
  }

  return res.status(200).render('board', { logined, data })
})

module.exports = router