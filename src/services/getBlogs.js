export const getBlogs = async () => {
    const res = await fetch('http://localhost:3000/blogs/api/get-all')
    const data = await res.json();
    return data;
}