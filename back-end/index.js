const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()

app.use(cors({
  origin: 'http://localhost:3000/',
  credentials: true
}))
app.use(express.json())
app.listen(5000, () => console.log('Server running on port 5000'))

const contactEmail = nodemailer.createTransport({
//   host: 'https://dillweed5446.github.io/portfolio_2.0/',  // Use this for build
  host: 'smtp.pdill.dev',
  port: 587,
  auth: {
    user: 'paul@pdill.dev',
    pass: 'FOUcIUAG)s.wdfI!'
  }
})

contactEmail.verify(error => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to send')
  }
})

app.route('/contact').post((request, response) => {
  const name = request.body.name
  const email = request.body.email
  const company = request.body.company
  const comment = request.body.comment
  const mail = {
    from: name,
    to: 'paul@pdill.dev',
    subject: 'Portfolio Contact Form Message',
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Company: ${company}</p><p>Message: ${comment}</p>`
  }
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      response.json({ status: 'failed' })
    } else {
      response.json({ status: 'success' })
    }
  })
})

// 'use strict'
// const nodemailer = require('nodemailer')

// // async..await is not allowed in global scope, must use a wrapper
// async function main () {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
// //   const testAccount = await nodemailer.createTestAccount()

//   // create reusable transporter object using the default SMTP transport
//   const transporter = nodemailer.createTransport({
//     host: 'smtp.pdill.dev',
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'paul@pdill.dev', // generated ethereal user
//       pass: 'FOUcIUAG)s.wdfI!' // generated ethereal password
//     }
//   })

//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: 'paul@pdill.dev, baz@example.com', // list of receivers
//     subject: 'Hello ✔', // Subject line
//     text: 'Hello world?', // plain text body
//     html: '<b>Hello world?</b>' // html body
//   })

//   console.log('Message sent: %s', info.messageId)
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error)
