import { addToppings } from "@/slices/basketSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { containerVariants, nextVariants } from "./base";
import { buttonVariants } from ".";

type Props = {};

function Toppings({}: Props) {
  const toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    setSelected([]);
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
          Step 2: Choose Your Toppings
        </h1>

        <ul className="text-xl space-y-3">
          {toppings.map((topping) => {
            return (
              <motion.li
                whileHover={{
                  scale: 1.3,
                  originX: 0,
                  color: "#f8e112",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                key={topping}
                onClick={() => {
                  dispatch(addToppings(topping));
                  setSelected([...selected, topping]); // set the selected state to the current base
                }}
                className={`cursor-pointer ${
                  selected.includes(topping) ? "font-bold" : ""
                }`} // apply styling only if the current base is selected
              >
                {selected.includes(topping) && ">"}{" "}
                {/* add the ">" symbol only if the current base is selected */}
                <span className={selected.includes(topping) ? "ml-1" : ""}>
                  {topping}
                </span>
              </motion.li>
            );
          })}
        </ul>

        {selected.length !== 0 && (
          <motion.div variants={nextVariants}>
            <motion.button
              onClick={() => {
                router.push("/order");
              }}
              variants={buttonVariants}
              whileHover="hover"
              className="button"
            >
              Order
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default Toppings;
