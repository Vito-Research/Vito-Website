import { PostsOrPages } from "@tryghost/content-api";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { GhostApiContext } from "./Blog";
import BlogPost from "./BlogPost";

function BlogFeed() {
  const api = useContext(GhostApiContext);
  const [posts, setPosts] = useState<PostsOrPages | null>();
  useEffect(() => {
    const getPosts = async () => {
      setPosts(
        await api?.posts.browse({
          include: ["authors", "tags", "count.posts"],
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
