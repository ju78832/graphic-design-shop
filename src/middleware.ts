import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isPublicPath =
    path === "/login" || path === "/verifyemail" || path === "/signup";

  const token = req.cookies.get("token")?.value || "";
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/profile", "/login", "/signup", "/verifyemail"],
};
