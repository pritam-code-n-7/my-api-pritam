import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BlackButton from "../Button/BlackButton";

interface Post {
  title: string;
  body: string;
  userId: number;
}

function PostExample(): JSX.Element {
  const route = useNavigate()
  function handleRoute() {
    route("/get");
  }
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [latestId, setLatestId] = useState<number>(0);

  useEffect(() => {
    fetchLatestId();
  }, []); // Fetch the latest ID only once when the component mounts

  const fetchLatestId = async () => {
    try {
      const response = await axios.get<number>(
        "http://localhost:3003/api/latestId"
      );
      setLatestId(response.data); // Set the latest ID fetched from the backend
    } catch (error) {
      console.error("Error fetching latest ID", error);
    }
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handlePost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newId = latestId + 1; // Increment the latestId to get a new unique ID for the post
      // Fetch latest ID again before posting
      await fetchLatestId();

      const res = await axios.post<Post>("http://localhost:3003/api/myitems", {
        title,
        body,
        userId: newId, // Use the new unique ID for the post
      });
      console.log("Post created:", res.data);
      setTitle("");
      setBody("");
      setLatestId((prevId) => prevId + 1); // Update latestId using the previous value to ensure consistency
    } catch (error) {
      console.error("Error creating post", error);
    }
  };

  return (
    <div className="classic-form">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handlePost}>
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
        <BlackButton name="get" type="button" onClick={handleRoute} />
      </div>
    </div>
  );
}

export default PostExample;
