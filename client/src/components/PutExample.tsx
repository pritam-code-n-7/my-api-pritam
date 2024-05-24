import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../Button/BlackButton";

function PutExample(): JSX.Element {
  const route = useNavigate();
  function handleRoute() {
    route("/delete");
  }
  const [userId, setUserId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const id = parseInt(userId);

      if (isNaN(id)) {
        console.error("Invalid User ID. Please provide a number.");
        return;
      }

      const updatedData = { title, body, userId: id };
      const url = `http://localhost:3003/api/myitems`; // Remove the userId from the URL

      await axios.put(`${url}/${id}`, updatedData); // Append userId to the URL here
      console.log("Post updated successfully");

      resetForm();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const resetForm = () => {
    setUserId("");
    setTitle("");
    setBody("");
  };

  const handleUserIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <div className="classic-form">
      <h2 className="text-2xl font-bold mb-4">Update Post</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={userId}
          onChange={handleUserIdChange}
          placeholder="User ID"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          value={body}
          onChange={handleBodyChange}
          placeholder="Body"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-end p-4">
        <BlackButton name="delete" type="button" onClick={handleRoute} />
      </div>
    </div>
  );
}

export default PutExample;
