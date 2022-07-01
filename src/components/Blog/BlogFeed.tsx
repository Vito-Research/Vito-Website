import { PostOrPage, PostsOrPages } from "@tryghost/content-api";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { GhostApiContext } from "./Blog";
import BlogPost from "./BlogPost";

function BlogFeed() {
  const api = useContext(GhostApiContext);
  const [posts, setPosts] = useState<PostsOrPages | null>();
  const [query, setQuery] = useSearchParams();
  useEffect(() => {
    const getPosts = async () => {
      setPosts(
        await api?.posts.browse({
          limit: 5,
          page: query.has("page") ? parseInt(query.get("page") ?? "0", 10) : 0,
        })
      );
    };
    getPosts();
  }, []);

  return (
    <div className="section blog-feed">
      {posts?.map((p, i) => (
        <BlogPost postProp={p} rounded={i === 0} />
      ))}
    </div>
  );
}

export default BlogFeed;
