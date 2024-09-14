import { ObjectId } from "mongodb";
import { connenctDB } from "../../../../../lib/connectDB";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const res = await blogCollection.deleteOne({ _id: new ObjectId(params.id) });        
        return Response.json({ msg: 'Successfully Deleted' , response: res})
    } catch (error) {
        console.log(error);
    }
}