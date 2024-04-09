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
    const fetchPost = async () => {
      try {
        const res = await axios.get("http://localhost:3003/api/myitems");
        setPosts(res.data);
      } catch (err) {
        console.error("fetching error", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.userId}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetExample;
