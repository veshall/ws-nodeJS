import { Request, response, Response } from "express"
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { ocCustomer } from "../model/class-based/oc_customer";
import apiResponse from "../utils/apiResponse";
import { mail, sendOtp } from "../utils/send-otp";

const registerCustomer = async(req: Request,res: Response)=>{

    if ( !req.body?.firstname || !req.body?.lastname || !req.body?.password || !req.body?.email) {
        return res.status(400).send({
            message: "Details are incomplete!"
        })
    }
        const userEmailexists = await userCheckByEmail(req.body?.email);
        if (userEmailexists) { 
            return res.status(400).send({
                message: "This email is already exists."
            })
        }

        const salt = crypto.randomBytes(4).toString('hex');
        const hashPass = await bcrypt.hash(req.body?.password, 10)

        const userDetails = {
            firstname: req.body?.firstname,
            lastname: req.body?.lastname,
            telephone: req.body?.telephone ?? "000",
            status: 1,
            approved: 1,
            email: req.body?.email.toLowerCase(),
            password: hashPass,
            salt: salt,
            cart: '',
            wishlist: '',
          };
        try {
            let token ={};

            const user = await ocCustomer.create(userDetails);
            console.log(user);
            const otpResponse = await sendOtp(user);

            if (otpResponse === 1){
                    token = jwt.sign({
                        _id: user.live_id,
                        customer_id : user.customer_id,
                        name: user.firstname,
                        email: user.email,
                    }, process.env.JWT_SECRET || 'secret',)
            }

            if (token) {
                const mailOptions = {
                  from: 'The Woodenstreet Furnitures Pvt. Ltd.',
                  to: user?.email, 
                  subject:
                    'The Woodenstreet Furnitures Pvt. Ltd. - Thank you for registering',
                  html: 'thanks for regiteration!',
                };
                await mail(mailOptions);
              }

            return apiResponse.Success(
                res, 
                'User registered successfully!',
                200,
                user
            )
        } catch (error) {
            res.status(500).json({ error: error});
        }
}

export {
    registerCustomer
}

const userCheckByEmail = async(email : string)=>{
     const user = await ocCustomer.findOne({
        where: {
            email: email
        }
     });
     return user;
}