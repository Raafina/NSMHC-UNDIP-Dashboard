import environment from "@/config/environtment";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWTExtended, SessionExtended, UserExtended } from "@/types/Auth";
import authServices from "@/services/auth.service";

export default NextAuth({
    session: {
        strategy: "jwt",
        maxAge: 60 * 60 * 24,
    },
    secret: environment.AUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials: Record<"email" | "password", string> | undefined): Promise<UserExtended | null> {
                const { email, password } = credentials as { email: string; password: string };

                const result = await authServices.login({
                    email,
                    password,
                });

                const accessToken = result.data.token;

                if (accessToken && result.status === 200) {
                    const user: UserExtended = {
                        email,
                        accessToken,
                        id: ""
                    };
                    return user;
                } else {
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }: { token: JWTExtended; user: UserExtended | null }) {
            if (user) {
                token.user = user; // Simpan data user dalam token JWT
            }
            return token; // Return token yang berisi data user
        },
        async session({ session, token }: { session: SessionExtended; token: JWTExtended }) {
            session.user = token.user; // Simpan data user ke dalam session
            session.accessToken = token.user?.accessToken; // Simpan access token ke dalam session
            return session; // Return session yang berisi data user
        },
    },
});
