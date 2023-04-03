import { useEffect, useState } from "react"
import Card from "./components/Card";
import { getPosts } from "./controllers/Posts";

function App() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    getPosts().then(res => setPosts(res));
  }, [])
  return (
  <div>{
    posts && 
      posts.data.map((post) => (
        <Card props={post} />
      )
  )}
  </div>)

}

export default App
