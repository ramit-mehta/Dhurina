import React from "react";
import ShortHero from "./shorts/ShortHero";
import ShortsPlay from "./shorts/ShortsPlay";

const Shorts = () => {
  return (
    <>
      <div className="short_hero my-5">
        <div className="custom_container container">
          <ShortHero />
        </div>
      </div>
      <div className="custom_container container">
        <ShortsPlay />
      </div>
    </>
  );
};

export default Shorts;
