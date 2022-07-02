import { PostsOrPages } from "@tryghost/content-api";
import { useContext, useEffect, useState } from "react";
import { GhostApiContext } from "./Blog";
import BlogPreview from "./BlogPreview";

function BlogIndex() {
  const [posts, setPosts] = useState<PostsOrPages>();
  const api = useContext(GhostApiContext);
  useEffect(() => {
    const getPosts = async () => {
      setPosts(await api?.posts.browse({ formats: ["html", "plaintext"] }));
    };
    getPosts();
  }, []);
  return (
    <div className="section blog-index">
      <h1 className="section-header">Blog Index</h1>
      <hr />
      <div className="blog-preview-container">
        {posts?.map((post) => (
          <BlogPreview post={post} />
        ))}
      </div>
    </div>
  );
}

export default BlogIndex;
