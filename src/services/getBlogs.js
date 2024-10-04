export const getBlogs = async () => {
    const res = await fetch('https://postify-blog-website.vercel.app/blogs/api/get-all')
    const data = await res.json();
    return data;
}

export const getBlogDetails = async (id) => {
    const res = await fetch(`https://postify-blog-website.vercel.app/blogs/api/${id}`)
    const data = await res.json();
    return data;
}

export const getMyBlogs = async (email) => {
    const res = await fetch(`https://postify-blog-website.vercel.app/blogs/api/${email}`)
    const data = await res.json();
    return data;
}