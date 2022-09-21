import React from "react";
import { Navbar } from "../../components";
import InfoSection from "../../components/InfoSection/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "./Data";
function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Home;
