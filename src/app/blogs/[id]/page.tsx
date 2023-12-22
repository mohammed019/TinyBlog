import Comments from "@/components/Comments";
import FormComment from "@/components/FormComment";

const BlogDetail = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post One</h1>
      <p className="text-xs text-gray-600 font-semibold">
        Written by: Mohammed
      </p>
      <div className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        obcaecati aspernatur corporis recusandae nostrum sint eaque quos rem
        quisquam aperiam!
      </div>

      <Comments />

      <FormComment />
    </div>
  );
};

export default BlogDetail;
