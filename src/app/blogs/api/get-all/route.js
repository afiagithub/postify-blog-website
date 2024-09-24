import { NextResponse } from "next/server";
import { connenctDB } from "../../../../lib/connectDB";

export const GET = async () => {
    try {
        const db = await connenctDB();
        const blogCollection = db.collection('blogs')
        const blogs = await blogCollection.find().toArray();
        return NextResponse.json({ blogs })
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}