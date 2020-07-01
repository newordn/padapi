var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "t0296027@gmail.com",
    pass: "t0296027t0296027",
  },
});

const sendMail = async (to, subject, text) => {
  transporter.sendMail({ from: "t0296027@gmail.com", to, subject, text }, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = {
  sendMail,
};
