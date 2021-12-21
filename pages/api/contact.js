export default function (req, res) {
  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 25,
    host: 'smtp.gmail.com',
    auth: {
      user: 'queries.highstreet@gmail.com',
      pass: 'HighStreet31!',
    },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  let htmlContent = `
                <h1><strong>High Street - Lead Details</strong></h1>
                <p>Hi,</p>
                <p>${req.body.data.name} contacted with the following Details</p>
                <br/>
                <p>Email: ${req.body.data.email}</p>
                <p>Phone: ${req.body.data.mobile}</p>
                <p>Message: ${req.body.data.message}</p>`;

  const mailData = {
    from: 'queries.highstreet@gmail.com',
    to: 'shubham0021@yahoo.com',
    subject: `Message From ${req.body.data.name} | ${req.body.data.email}`,
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
