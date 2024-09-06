import { connect } from "@/dbconnect/dbconnect";
import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { token } = reqBody;
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenDate: { $gt: Date.now() },
    });
    if (!user) {
      return NextResponse.json({ message: "Invalid Token" }, { status: 500 });
    }

    (user.isVerify = true),
      (user.verifyToken = undefined),
      (user.verifyTokenDate = undefined),
      await user.save();
    return NextResponse.json({
      message: "Email Verfiy Successful",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
