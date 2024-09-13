import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", required: true, placeholder: "Your Email" },
                password: { label: "Password", type: "text", required: true, placeholder: "Your Password" },
                // password: {label: "User Name", type: "text", required: true, placeholder: "Your User Name"}
            },

            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }
                // if(email){
                //     const currentUser = users.find(user => user.email === email)
                //     if(currentUser){
                //         if(currentUser.password === password){
                //             return currentUser
                //         }
                //     }
                // }
                return credentials;
            },
        }),
    ],
}

const users =
    [
        {
            "id": 1,
            "name": "Leanne Graham",
            "password": '123456',
            "email": "sincere@april.com",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "password": 123456,
            "email": "Shanna@melissa.tv",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "password": 123456,
            "email": "Nathan@yesenia.net",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "password": 123456,
            "email": "Julianne.OConner@kory.org",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "password": 123456,
            "email": "Lucio_Hettinger@annie.ca",
        }
    ]
const handler = NextAuth(authOption)

export { handler as GET, handler as POST } 