import Link from "next/link";
// import { blogs } from "../../data/posts";
import "./style.css";

const Blogs = async () => {
  const posts = await prisma?.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8 ">
      <h1
        className="inline-block link 
      link-underline link-underline-black text-3xl text-black font-bold mb-12"
      >
        Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-12">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/blogs/${post.id}`}
            className="bg-white p-4 rounded-md transition-all duration-150 ease-in-out shadow hover:shadow-md hover:scale-105 active:scale-95"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-xl font-bold">Written by: {post.author?.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
