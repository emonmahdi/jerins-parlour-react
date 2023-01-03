import React from "react";
import personImg1 from "../../Assets/Image/test-1.png";
import personImg2 from "../../Assets/Image/test-2.png";
import personImg3 from "../../Assets/Image/test-3.png";

const Testimonial = () => {
  return (
    <div className="py-12 container mx-auto px-12">
      <div>
        <h2 className="text-4xl text-center font-bold text-neutral">
          Testimonial
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-12">
        {/* single testimonial */}
        <div className="border shadow-lg p-12 rounded-lg text-center cursor-pointer">
          <div className="flex gap-4 mb-2">
            <div>
              <img src={personImg1} className="w-16" alt="" />
            </div>
            <div>
              <h3 className="text-neutral text-2xl font-bold">Nask Patrik</h3>
              <p className="text-md mt-1 text-left">CEO, Manpol</p>
            </div>
          </div>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nulla provident ducimus qui dolorem maxime, possimus in, suscipit
            porro odio explicabo.{" "}
          </p>
          <div className="review-rating text-left mt-4">
          <div className="rating ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400" 
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            /> 
          </div>
          </div>
        </div>
        {/* single testimonial */}
        <div className="border shadow-lg p-12 rounded-lg text-center cursor-pointer">
          <div className="flex gap-4 mb-2">
            <div>
              <img src={personImg2} className="w-16" alt="" />
            </div>
            <div>
              <h3 className="text-neutral text-2xl font-bold">Miriam barron</h3>
              <p className="text-md mt-1 text-left">CEO, Manpol</p>
            </div>
          </div>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nulla provident ducimus qui dolorem maxime, possimus in, suscipit
            porro odio explicabo.{" "}
          </p>
          <div className="review-rating text-left mt-4">
          <div className="rating ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400" 
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            /> 
          </div>
          </div>
        </div>
        {/* single testimonial */}
        <div className="border shadow-lg p-12 rounded-lg text-center cursor-pointer">
          <div className="flex gap-4 mb-2">
            <div>
              <img src={personImg3} className="w-16" alt="" />
            </div>
            <div>
              <h3 className="text-neutral text-2xl font-bold">Nask Patrik</h3>
              <p className="text-md mt-1 text-left">CEO, Manpol</p>
            </div>
          </div>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            nulla provident ducimus qui dolorem maxime, possimus in, suscipit
            porro odio explicabo.{" "}
          </p>
          <div className="review-rating text-left mt-4">
          <div className="rating ">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked  
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
             
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              
            /> 
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
