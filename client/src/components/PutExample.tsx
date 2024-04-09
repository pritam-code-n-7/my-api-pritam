  import axios from "axios";
  import { useState } from "react";

  function PutExample() {
    const [userId, setUserId] = useState(""); // State variable for the id
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleUpdate = async () => {
      try {
        if (!userId) {
          console.error("User ID is required for updating.");
          return;
        }
        
        const res = await axios.put(`http://localhost:3003/api/myitems/${userId}`, {
          title,
          body,
        });
        console.log("Post updated:", res.data);
        
        // Reset form fields after successful update
        setTitle("");
        setBody("");
      } catch (err) {
        console.error("Post error", err);
      }
    };

    return (
      <div>
        <h2>Update Post</h2>
        <form
          onSubmit={handleUpdate}
          className="flex flex-col box-border border-2 dark:border-slate p-2 gap-2 justify-items-center"
        >
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)} // Update the id state
            placeholder="User ID"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Body"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

  export default PutExample;
