import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";
import React from "react";

type IBlogDetailPage = {
  params: {
    id: string;
  };
};

const BlogDetail: React.FC<IBlogDetailPage> = async ({ params }) => {
  // get the blog detail for this id
  const post = await prisma?.post.findFirst({
    where: {
      id: params.id,
    },
    include: {
      author: true,
    },
  });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p className="text-xs text-gray-600 font-semibold">
        Written by: {post?.author?.name}
      </p>
      <div className="mt-4">{post?.content}</div>

      <Comments postId={params.id} />
      <FormComment postId={params.id} />
    </div>
  );
};

export default BlogDetail;
