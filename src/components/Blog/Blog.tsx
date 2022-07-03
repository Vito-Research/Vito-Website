import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";
import React, { useEffect, useMemo } from "react";
import { Outlet, useParams } from "react-router-dom";
import Footer from "../Footer";
import Landing from "../Landing";
import SectionContainer from "../SectionContainer";
import "./blog.scss";

const GhostApiContext = React.createContext<GhostAPI | null>(null);

function Blog() {
  const params = useParams();
  const singleBlogPost = params.slug !== undefined;
  useEffect(() => {
    if (singleBlogPost) {
      document.getElementById("navbar")!.style.position = "sticky";
    }
    return () => {
      document.getElementById("navbar")!.style.position = "";
    };
  }, [params.slug]);

  const api = useMemo<GhostAPI>(
    () =>
      new GhostContentAPI({
        url: "https://vito.ghost.io",
        key: "f9afb680a32a2eee5fda92a9fc",
        version: "v5.0"
      }),
    []
  );

  return (
    <div className="page blog">
      {!singleBlogPost && (
        <Landing>
          <h1 className="">Vito Blog</h1>
          <p>
            Here's where we'll post devlogs, ideas for new projects, and stuff
            we learn as we develop Vito.
          </p>
        </Landing>
      )}
      <SectionContainer>
        <GhostApiContext.Provider value={api}>
          <Outlet />
        </GhostApiContext.Provider>
        <Footer />
      </SectionContainer>
    </div>
  );
}

export default Blog;
export { GhostApiContext };
