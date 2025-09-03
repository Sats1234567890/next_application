import React from "react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ text, href, onClick, className, children }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-block bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ${className}`}
    >
      {text}
      {children}
    </a>
  );
}
