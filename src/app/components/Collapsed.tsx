"use client";
import React, { Suspense, useState } from "react";
import { useCollapse } from "react-collapsed";

function Collapsed({
  children,
  openContent,
  closeContent,
  isActive,
  onSelect,
}) {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isActive,
  });

  return (
    <div className="pt-2">
      <button
        {...getToggleProps({
          onClick: onSelect,
        })}
        className={
          !isActive
            ? "w-full border-b-2 border-black text-left font-futura"
            : "w-full text-left font-futura"
        }
      >
        {isActive ? openContent : closeContent}
      </button>
      <section
        {...getCollapseProps()}
        className="border-b-2 pt-2.5 pb-8 font-futura border-black"
      >
        {children}
      </section>
    </div>
  );
}

Collapsed.defaultProps = {
  openContent: "Open",
  closeContent: "Close",
  isActive: false,
  onSelect: () => {},
};

export default Collapsed;
