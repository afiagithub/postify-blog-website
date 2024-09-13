import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { connenctDB } from "@/lib/connectDB";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
                // password: {label: "User Name", type: "text", required: true, placeholder: "Your User Name"}
            },

            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) {
                    return null;
                }
                const db = await connenctDB();
                const currentUser = await db.collection('users').findOne({ email })
                if(!currentUser){
                    return null;
                }
                const passwordMatched = bcrypt.compareSync(password, currentUser.password)
                if(!passwordMatched){
                    return null;
                }
                return currentUser;
            },
        }),
    ],
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST } 