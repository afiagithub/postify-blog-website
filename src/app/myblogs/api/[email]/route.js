import { NextResponse } from "next/server";
import { connenctDB } from "../../../../lib/connectDB";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const myBlogs = await blogCollection.find({ author_email: params.email }).toArray();        
        return NextResponse.json({ myBlogs })
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}