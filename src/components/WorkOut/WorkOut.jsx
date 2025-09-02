import { Link } from "react-router-dom";
import clsx from "clsx";
import Icon from "../GeneralUse/Icon/Icon";
import workoutSteps from "../../utils/data/workout";
import styles from "./Workout.module.css";

const Workout = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Start your workout</h2>

      <ul className={styles.list}>
        {workoutSteps.map(({ text, span }, index) => (
          <li
            key={index}
            className={clsx(
              styles.item,
              index === 0 ? styles.one : styles.two,
              index === 0 && styles.itemFirst
            )}
          >
            {text} <span className={styles.muted}>{span}</span>
          </li>
        ))}
      </ul>

      <Link to="/library" className={styles.link}>
        My library
        <Icon className={styles.icon} w={24} iconName="icon-log-in" />
      </Link>
    </div>
  );
};

export default Workout;
