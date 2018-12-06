'use strict';
const nodemailer = require('nodemailer');
nodemailer.createTestAccount((err, account) => {
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, 
        auth: {
            user: account.user, 
            pass: account.pass 
        }
    });

    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', 
        to: 'bar@example.com, baz@example.com', 
        subject: 'Hello ✔',
        text: 'Hello world?', 
        html: '<b>Hello world?</b>' 
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});