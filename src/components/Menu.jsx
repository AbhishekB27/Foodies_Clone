import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import MenuImage7 from "./../assets/MenuImage7.jpg";

const Menu = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);
    const menuStyle = {
        background: `url("${MenuImage7}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
  return (
    <div className="min-h-[605px] grid place-items-center">
      <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 50 }}
       animate={controls}
      className="container grid place-items-center gap-5">
        <div className="h-[450px] w-full grid place-items-center" style={menuStyle}>
          {" "}
          <div className="px-6 rounded-md py-2 bg-[#EA4D24] text-white">
            Menu Card
          </div>{" "}
          {/* <img
            className="w-full h-full object-cover object-center"
            src={MenuImage7}
            alt=""
          />{" "} */}
        </div>
        <div className="flex flex-col justify-between items-center gap-6">
        
        <div className="space-y-6 grid place-items-center">
            <div className="px-4 border-l-4 border-l-[#EA4D24]">
              {" "}
              <span className="font-semibold">Salads</span>{" "}
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {" "}
              {Array(8)
                .fill(0)
                .map((item) => (
                  <div className="border-t-2 border-dashed border-[#EA4D24] relative ">
                    {" "}
                    <div className="absolute top-[-0.8rem] px-3 bg-white w-fit">
                      SALAD THAI
                    </div>{" "}
                    <p className="px-3 pt-6">
                      Iceburg, Lettuce, Carrots, Turnips, Cucumbers, Soyabeans,
                      Marinated chicken, Fresh mint, Cilanto, Peasnuts
                    </p>{" "}
                    <div className="absolute right-0 top-[-0.8rem] px-3 bg-white w-fit">
                      Rs.499
                    </div>{" "}
                  </div>
                ))}{" "}
            </div>
          </div>

          <div className="space-y-6 grid place-items-center w-full">
            <div className="px-4 border-l-4 border-l-[#EA4D24]">
              {" "}
              <span className="font-semibold">Toasted Items </span>{" "}
            </div>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              {" "}
              {Array(8)
                .fill(0)
                .map((item) => (
                  <div className="border-t-2 border-dashed border-[#EA4D24] relative ">
                    {" "}
                    <div className="absolute top-[-0.8rem] px-3 bg-white w-fit">
                      QUICHE LORRAINE
                    </div>{" "}
                    <p className="px-3 pt-6">
                      White bread, Pastrami bacon, Swiss cheese, Lettuce, Tomatoes, Mayonnaise
                    </p>{" "}
                    <div className="absolute right-0 top-[-0.8rem] px-3 bg-white w-fit">
                      Rs.999
                    </div>{" "}
                  </div>
                ))}{" "}
            </div>
          </div>

          <div className="space-y-6 grid place-items-center w-full">
            <div className="px-4 border-l-4 border-l-[#EA4D24]">
              {" "}
              <span className="font-semibold">Main Course </span>{" "}
            </div>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              {" "}
              {Array(8)
                .fill(0)
                .map((item) => (
                  <div className="border-t-2 border-dashed border-[#EA4D24] relative ">
                    {" "}
                    <div className="absolute top-[-0.8rem] px-3 bg-white w-fit">
                      BURGER VEGETARIAN
                    </div>{" "}
                    <p className="px-3 pt-6">
                      Lettuce, Tomatoes, White sauce, Carrot, Onion, Corn,
                      Potatoes, Cucumber, Cheddar cheese
                    </p>{" "}
                    <div className="absolute right-0 top-[-0.8rem] px-3 bg-white w-fit">
                      Rs.499
                    </div>{" "}
                  </div>
                ))}{" "}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
