import { sendVerificationEmail } from "@/helper/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { name, email, number, address } = reqBody;
    const emailResponse = await sendVerificationEmail(
      email,
      name,
      number,
      address
    );
    if (!emailResponse.success) {
      return NextResponse.json(
        { success: false, message: emailResponse.message },
        { status: 500 }
      );
    }
    return NextResponse.json(
      {
        success: true,
        message: "Details sent Successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
}
