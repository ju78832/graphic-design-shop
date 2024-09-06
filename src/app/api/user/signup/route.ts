import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user";
import bcrypt from "bcryptjs";
import { connect } from "@/dbconnect/dbconnect";
import { sendEmail } from "@/helper/mail";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqbody = await req.json();
    const { name, email, password } = reqbody;

    const user = await User.findOne({ email });
    if (user)
      return NextResponse.json(
        { message: "Already registered User" },
        { status: 500 }
      );

    const salt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedpassword,
    });

    const savedUser = await newUser.save();

    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json({
      message: "Successfully Registered",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
