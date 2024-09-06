import User from "@/model/user";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenDate: Date.now() + 3600000,
      });
    } else if (emailType === "FORGET") {
      await User.findByIdAndUpdate(userId, {
        forgetToken: hashedToken,
        forgetTokenDate: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "8ec70a896d7909",
        pass: "6828a82ec696fc",
      },
    });

    var mailOptions = {
      from: "junedgreat1@gmail.com",
      to: "receiver@sender.com",
      subject:
        emailType === "VERIFY"
          ? "Verify user for authentication"
          : "Forget Passoword",
      html: `<p> <a href = "${process.env.DOMAIN}/verifyemail?token=${hashedToken}">Click Here</a> </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
