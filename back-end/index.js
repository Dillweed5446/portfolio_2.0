const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const app = express()

app.use(cors({
  origin: '*',
  credentials: true
}))
app.use(express.json())
app.listen(5000, () => console.log('Server running on port 5000'))

// const contactEmail = nodemailer.createTransport({
// //   host: 'https://dillweed5446.github.io/portfolio_2.0/',  // Use this for build
// //   host: 'smtp.pdill.dev',
//   port: 587
//   auth: {
//     user: 'paul@pdill.dev',
//     pass: 'FOUcIUAG)s.wdfI!'
//   }
// })

// transporter.verify(error => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log('Ready to send')
//   }
// })

app.route('/contact')
  .post((request, response) => {
    console.log(request.body.name)
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
    const smtpConfig = {
      host: 'smtp.zoho.com',
      port: 587,
      secure: false,
      auth: {
        user: 'paul@pdill.dev',
        pass: ''
      }
    }
    const transporter = nodemailer.createTransport(smtpConfig)
    transporter.sendMail(mail, (error) => {
      if (error) {
        response.send(`Failed: ${error}`)
      } else {
        response.send('Buggah worked!')
      }
    })
  })

// POST route from contact form
// app.post('/contact', (req, res) => {
//   // Instantiate the SMTP server
//   const smtpTrans = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//       user: GMAIL_USER,
//       pass: GMAIL_PASS
//     }
//   })

//   // Specify what the email will look like
//   const mailOpts = {
//     from: 'Your sender info here', // This is ignored by Gmail
//     to: GMAIL_USER,
//     subject: 'New message from contact form at tylerkrys.ca',
//     text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
//   }

//   // Attempt to send the email
//   smtpTrans.sendMail(mailOpts, (error, response) => {
//     if (error) {
//       res.render('contact-failure') // Show a page indicating failure
//     } else {
//       res.render('contact-success') // Show a page indicating success
//     }
//   })
// })
