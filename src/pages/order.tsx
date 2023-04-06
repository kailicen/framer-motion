import { selectPizza } from "@/slices/basketSlice";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { buttonVariants } from ".";
import { useRouter } from "next/router";

type Props = {};
const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function Order({}: Props) {
  const pizza = useSelector(selectPizza);
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col items-center space-y-16"
      >
        <h2 className="text-2xl">Thank you for your order :)</h2>
        <motion.p variants={childVariants} className="text-xl my-7">
          You ordered a <span className="underline">{pizza.base}</span> pizza
          with:
        </motion.p>
        <motion.div variants={childVariants}>
          {pizza.toppings.map((topping: any) => (
            <div key={topping}>{topping}</div>
          ))}
        </motion.div>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => router.push("/")}
          className="button"
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Order;
