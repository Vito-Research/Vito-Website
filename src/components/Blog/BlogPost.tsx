import { PostOrPage } from "@tryghost/content-api";
import { format } from "date-fns";
import { Link } from "react-router-dom";

interface BlogPostProps {
  post: PostOrPage | null;
  rounded: boolean;
  ownPage: boolean;
}

function BlogPost({ post, rounded, ownPage }: BlogPostProps) {
  return (
    <>
      {post && (
        <div
          className={`blog-post-feature-img${rounded ? " rounded" : ""}
          `}
          style={
            post.feature_image
              ? { backgroundImage: `url(${post?.feature_image!})` }
              : undefined
          }
        />
      )}
      <div className={`section blog-post${ownPage ? " ownpage" : ""}`}>
        {(post && (
          <>
            <div className="blog-post-head">
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
              <a
                className="btn-tweet"
                href={`https://twitter.com/intent/tweet?text=Read this post from the %23VitoVitals development team: "${post.title}" www.vitovitals.org/blog/${post.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                Share on Twitter
              </a>
              <br />
              <br />

              <hr />
            </div>
            <div
              className="post-content"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: post.html ?? "" }}
            />
          </>
        )) || (
          <h1 className="section-header post-not-found">
            Sorry, we couldn't find that post.
            <br />
            <Link to="/blog">Browse posts?</Link>
          </h1>
        )}
      </div>
    </>
  );
}

export default BlogPost;
