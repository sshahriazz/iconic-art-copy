"use client";
import React, { Suspense, useRef, useState } from "react";
import { useCollapse } from "react-collapsed";
import { useIsomorphicLayoutEffect } from "./helpers/isomorphicEffect";
import { gsap } from "gsap/dist/gsap";

function Collapsed({
  children,
  openContent,
  closeContent,
  isActive,
  onSelect,
}) {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isActive,
    duration: 500,
  });

  return (
    <div className="pt-2 w-full">
      <button
        {...getToggleProps({
          onClick: onSelect,
        })}
        className={`text-left w-full font-futura`}
      >
        {isActive ? openContent : closeContent}
      </button>
      <div className="border-width border-b-2 border-black">
        <section {...getCollapseProps()} className={`w-full font-futura`}>
          {children}
        </section>
      </div>
    </div>
  );
}

export default Collapsed;
