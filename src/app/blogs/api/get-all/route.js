import { connenctDB } from "../../../../lib/connectDB";

export const GET = async () => {
    try {
        const db = await connenctDB();
        const blogCollection = db.collection('blogs')
        const blogs = await blogCollection.find().toArray();
        return Response.json({ blogs })
    } catch (error) {
        console.log(error);
    }
}