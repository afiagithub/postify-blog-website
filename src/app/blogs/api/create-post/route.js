import { connenctDB } from "../../../../lib/connectDB";

export const POST = async (request) => {
    const newBlog = await request.json()
    const db = await connenctDB();
    const blogCollection = db.collection('blogs')
    try {        
        const res = await blogCollection.insertOne(newBlog);
        return Response.json({ msg: "Blog posted successfully" }, {status: 200})
    } catch (error) {
        console.log(error);
    }
}