import React from "react";
import { homeObjOne, homeObjThree } from "./Data";
import InfoSection from "../../components/InfoSection/InfoSection";
function SignUp() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default SignUp;
