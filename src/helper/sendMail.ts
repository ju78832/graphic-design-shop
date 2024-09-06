import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(
  email: string,
  name: string,
  number: string,
  address: string
) {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "junedgreat89@gmail.com",
      subject: "Mystery Message Verification Code",
      react: VerificationEmail({ name, email, number, address }),
    });
    return { success: true, message: "Verification email sent successfully." };
  } catch (emailError) {
    console.error("Error sending verification email:", emailError);
    return { success: false, message: "Failed to send verification email." };
  }
}
