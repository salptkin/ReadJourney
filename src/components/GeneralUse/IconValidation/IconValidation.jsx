import clsx from "clsx";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./IconValidation.module.css";

const IconValidation = ({ touched, errors }) => {
  const show = !!touched;
  const isError = show && !!errors;
  const isSuccess = show && !errors;

  if (!show) return null;

  return (
    <Icon
      className={clsx(
        styles.base,
        isError && styles.error,
        isSuccess && styles.success
      )}
      w={18}
      iconName={isError ? "icon-error" : "icon-check"}
    />
  );
};

IconValidation.propTypes = {
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

export default IconValidation;
