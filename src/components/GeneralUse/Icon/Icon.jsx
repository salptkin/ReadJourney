const Icon = ({ w, h = w, className, iconName }) => {
  return (
    <svg className={className} width={w} height={h}>
      <use href={`/icons/sprite.svg#${iconName}`} />
    </svg>
  );
};

export default Icon;
