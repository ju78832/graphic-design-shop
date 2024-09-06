import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { connect } from "@/dbconnect/dbconnect";

connect();
export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (!user)
      return NextResponse.json(
        { message: "Haven't Registered" },
        { status: 500 }
      );
    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return NextResponse.json(
        { message: "Invalid Password" },
        { status: 500 }
      );
    }
    const tokenData = {
      id: user._id,
      username: user.name,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.SECRET_KEY!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Successfully",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
