import React from "react";
import { motion, useCycle } from "framer-motion";

type Props = {};

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        //yoyo: Infinity,
        duration: 0.5,
        repeatType: "mirror",
        repeat: Infinity,
      },
      y: {
        //yoyo: Infinity,
        duration: 0.25,
        repeatType: "mirror",
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        //yoyo: Infinity,
        duration: 0.25,
        repeatType: "mirror",
        repeat: Infinity,
        ease: "easeOut",
      },
    },
  },
};

function Loader({}: Props) {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="w-[10px] h-[10px] mx-auto rounded-full bg-white"
      ></motion.div>
      <div onClick={() => cycleAnimation()} className="cursor-pointer">
        Cycle Loader
      </div>
    </>
  );
}

export default Loader;
