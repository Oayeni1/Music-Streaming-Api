const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    // port: 465,
    // secure: true,
    // host: 'smtp.gmail.com',
    service: 'gmail',
    auth: {
      user: 'Oayeni88@gmail.com',
      pass: 'dapyviqineuskczi',
    },
  });

  

async function mailing(recipient, subject, text) {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'Oayeni88@gmail.com',
        to: recipient,
        subject: subject,
        text: text,
    });
    console.log(info.messageId);
}
module.exports=mailing;
