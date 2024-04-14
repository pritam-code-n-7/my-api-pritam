import axios from "axios";
import { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function GetExample() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/myitems");
        setPosts(res.data);
      } catch (err) {
        console.error("Fetching error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="classic-form">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border border-gray-300 rounded">
          <h3 className="text-xl font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetExample;
