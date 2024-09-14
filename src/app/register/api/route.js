import { connenctDB } from "../../../lib/connectDB"
import bcrypt from "bcrypt"

export const POST = async (request) => {
    const newUser = await request.json()
    try {
        const db = await connenctDB();
        const userCollection = db.collection('users')
        const isExist = await userCollection.findOne({email: newUser.email})
        if(isExist){
            return Response.json({message: 'User Already Exists'}, {status: 304} )
        }
        const hashedPass = bcrypt.hashSync(newUser.password, 14)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const resp = await userCollection.insertOne({...newUser, password: hashedPass})
        return Response.json({message: 'User Created'}, {status: 200} )
    } catch (error) {
        return Response.json({message: 'Something went wrong', error}, {status: 500} )
        
    }
}