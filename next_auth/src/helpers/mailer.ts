import User from '@/models/userModel';
import nodemailer from 'nodemailer'
import bcryptjs from 'bcryptjs'

export const sendEmail = async({email, emailType, userId}:any)=>{
    try {

      const hashesdToken = await bcryptjs.hash(userId.toString(), 10)

        if(emailType === "VERIFY"){
          await User.findByIdAndUpdate(userId,
          {verifyToken: hashesdToken, verifyTokenExpiry: Date.now() + 3600000}  
          )
        } else if(emailType === "RESET"){
          await User.findByIdAndUpdate(userId,
            {forgotPasswordToken: hashesdToken, forgotPasswordTokenExpiry: Date.now() + 3600000}  
            )
        }

        const transporter = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "bf94e2d2c08212",
            pass: "0ce98848d45428"
          }
        });


          const mailOptions = {
            from: 'fat@brad.com', 
            to: email,
            subject: emailType === 'VERIFY' ? "verify your email" : "Reset password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashesdToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashesdToken}
            </p>`, 
          }

          const mailResponse = await transporter.sendMail(mailOptions)
          return mailResponse
    } catch (error:any) {
        throw new Error(error.message) 
    }
}