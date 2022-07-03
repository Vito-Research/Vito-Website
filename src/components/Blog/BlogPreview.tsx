import { PostOrPage } from "@tryghost/content-api";
import React from "react";
import { Link } from "react-router-dom";

type BlogPreviewProps = {
  post: PostOrPage;
};

function BlogPreview({ post }: BlogPreviewProps) {
  return (
    <div className="blog-preview">
      <Link to={`/blog/${post.slug}`}>
        <div
          className="blog-preview-feature-img"
          style={
            post.feature_image
              ? { backgroundImage: `url(${post?.feature_image!})` }
              : undefined
          }
        />
        <div className="blog-preview-content">
          <h2>{post.title}</h2>
          <p>{`${post.excerpt}...`}</p>
        </div>
      </Link>
    </div>
  );
}

export default BlogPreview;
