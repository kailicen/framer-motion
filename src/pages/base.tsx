import { addBase } from "@/slices/basketSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { buttonVariants } from ".";

type Props = {};

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

export const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

function Base({}: Props) {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(
    "" || "Classic" || "Thin & Crispy" || "Thick Crust"
  );
  const router = useRouter();

  useEffect(() => {
    setSelected("");
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex flex-col space-y-12 items-start"
      >
        <h1 className="text-2xl border-b-[1px] pb-1">
          Step 1: Choose Your Base
        </h1>

        <ul className="text-xl space-y-3">
          {bases.map((base) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                  color: "#f8e112",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                key={base}
                onClick={() => {
                  dispatch(addBase(base));
                  setSelected(base); // set the selected state to the current base
                }}
                className={`cursor-pointer ${
                  selected === base ? "font-bold" : ""
                }`} // apply styling only if the current base is selected
              >
                {selected === base && ">"}{" "}
                {/* add the ">" symbol only if the current base is selected */}
                <span className={selected === base ? "ml-1" : ""}>{base}</span>
              </motion.li>
            );
          })}
        </ul>

        {selected !== "" && (
          <motion.div
            variants={nextVariants}
            // initial="hidden"
            // animate="visible"
          >
            <motion.button
              onClick={() => router.push("/toppings")}
              variants={buttonVariants}
              whileHover="hover"
              className="button"
            >
              Next
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Base;
