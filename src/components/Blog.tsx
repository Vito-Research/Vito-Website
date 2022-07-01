import React, { useEffect, useState } from "react";
import GhostContentAPI, { PostsOrPages } from "@tryghost/content-api";
import Landing from "./Landing";
import SectionContainer from "./SectionContainer";

function Blog() {
  const [posts, setPosts] = useState<PostsOrPages>();

  useEffect(() => {
    const api = new GhostContentAPI({
      url: "https://vito-test.ghost.io",
      key: "267fbd81200677364417c21bb9",
      version: "v5.0",
    });

    async function getPosts() {
      setPosts(await api.posts.browse());
    }
    getPosts();
  }, []);

  return (
    <div className="page blog">
      <Landing>
        <h1>Vito Blog</h1>
        <p>Keep up to date on the latest developments with Vito</p>
      </Landing>
      <SectionContainer>
        <div className="section">
          <h1>Hello!</h1>
          {posts?.map((p) => (
            <>
              <h2>{p.title ?? ""}</h2>
              <div dangerouslySetInnerHTML={{ __html: p.html ?? "" }}></div>
            </>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

export default Blog;
