import Link from "next/link";
import { blogs } from "../../data/posts";
import "./style.css";

const Blogs = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 ">
      <h1 className="inline-block link link-underline link-underline-black text-3xl text-black font-bold mb-12">
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
        {blogs.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="bg-white p-4 rounded-md transition-all duration-150 ease-in-out shadow hover:shadow-md hover:scale-105 active:scale-95"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-xl font-bold">Written by: {post.username}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
