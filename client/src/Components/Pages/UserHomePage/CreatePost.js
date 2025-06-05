import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleInputClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Post content:", content);
    // You will send `content` to the backend here
    setIsModalOpen(false);
  };

  return (
    <div className="postformWrapper flex w-full justify-center bg-[#0969c3] h-[5rem] items-center mx-auto my-5 rounded-xl">
      <form action="POST">
        <input
          type="text"
          name="post"
          placeholder="Create a post"
          className="rounded-3xl focus:outline-none border-gray-300 bg-white border-none p-3 mx-2 my-0 w-[22rem] text-black"
          onClick={handleInputClick}
          readOnly
        />
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl mb-4">Create a Post</h2>
            <form onSubmit={handleSubmit}>
              <ReactQuill
                value={content}
                onChange={setContent}
                className="mb-4"
                theme="snow"
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-lg"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
