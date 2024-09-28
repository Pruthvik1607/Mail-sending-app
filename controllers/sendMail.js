const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    let testAccount = await nodemailer.createTestAccount();

    //connect with the SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'devonte.ankunding@ethereal.email',
            pass: '6QuQKUfUCetZqKadvu',
        },
    });

    let info = await transporter.sendMail({

        from: '"Pruthviraj Koravi 👻"', // sender address
        to: "pruthvirajkoravi2000@gmail.com", // list of receivers
        subject: "Hello Pruhvi", // Subject line
        text: "this mail is crated by mail sending app", // plain text body
        html: "<b>Hello world?</b>",

    })

    console.log("Message sent: %s", info.messageId);

    res.json(info)
}
//if you want to send a mail from server we use SMTP server


module.exports = sendMail