import axios from "axios";
import { useState } from "react";
import BlackButton from "../Button/BlackButton";
import { useNavigate } from "react-router-dom";

function DeleteExample() {
  const route = useNavigate();
  function handleRoute() {
    route("/");
  }
  const [userId, setUserId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/myitems/${userId}`);
      console.log("Post deleted successfully");
      setUserId("");
    } catch (err) {
      console.error("Post delete error", err);
    }
  };

  return (
    <div className="classic-form">
      <h2 className="text-2xl font-bold mb-4">Delete Post</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update the id state
          placeholder="ID"
          className="block w-full p-2 border border-gray-300 rounded mr-2"
        />
        <button
          onClick={handleDelete}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </div>
      <div className="flex justify-end p-4">
        <BlackButton name="body" type="button" onClick={handleRoute} />
      </div>
    </div>
  );
}

export default DeleteExample;
