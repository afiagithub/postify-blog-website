import { NextResponse } from "next/server";
import { connenctDB } from "../../../../lib/connectDB";

export const POST = async (request) => {
    const newBlog = await request.json()
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {        
        const res = await blogCollection.insertOne(newBlog);
        return NextResponse.json({ msg: "Blog posted successfully", res }, {status: 200})
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}