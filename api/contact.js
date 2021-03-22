const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
var cors = require('cors')
app.use(cors()); // Use this after the variable declaration
app.use(bodyParser.json());
app.use(express.json());


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'yrdevops@gmail.com',
        pass: 'Yr670907'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
});



    app.post('/', (req, res) => {


        
        const { name, email, msg} = req.body

        res.status(200).json({ data: {name, email,msg} });

        let mailOptions = {
            from: 'yrdevops@gmail.com',
            to: 'yrdevops@gmail.com',
            subject: 'Testing and testing',
            html: 
            `
            <div style='display:flex;flex-direction:row;width:400px;height:200px;'>
                <div style='background:#2A363B;width:150px;height:200px;border-radius: 10px 0px 0px 10px;'>
                    <h2 style='color:#b3ffff;margin: 1rem;'>${name}</h2> 
                    <a style='color:#b3ffff;text-decoration:none;margin: 1rem;'>${email}</a> 
                </div>
                <div style='background:#b3ffff;padding:0px 10px;width:250px;height:200px;border-radius: 0px 10px 10px 0px;'>
                    <h2 style='color:#2A363B;'>Mensaje:</h2>
                    <div style='background:#FFFFFF;border-radius:5px;padding: 10px'><p style='color:#2A363B;'>${msg}</p></div>
                </div>     
            </div>
            `
        }



        transporter.sendMail(mailOptions, (err, data)=>{
            if(err){
                console.log(err)
            }else{
                console.log('Email Sent!!!!!')
            }
        })
})



export default {
    path: '/api/contact',
    handler: app
  }