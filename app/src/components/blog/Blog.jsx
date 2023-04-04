import { useEffect, useState } from "react";
import { getPosts } from "../../controllers/Posts";
import Post from "./Post";

export default function Blog() {
  // Fetch posts
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <main className="flex justify-center pt-12">
      <div className="grid content-center gap-4 md:grid-cols-2 justify-items-center">
        {posts && posts.data.map((post) => <Post props={post} />)}
      </div>
    </main>
  );
}
