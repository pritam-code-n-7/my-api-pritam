import axios from "axios";
import { useState } from "react";

function PutExample() {
  const [userId, setUserId] = useState(""); // State variable for the id
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleUpdate = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      // Convert userId to a number
      const id = parseInt(userId);

      if (isNaN(id)) {
        console.error("Invalid User ID. Please provide a number.");
        return;
      }

      // Prepare the data to be updated
      const updatedData = {
        title,
        body,
        userId: id, // Update userId with the parsed id
      };

      // Make the PUT request to update data at the specified userId index
      const url = `http://localhost:3003/api/myitems/${id}`;
      const res = await axios.put(url, updatedData);
      console.log("Post updated:", res.data);

      // Reset form fields after successful update
      setTitle("");
      setBody("");
      setUserId("");
    } catch (err) {
      console.error("Post error", err);
    }
  };

  return (
    <div className="classic-form">
      <h2 className="text-2xl font-bold mb-4">Update Post</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update the id state
          placeholder="User ID"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
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
    </div>
  );
}

export default PutExample;
