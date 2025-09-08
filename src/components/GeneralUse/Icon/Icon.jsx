import PropTypes from "prop-types";

const Icon = ({ w, h = w, className, iconName }) => {
  return (
    <svg className={className} width={w} height={h} viewBox="0 0 32 32">
      <use href={`/images/logo.svg#${iconName}`} />
    </svg>
  );
};

Icon.propTypes = {
  w: PropTypes.number.isRequired,
  h: PropTypes.number,
  className: PropTypes.string,
  iconName: PropTypes.string.isRequired,
};

export default Icon;
