import { auth } from "@/lib/firebase";
import { NextResponse } from "next/server";

export async function middleware(request: Request) {
  const session = await auth.currentUser;
  const path = new URL(request.url).pathname;

  if (!session && path.startsWith("/board")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
