import React from "react";

import heroImg from "../../Assets/Image/hero.png";

const HeroContent = () => {
  return (
    <>
      <div className="px-16 mx-auto">
        <div class="hero min-h-screen">
          <div class="hero-content grid grid-cols-2 gap-4 ">
            <div>
              <h1 class="text-5xl font-bold">Beauty Salun For Every Woman</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
            <div className="text-end"> 
              <img src={heroImg} class="max-w-sm h-[500] rounded-lg shadow-2xl mx-auto" />
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
