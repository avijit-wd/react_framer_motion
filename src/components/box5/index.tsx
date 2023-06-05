import { motion, useAnimation } from "framer-motion";

const Box5 = () => {
  const control = useAnimation();

  return (
    <div className="box-container">
      <button
        className="button"
        onClick={() => {
          control.start({
            x: 1500,
            transition: { duration: 2 },
          });
        }}
      >
        Right
      </button>
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
        className="button"
      >
        Left
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
        className="button"
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: 0,
            transition: { duration: 1 },
          });
        }}
        className="button"
      >
        Square
      </button>
      <button onClick={() => control.stop()} className="button">
        Stop
      </button>

      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default Box5;
