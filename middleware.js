import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(req) {
  const auth = req.cookies.get("token");
  const path = req.nextUrl.pathname;

  //   if (auth) {
  //     if (
  //       request.nextUrl.pathname.startsWith("/login") ||
  //       request.nextUrl.pathname.startsWith("/register")
  //     ) {
  //       return NextResponse.redirect(new URL("/", request.url));
  //     } else {
  //       return NextResponse.next();
  //     }
  //   }
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  if (!auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/"],
};
