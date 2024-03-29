import React from "react";
// import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";

function Service() {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default Service;
