"use client";
import { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState<string>("");
  return (
    <div>
      <div className="mt-2 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(comment);
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
