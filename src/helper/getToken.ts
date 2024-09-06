import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const getTokenId = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodeToken: any = jwt.verify(token, process.env.SECRET_KEY!);
    return decodeToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
