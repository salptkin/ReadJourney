import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./CircleProgressBar.module.css";

const CircleProgressBar = ({ percentage }) => {
  return (
    <div className={styles.wrapper}>
      <CircularProgressbar
        value={percentage}
        text="100%"
        strokeWidth={10}
        styles={{
          text: {
            fill: "#F9F9F9",
            fontSize: "18px",
            fontWeight: "bold",
          },
          trail: {
            stroke: "#1F1F1F",
            strokeLinecap: "round",
          },
          path: {
            stroke: "#30B94D",
            strokeLinecap: "round",
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
        }}
      />
    </div>
  );
};

export default CircleProgressBar;
