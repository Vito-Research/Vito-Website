import { PostsOrPages } from "@tryghost/content-api";
import { formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { GhostApiContext } from "./Blog";

function BlogIndex() {
  const [posts, setPosts] = useState<PostsOrPages>();
  const api = useContext(GhostApiContext);
  useEffect(() => {
    const getPosts = async () => {
      setPosts(await api?.posts.browse());
    };
    getPosts();
  }, []);
  return (
    <div className="section blog-index">
      <h1 className="section-header">Blog Index</h1>
      <hr />
      {posts?.map((post) => (
        <h2>
          <Link to={`/blog/${post.slug}`}>
            {post.title} -{" "}
            {formatDistanceToNow(new Date(post.published_at ?? ""), {
              addSuffix: true,
            })}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export default BlogIndex;
