import Link from "next/link";
import React from "react";

const Button = ({ link, children }) => {
  return (
    <Link
      className="rounded-[50px] z-50 font-futura nav-button self-center px-[14px] py-[7px] text-[0.8rem]  border hover:bg-white hover:text-[#373635] text-white bg-[#373635] hover:transition-all  transition-all duration-300 ease-in-out"
      href={link}
    >
      {children}
    </Link>
  );
};

export default Button;
