import { getTokenId } from "@/helper/getToken";

import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user";
import { connect } from "@/dbconnect/dbconnect";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = await getTokenId(request);
    const user = await User.findOne({ _id: userId }).select("-password");

    return NextResponse.json(
      {
        mesaaage: "User found",
        data: user,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
