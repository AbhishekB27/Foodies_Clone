import React from "react";
import ServiceImage1 from "./../assets/ServiceImage1.jpg";
import ServiceImage2 from "./../assets/ServiceImage2.jpg";
import ServiceImage3 from "./../assets/ServiceImage3.jpg";
import ManAvtar from "./../assets/man.png";

const HeroSection4 = () => {
  return (
    <div className="min-h-[605px] grid place-items-center">
      <div className="container grid place-items-center gap-5">
        <div className="px-4 border-l-4 border-l-[#EA4D24]">
          {" "}
          <span className="font-semibold">Services</span> We Provide{" "}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-flow-dense gap-3 w-full">
          <div className="min-h-[250px] text-center flex flex-col hover:scale-[0.95] cursor-pointer transition-all shadow-lg">
            {" "}
            <img
              className="w-full h-[250px] object-cover object-center"
              src={ServiceImage1}
              alt=""
            />{" "}
            <span className="py-2">Dine In/Takeaway</span>{" "}
          </div>
          <div className="min-h-[250px] text-center flex flex-col hover:scale-[0.95] cursor-pointer transition-all shadow-lg">
            {" "}
            <img
              className="w-full h-[250px] object-cover object-center"
              src={ServiceImage2}
              alt=""
            />{" "}
            <span className="py-2">Easy Table Reservation</span>{" "}
          </div>
          <div className="min-h-[250px] text-center flex flex-col hover:scale-[0.95] cursor-pointer transition-all shadow-lg">
            {" "}
            <img
              className="w-full h-[250px] object-cover object-center"
              src={ServiceImage3}
              alt=""
            />{" "}
            <span className="py-2">Free Home Delivery</span>{" "}
          </div>
        </div>
        <div className="space-y-3 grid place-items-center">
          <div className="px-4 border-l-4 border-l-[#EA4D24]">
            {" "}
            Here From Our <span className="font-semibold">Customers</span>{" "}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-3">
            <div className="bg-[#EA4D24]/30 px-2 py-1">
              {" "}
              <div>
                <img className="w-[2rem] md:w-[2.5rem] lg:w-[3.5rem]" src={ManAvtar} alt="" />
              </div>{" "}
              <div>
                {" "}
                {Array(5)
                  .fill(0)
                  .map((item) => (
                    <i class="fa-solid fa-star text-yellow-400"></i>
                  ))}{" "}
              </div>{" "}
              <p>
                I recently visited a new restaurant in town and was impressed by
                the quality of their food. The menu had a great variety of
                options, including vegan and gluten-free dishes. The food was
                cooked to perfection and tasted absolutely delicious.
              </p>{" "}
            </div>
            <div className="bg-[#EA4D24]/30 px-2 py-1">
              {" "}
              <div>
                <img className="w-[2rem] md:w-[2.5rem] lg:w-[3.5rem]" src={ManAvtar} alt="" />
              </div>{" "}
              <div>
                {" "}
                {Array(5)
                  .fill(0)
                  .map((item) => (
                    <i class="fa-solid fa-star text-yellow-400"></i>
                  ))}{" "}
              </div>{" "}
              <p>
                I recently visited a new restaurant in town and was impressed by
                the quality of their food. The menu had a great variety of
                options, including vegan and gluten-free dishes. The food was
                cooked to perfection and tasted absolutely delicious.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection4;
