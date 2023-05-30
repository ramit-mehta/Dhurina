import React from "react";
import HeroSsc from "./ssc/HeroSsc";
import FreeMock from "./ssc/FreeMock";
import PreviousYear from "./ssc/PreviousYear";
import PreviousYear12 from "./ssc/PreviousYear12";
import PremiumTest from "./ssc/PremiumTest";
import EnglishQuiz from "./ssc/EnglishQuiz";

const Ssc = () => {
  return (
    <>
      <EnglishQuiz />
      <HeroSsc />
      <FreeMock />
      <PreviousYear />
      <PreviousYear12 />
      <PremiumTest />
    </>
  );
};

export default Ssc;
