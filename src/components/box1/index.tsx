import { motion } from "framer-motion";
import { useState } from "react";

const Box1 = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        animate={{
          x: isAnimating ? 1750 : 0,
          opacity: isAnimating ? 1 : 0.2,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 20,
        }}
        onClick={() => setIsAnimating((prev) => !prev)}
        className="box"
      ></motion.div>
    </div>
  );
};

export default Box1;
