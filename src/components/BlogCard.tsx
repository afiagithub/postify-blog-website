import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface Blog {
    _id: string;
    title: string;
    thumbnail: string;
    post_date: string;
    category: string;
}

const BlogCard = ({ data }: { data: Blog }) => {

    return (
        <div className="card w-80">
            <figure>
                <Image src={data.thumbnail} alt='image' width={200} height={100}></Image>
            </figure>
            <div className="card-body pt-5">
                <div className="card-actions justify-start">
                    <div className="badge badge-outline">{data.category}</div>
                </div>
                <Link href={`/blogs/${data._id}`} className="card-title font-play hover:underline">
                    {data.title}
                </Link>
                <hr />
            </div>
        </div>
    )
}

export default BlogCard
