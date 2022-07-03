import React from "react";
import { Helmet } from "react-helmet";
import HomeLanding from "./sections/HomeLanding";
import HomeSections from "./sections/HomeSections";

function Home() {
  return (
    <>
      <Helmet>
        <title>Vito</title>
      </Helmet>
      <HomeLanding />
      <HomeSections />
    </>
  );
}

export default Home;
