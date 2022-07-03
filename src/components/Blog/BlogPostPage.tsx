import { PostOrPage } from "@tryghost/content-api";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { GhostApiContext } from "./Blog";
import BlogPost from "./BlogPost";

function BlogPostPage() {
  const { slug } = useParams();
  const api = useContext(GhostApiContext);

  const [post, setPost] = useState<PostOrPage | null>(null);
  useEffect(() => {
    const getPost = async () => {
      await api?.posts
        .read({ slug: slug! }, { include: ["authors", "tags", "count.posts"] })
        .then((p) => {
          setPost(p);
        })
        .catch(() => {
          setPost(null);
        });
    };
    getPost();
  }, [slug]);
  return (
    <>
      <Helmet>
        <title>
          {post?.title !== undefined
            ? `${post?.title} - Vito Blog`
            : "Vito Blog"}
        </title>
      </Helmet>
      <BlogPost post={post} rounded ownPage />
    </>
  );
}

export default BlogPostPage;
