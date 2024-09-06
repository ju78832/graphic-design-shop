import User from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    let response = NextResponse.next();
    const token = response.cookies.get("token")?.value || "";
    if (!token || token.trim() === "") {
      return NextResponse.json(
        { message: "Token doest not exist" },
        { status: 401 }
      );
    }

    const user = await User.findById(token.toString());
    if (!user) {
      return NextResponse.json({ message: "User not exist" }, { status: 400 });
    }
    return NextResponse.json(
      { message: "User exist", name: user.name, email: user.email },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
