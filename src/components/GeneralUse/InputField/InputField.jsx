import clsx from "clsx";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import styles from "./InputField.module.css";

const InputField = ({
  id,
  type = "text",
  label,
  name,
  value,
  onChange,
  onBlur,
  placeholder = "",
  inputStyles = "",
  wrapperStyles = "",
  icon = false,
  showPassword = false,
  toggleShowPassword,
  children,
  touched,
  errors,
}) => {
  const hasTouched = Boolean(touched);
  const hasError = Boolean(errors);

  return (
    <div className={clsx(styles.wrapper, wrapperStyles)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <input
        id={id}
        type={showPassword ? "text" : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={clsx(
          styles.input,
          hasTouched && hasError && styles.inputError,
          hasTouched && !hasError && styles.inputSuccess,
          inputStyles
        )}
      />

      {icon && (
        <button
          type="button"
          onClick={toggleShowPassword}
          className={clsx(
            styles.iconBtn,
            hasTouched ? styles.iconBtnShift : styles.iconBtnDefault
          )}
        >
          <Icon
            className={styles.iconSvg}
            w={18}
            iconName={showPassword ? "icon-eye" : "icon-eye-off"}
          />
        </button>
      )}

      {children}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputStyles: PropTypes.string,
  wrapperStyles: PropTypes.string,
  icon: PropTypes.bool,
  showPassword: PropTypes.bool,
  toggleShowPassword: PropTypes.func,
  children: PropTypes.node,
  touched: PropTypes.bool,
  errors: PropTypes.string,
};

export default InputField;
