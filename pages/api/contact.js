export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 25,
    host: 'smtp.gmail.com',
    auth: {
      user: '',
      pass: '',
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  let htmlContent = `
                <h1><strong>Contact Form</strong></h1>
                <p>Hi,</p>
                <p>${req.body.data.name} contacted with the following Details</p>
                <br/>
                <p>Email: ${req.body.data.email}</p>
                <p>Phone: ${req.body.data.mobile}</p>
                <p>Message: ${req.body.data.message}</p>`;

  const mailData = {
    from: 'toshal.shinedezign@gmail.com',
    to: `${req.body.data.email}`,
    subject: 'Message From ',
    text: 'Sample email',
    html: htmlContent,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      res.status(404);
      res.send(err);
      res.end();
    } else {
      res.status(200);
      res.send(info);
      res.end();
    }
  });
}
