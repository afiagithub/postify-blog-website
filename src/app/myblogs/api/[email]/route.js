import { connenctDB } from "../../../../lib/connectDB";

export const GET = async (request, { params }) => {
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {
        const myBlogs = await blogCollection.find({ author_email: params.email }).toArray();        
        return Response.json({ myBlogs })
    } catch (error) {
        console.log(error);
    }
}