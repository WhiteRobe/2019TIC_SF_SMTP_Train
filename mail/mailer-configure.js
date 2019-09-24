const options = { // @See https://www.npmjs.com/package/nodemailer
  // pool: true,
  host: 'smtpdm.aliyun.com', // like: "smtpdm.aliyun.com"
  port: 80,
  secure: false, // true for 465(SSL), false for other ports
  auth: {
    user: 'root@csser.club', // like: "user@example.com"
    pass: 'pwd', // like: "password"
  },
  targetEmail: 'a1exlism@qq.com', // which email you wanna send to, like: 'aaa@example.com'
  myEmailTitle: 'Hello', // Email title
}

module.exports = options
