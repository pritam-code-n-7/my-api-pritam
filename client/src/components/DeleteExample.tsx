import axios from "axios";
import { useState } from "react";

function DeleteExample() {
  const[userId, setUserId]=useState("")
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/api/myitems/${userId}`);
      console.log("Post deleted successfully");
    } catch (err) {
      console.error("Post delete error", err);
    }
  };

  return (
    <div>
      <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)} // Update the id state
          placeholder="ID"
        />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteExample;
