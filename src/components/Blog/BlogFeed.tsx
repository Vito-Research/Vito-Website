import { PostsOrPages } from "@tryghost/content-api";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import { GhostApiContext } from "./Blog";
import BlogPost from "./BlogPost";

function BlogFeed() {
  const api = useContext(GhostApiContext);
  const [posts, setPosts] = useState<PostsOrPages | null>();
  const [query] = useSearchParams();
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
      <Helmet>
        <title>Vito Blog</title>
      </Helmet>
      {posts?.map((p, i) => (
        <BlogPost post={p} rounded={i === 0} ownPage={false} />
      ))}
    </div>
  );
}

export default BlogFeed;
