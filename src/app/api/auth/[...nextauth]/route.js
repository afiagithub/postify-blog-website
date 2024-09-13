import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { },
                password: { },
                // password: {label: "User Name", type: "text", required: true, placeholder: "Your User Name"}
            },

            async authorize(credentials) {
                return true;
            },
        }),
    ],
    pages: {
        signIn: '/login'
    }
})

export { handler as GET, handler as POST } 