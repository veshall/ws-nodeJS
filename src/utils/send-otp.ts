import { ocCustomer } from "../model/class-based/oc_customer";
import nodemailer from 'nodemailer';
import { isEmpty } from 'lodash';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'no-reply@woodenstreet.com',
      pass: 'W00d@udr',
    },
  });

export const mail = async (body: any) => {
    try {
      let resp: any = {};
      if (!isEmpty(body)) {
        resp = transporter.sendMail(body, (err, info) => {
          if (err) return err;
          return info;
        });
        return resp;
      }
    } catch (error: any) {
      return error.message;
    }
  };

export const sendOtp = async (user: any)=>{
    let cupDate;
    const staticotp = Math.floor(100000 + Math.random() * 900000);

    try {
        cupDate = await ocCustomer.update(
            { live_id : String(staticotp) }, 
            { where: {
                email: user.body?.email
            }
        })
        .then((data)=>{
            return data[0];
        })

        if(cupDate){
            const getCustomer = await ocCustomer.findOne({
                attributes:[ 'firstname', 'email'],
                where:{
                    email: user.body?.email
                }
            })

            const mailOptions = {
                to: getCustomer?.email, 
                subject: 'Welcome to Our World of Furniture...bonded with love',
                html:'Use ' + staticotp + 'as your verification code on WoodenStreet. The OTP expires within 1 mins. Please do not share the OTP with anyone. Team WoodenStreet',
              };

              const info = await transporter.sendMail(mailOptions, function (err: any, info: any) {
                if (err) console.log(err);
                else console.log(info);
              });
              return (cupDate = 1);
        }else{
            return (cupDate = 0);
        }
    } catch (error) {
        console.log('Send OTP error common service - ', error);
        return (cupDate = 0);
    }
}