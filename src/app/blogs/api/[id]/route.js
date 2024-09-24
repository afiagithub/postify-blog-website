import { ObjectId } from "mongodb";
import { connenctDB } from "../../../../lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const blog = await blogCollection.findOne({ _id: new ObjectId(params.id) });        
        return NextResponse.json({ blog })
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}