import { User, Session } from "next-auth"
import { JWT } from "next-auth/jwt"

interface ILogin {
    email: string;
    password: string;
}

interface UserExtended extends User {
    accessToken?: string;
}

interface SessionExtended extends Session {
    accessToken?: string;
}

interface JWTExtended extends JWT {
    user?: UserExtended;
}

export type {
    ILogin, UserExtended, SessionExtended, JWTExtended
}