import { ObjectId } from "mongodb";
import { connenctDB } from "../../../../lib/connectDB";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const blog = await blogCollection.findOne({ _id: new ObjectId(params.id) });        
        return Response.json({ blog })
    } catch (error) {
        console.log(error);
    }
}