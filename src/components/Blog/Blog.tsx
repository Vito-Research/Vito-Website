import GhostContentAPI, { GhostAPI } from "@tryghost/content-api";
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import Landing from "../Landing";
import SectionContainer from "../SectionContainer";
import "./blog.scss";

const GhostApiContext = React.createContext<GhostAPI | null>(null);

function Blog() {
  const api = useMemo<GhostAPI>(
    () =>
      new GhostContentAPI({
        url: "https://vito-test.ghost.io",
        key: "267fbd81200677364417c21bb9",
        version: "v5.0",
      }),
    []
  );

  return (
    <div className="page blog">
      <Landing>
        <h1 className="">Vito Blog</h1>
        <p>Keep up to date on the latest developments with Vito</p>
      </Landing>
      <SectionContainer>
        <GhostApiContext.Provider value={api}>
          <Outlet />
        </GhostApiContext.Provider>
      </SectionContainer>
    </div>
  );
}

export default Blog;
export { GhostApiContext };
