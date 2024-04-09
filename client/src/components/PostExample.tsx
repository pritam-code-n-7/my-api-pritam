import axios from "axios";
import { useState } from "react";

function PostExample() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const[userId, setUserId]=useState(1);

  const handlePost = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/api/myitems", {
        title,
        body,
        userId: userId,
      });
      console.log("Post created:", res.data);
      setTitle("");
      setBody("");
      setUserId(userId+1);
    } catch (error) {
      console.error("Error creating post", error);
    }
  };
  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handlePost} className="">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="body"
         
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default PostExample;
