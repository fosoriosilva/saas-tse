import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition";

  const variantStyles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-700"
      : "border boder-slate-300 bg-white - text-slate-900 hover:bg-slate-50";

  const styles = clsx(baseStyles, variantStyles, className);

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );

    return (
      <button type={type} className={styles}>
        {children}
      </button>
    );
  }
};

export default Button;
