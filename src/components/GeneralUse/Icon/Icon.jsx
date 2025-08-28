const Icon = ({ w, h = w, className, iconName }) => {
  return (
    <svg className={className} width={w} height={h}>
      <use href={`/images/logo.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
