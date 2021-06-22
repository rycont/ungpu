const crypto = require('crypto')

// function createCipher(i) {
//   const cipher = crypto.createCipheriv(
//     'aes-128-ecb',
//     Buffer.from("_IZ*ONE2nuinsdau"),
//     Buffer.from('IZ*ONE_PERMANENT'.slice(0, 16)),
//   )
//   const encrypted = cipher.update(i)

//   return (
//     Buffer.concat([encrypted, cipher.final()]).toString('base64')
//   )
// }

function decrypt(str) {
  const encryptedText = Buffer.from(str, 'base64')
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from("_IZ*ONE2nuinsdau"),
    Buffer.from('I')
  )
  console.log(decipher.update(encryptedText).toString())
}

decrypt('Q85u/h8+2l8NdPViWYTr/Q==')

// let i = 0

// setInterval(() => {
//   const cipher = createCipher((i++).toString())
//   const isSame = cipher === 'Q85u/h8+2l8NdPViWYTr/Q=='
//   console.log(cipher, isSame, i)
//   if (isSame) process.exit()
// }, 10)
