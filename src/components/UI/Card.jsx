

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) => {
  return (
    <div
      className={`glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hoverEffect ? 'hover:bg-slate-900/80 hover:border-primary-500/40 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1' : ''
      } ${
        glow ? 'shadow-lg shadow-primary-500/5' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
