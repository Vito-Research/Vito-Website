import { PostOrPage } from "@tryghost/content-api";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GhostApiContext } from "./Blog";

interface BlogPostProps {
  postProp?: PostOrPage;
  rounded: boolean;
}

function BlogPost({ postProp, rounded }: BlogPostProps) {
  const [post, setPost] = useState<PostOrPage | null>();
  if (postProp === undefined) {
    const { slug } = useParams();
    const api = useContext(GhostApiContext);

    useEffect(() => {
      const getPost = async () => {
        if (!post) {
          await api?.posts
            .read(
              { slug: slug! },
              { include: ["authors", "tags", "count.posts"] }
            )
            .then((p) => {
              setPost(p);
            })
            .catch(() => {
              setPost(null);
            });
        }
      };
      getPost();
    }, [slug]);
  } else {
    useEffect(() => {
      setPost(postProp);
    }, []);
  }
  return (
    <>
      {post && (
        <div
          className={`blog-post-feature-img${rounded ? " rounded" : ""}`}
          style={
            post.feature_image
              ? { backgroundImage: `url(${post?.feature_image!})` }
              : undefined
          }
        />
      )}
      <div className="section blog-post">
        {(post && (
          <>
            <h1 className="section-header">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h1>
            <h2>{post?.primary_author?.name}</h2>
            <h2>
              {(() => {
                const date = new Date(post.published_at ?? "");
                return format(date, "LLLL do, y");
              })()}
            </h2>
            <h3>
              <Link to="/blog">Vito Blog</Link> /{" "}
              <Link to=".">{post.title}</Link>
            </h3>
            <hr />
            <div
              className="post-content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
            />
          </>
        )) || <h1>Post not found</h1>}
      </div>
    </>
  );
}

export default BlogPost;
