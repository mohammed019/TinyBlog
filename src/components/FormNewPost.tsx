"use client";
import type { FormData } from "@/types/blogs";
import axios from "axios";
import { useSession } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
const inputClass = `w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus-ring focus:border-blue-300`;

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChangeForm = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    const { name, value } = e.target; // grab the name and the value from the input and textArea

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/posts", formData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmitForm}>
      <div className="mb-4">
        <input
          value={formData.title}
          onChange={handleChangeForm}
          type="text"
          className={inputClass}
          placeholder="Enter The Title"
          name="title"
        />
      </div>
      <div className="mb-4">
        <ReactTextareaAutosize
          value={formData.content}
          onChange={handleChangeForm}
          minRows={5}
          name="content"
          className={inputClass}
          placeholder="Enter The Content"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400"
      >
        Create
      </button>
    </form>
  );
};

export default FormNewPost;
