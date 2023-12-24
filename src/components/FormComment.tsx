"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

type IFormCommentProps = {
  postId: string;
};

const FormComment: React.FC<IFormCommentProps> = ({ postId }) => {
  const { data } = useSession();
  const router = useRouter();
  const [comment, setComment] = useState<string>("");

  return (
    <div>
      <div className="mt-2 ">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (comment.trim() !== "") {
              try {
                const newComment = await axios.post("/api/comments", {
                  postId,
                  text: comment,
                });

                if (newComment.status === 200) {
                  router.refresh();
                }
              } catch (error) {
                console.log(error);
              }
            }
          }}
        >
          <label
            htmlFor="comment"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Add Comment
          </label>
          <input
            value={comment}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setComment(e.target.value)
            }
            type="text"
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus-ring focus:border-blue-300"
            name="comment"
          />
          <button
            disabled={!data?.user?.email}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white w-fit font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 mt-2 disabled:bg-gray-400"
          >
            Sent Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormComment;
