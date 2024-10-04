import { ObjectId } from "mongodb";
import { connenctDB } from "../../../../../lib/connectDB";
import { NextResponse } from "next/server";

export const PUT = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const filter = { _id: new ObjectId(params.id) };
        const options = { upsert: true };
        const updatedBlog = await request.json()
        
        const updatedData = {
            $set: {
                ...updatedBlog
            }
        }

        const res = await blogCollection.updateOne(filter, updatedData, options);
        return NextResponse.json({ msg: 'Successfully Deleted', response: res })
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}