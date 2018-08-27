const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'anuj.adsvento@gmail.com',
        pass: '0709Fcb??'
    }
});




exports.sendMail = (req, res, next) => {
	console.log(req.body, 'request body');

  const mailOptions = {
    from: 'anuj.adsvento@gmail.com', // sender address
    to: `${req.body.mail}`, // list of receivers
    subject: `${req.body.subject}`, // Subject line
    html: `<p>Name: ${req.body.name}</p><p>Mail: ${req.body.mail}</p><p>Subject: ${req.body.subject}</p><p>Message: ${req.body.content}</p>`// plain text body
  };

  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       console.log(err)
     else
       console.log(info);
  }).then(() => {res.redirect('/')});
}