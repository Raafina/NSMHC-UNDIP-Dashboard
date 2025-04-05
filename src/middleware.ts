import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JWTExtended } from "./types/Auth";
import { getToken } from "next-auth/jwt";
import environment from "./config/environtment";

export async function middleware(request: NextRequest) {
    const token: JWTExtended | null = await getToken({
        req: request,
        secret: environment.AUTH_SECRET,
    });

    const { pathname } = request.nextUrl;

    if (pathname === "/auth/login") {
        if (token) {
            return NextResponse.redirect(new URL("/dashboard/beranda", request.url));
        }
    }

    if (pathname.startsWith("/dashboard")) {
        if (!token) {
            const url = new URL("/auth/login", request.url);
            url.searchParams.set("callbackUrl", encodeURI(request.url));
            return NextResponse.redirect(url);
        }

        if (pathname === "/dashboard") {
            return NextResponse.redirect(new URL("/dashboard/beranda", request.url));
        }
    }
}

export const config = {
    matcher: ["/auth/:path*", "/dashboard/:path*",],
};
