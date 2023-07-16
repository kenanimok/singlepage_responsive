import React from "react";
import { homeObjOne, homeObjTwo } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  );
}

export default Products;
