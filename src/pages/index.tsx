import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";

export const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
        exit={{ x: "-100vh", transition: { ease: "easeInOut" } }}
        className="flex flex-col items-center space-y-16"
      >
        <h1 className="text-4xl">Welcome to Pizza Joint</h1>
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          onClick={() => router.push("/base")}
          className="button"
        >
          Create your pizza
        </motion.button>
        <Loader />
      </motion.div>
    </div>
  );
}
