import { NextResponse } from "next/server";
import { connenctDB } from "../../../lib/connectDB"
import bcrypt from "bcrypt"

export const POST = async (request) => {
    const newUser = await request.json()
    try {
        const db = await connenctDB();
        const userCollection = db.collection('users')
        const isExist = await userCollection.findOne({email: newUser.email})
        if(isExist){
            return NextResponse.json({message: 'User Already Exists'}, {status: 304} )
        }
        const hashedPass = bcrypt.hashSync(newUser.password, 14)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const resp = await userCollection.insertOne({...newUser, password: hashedPass})
        return NextResponse.json({message: 'User Created'}, {status: 200} )
    } catch (error) {
        return NextResponse.json({message: 'Something went wrong', error}, {status: 500} )
        
    }
}