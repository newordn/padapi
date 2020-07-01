var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 't0296027@gmail.com',
    pass: 't0296027t0296027'
  }
});


const sendMail = (to,subject,text)=> transporter.sendMail({from:"",to,subject,text}, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
module.exports={
    sendMail
}