import { motion } from "framer-motion";

const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      staggerChildren: 0.2,
    },
  };

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box, index) => (
          <motion.li
            key={index}
            variants={listVariant}
            className="boxItem"
          ></motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
