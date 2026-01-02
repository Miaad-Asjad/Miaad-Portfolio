const Button = ({ children, variant = "primary" }) => {
  const base = "px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const styles = {
    primary: "bg-primary text-white hover:bg-teal-800",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
