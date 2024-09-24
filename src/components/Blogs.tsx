import BlogCard from './BlogCard'
import Image from 'next/image';
import Link from 'next/link';
import { getBlogs } from "@/services/getBlogs"

interface Blog {
  _id: string;
  title: string;
  thumbnail: string;
  post_date: string;
  category: string;
  blog_content: string;
  author_name: string;
}

const Blogs = async () => {
  const { blogs } = await getBlogs()

  return (
    <div className='my-5 lg:my-10 mx-auto'>
      <div className='flex flex-row gap-5'>
        {
          blogs.length > 0 && blogs.slice(0, 1).map((blog: Blog) =>
            <div key={blog._id} className="card bg-base-100 w-4/6 shadow-xl border-2 h-[700px]">
              <figure>
                <Image src={blog.thumbnail} alt='image' width={550} height={50} className='h-[500px] rounded-lg'></Image>
              </figure>
              <div className="card-body text-center">
                <div className="card-actions justify-center">
                  <div className="badge bg-[#1F2937] text-[#F59E0B] p-4">{blog.category}</div>
                </div>
                <Link href={`/blogs/${blog._id}`} className="card-title text-2xl font-play hover:underline">
                  {blog.title}
                </Link>
                <p className='text-sm font-robo font-medium text-[#6B7280]'>{blog.blog_content.slice(0, 150)}...</p>
                <div className='mt-5 flex flex-row gap-2 justify-center items-center w-3/5 mx-auto text-sm text-[#1F2937]'>
                  <p>By <span className='font-semibold'>{blog.author_name}</span></p>
                  <p>{blog.post_date}</p>
                </div>
              </div>
            </div>
          )
        }
        <div className='w-2/6'>
          {
            blogs.length > 0 && blogs.slice(1, 4).map((blog: Blog) => <BlogCard key={blog._id} data={blog}></BlogCard>)
          }
        </div>
      </div>
    </div>
  )
}

export default Blogs
