

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-slate-100 border border-slate-800 hover:border-slate-700 hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent border border-slate-800 hover:border-primary-500/50 hover:bg-primary-500/5 text-slate-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0',
    ghost: 'bg-transparent hover:bg-slate-900/60 text-slate-400 hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base tracking-wide',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
