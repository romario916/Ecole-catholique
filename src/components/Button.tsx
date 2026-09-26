import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-blue-900 text-white shadow-sm hover:bg-blue-800",
    secondary:
      "bg-yellow-500 text-blue-950 shadow-sm hover:bg-yellow-400",
    outline:
      "border border-slate-300 bg-white text-slate-700 hover:border-blue-900 hover:text-blue-900",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        <ArrowRight size={17} />
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight size={17} />
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
      <ArrowRight size={17} />
    </button>
  );
};

export default Button;