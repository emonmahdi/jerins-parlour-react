import React from "react";

import heroImg from "../../Assets/Image/hero.png";

const HeroContent = () => {
  return (
    <>
      <div className="lg:px-16 mx-auto">
        <div className="hero min-h-screen">
          <div className="hero-content grid lg:grid-cols-2 gap-4 ">
            <div>
              <h1 className="text-5xl font-bold">Beauty Salun For Every Woman</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <div className="text-end"> 
              <img src={heroImg} className="max-w-sm h-[500] rounded-lg shadow-2xl mx-auto" />
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
