import { ObjectId } from "mongodb";
import { connenctDB } from "../../../../../lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const res = await blogCollection.deleteOne({ _id: new ObjectId(params.id) });        
        return NextResponse.json({ msg: 'Successfully Deleted' , response: res})
    } catch (error) {
        return NextResponse.json({ msg: "Something went wrong", error })
    }
}