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

  // const main = useRef();

  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //     const mm = gsap.matchMedia(main);

  //     function animateText({ target, trigger, start }) {
  //       gsap.to(target, {
  //         x: 0,
  //         opacity: 1,
  //         duration: 0.5,
  //         scrollTrigger: {
  //           trigger: trigger,
  //           start: `top ${start}`,
  //           toggleActions: "play pause resume reverse",
  //         },
  //       });
  //     }

  //     const breakPoint = 640;

  //     mm.add(
  //       {
  //         isDesktop: `(min-width: ${breakPoint}px)`,
  //         isMobile: `(max-width: ${breakPoint - 1}px)`,
  //       },
  //       (context) => {
  //         let { isDesktop, isMobile } = context.conditions;
  //         const tl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".app-icon-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             scrub: 1,
  //           },
  //         });
  //         gsap.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
  //           opacity: 1,
  //           duration: 1,
  //         });

  //         tl.to(
  //           isDesktop ? ".desktop-logo-cube" : ".mobile-logo-cube",
  //           {
  //             x: 0,
  //             y: 0,
  //             duration: 1,
  //           },
  //           "<"
  //         );
  //         tl.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
  //           scale: 1,
  //           duration: 1,
  //           x: 0,
  //           y: 0,
  //         });
  //         tl.to(
  //           isDesktop ? ".desktop-logo-a" : ".mobile-logo-a",
  //           {
  //             opacity: 1,
  //             duration: 1,
  //             y: 0,
  //           },
  //           "<"
  //         );
  //         tl.to(
  //           isDesktop ? ".start-svg-char" : ".start-svg-char-mobile",
  //           {
  //             x: 0,
  //             opacity: 1,
  //             scale: 1,
  //             duration: 1,
  //           },
  //           "<"
  //         );
  //         tl.to(
  //           isDesktop ? ".end-svg-char" : ".end-svg-char-mobile",
  //           {
  //             x: 0,
  //             opacity: 1,
  //             scale: 1,
  //             duration: 1,
  //           },
  //           "<"
  //         );

  //         tl.to(".remove-up", {
  //           scale: "0.268",
  //           top: -30,
  //           left: -251,
  //           duration: 1,
  //         });

  //         tl.fromTo(
  //           ".craft-box",
  //           {
  //             right: 0,
  //             bottom: "-150%",
  //           },
  //           {
  //             bottom: 0,
  //             duration: 1,
  //           },
  //           "<"
  //         );
  //         tl.to(
  //           ".heading-text-craft",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         tl.fromTo(
  //           ".craft-box-2",
  //           {
  //             left: "45%",
  //             top: "190%",
  //           },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );

  //         tl.to(
  //           ".sub-heading-text-craft",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             delay: 0.1,
  //           },
  //           "<"
  //         );

  //         tl.to(".remove-up", {
  //           opacity: 0,
  //           duration: 0,
  //         });
  //         tl.to(
  //           ".nav-logo",
  //           {
  //             opacity: 1,
  //             duration: 0,
  //           },
  //           "<"
  //         );
  //         tl.to(
  //           ".nav-button",
  //           {
  //             opacity: 1,
  //           },
  //           "<"
  //         );

  //         const redefining = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".redefining-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=800 bottom" : "+=500",
  //             pin: true,
  //             scrub: 1,
  //           },
  //         });
  //         redefining.fromTo(
  //           ".redefine-box-1",
  //           { right: 0, top: "90%", zIndex: -10 },
  //           {
  //             top: 0,
  //             duration: 1,
  //           }
  //         );
  //         redefining.fromTo(
  //           ".redefine-box-2",
  //           {
  //             left: "25%",
  //             top: "100%",
  //             zIndex: -10,
  //           },
  //           {
  //             top: 0,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         redefining.fromTo(
  //           ".redefining-mobile-box",
  //           { top: "100%", zIndex: -10 },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );
  //         redefining.to(
  //           ".heading-text-redefining",
  //           {
  //             y: 0,
  //             opacity: 1,
  //           },
  //           "<"
  //         );
  //         redefining.to(
  //           ".sub-heading-text-redefining",
  //           {
  //             y: 0,
  //             opacity: 1,
  //           },
  //           "<"
  //         );
  //         redefining.to(
  //           ".description-text-redefining",
  //           {
  //             y: 0,
  //             opacity: 1,
  //           },
  //           "<"
  //         );

  //         const assets = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".assets-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             scrub: 1,
  //           },
  //         });

  //         // assets.to(".blank-box-top", {
  //         //   top: 0,
  //         // });
  //         // assets.to(".blank-box-bottom", {
  //         //   bottom: 0,
  //         // });
  //         assets.fromTo(
  //           ".assets-box",
  //           { top: "150%", right: 0 },
  //           {
  //             top: 0,
  //             opacity: 1,
  //             scale: 1,
  //           }
  //         );
  //         assets.fromTo(
  //           ".assets-box-2",
  //           {
  //             bottom: "-200%",
  //             left: "35%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );
  //         assets.fromTo(
  //           ".assets-box-mobile",
  //           {
  //             top: "100%",
  //           },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );
  //         assets.fromTo(
  //           ".assets-box-mobile-1",
  //           {
  //             bottom: "100%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );
  //         assets.to(
  //           ".heading-text-assets",
  //           {
  //             y: 0,
  //             opacity: 1,
  //           },
  //           "<"
  //         );
  //         assets.to(".description-text-assets", {
  //           y: 0,
  //           opacity: 1,
  //         });
  //         assets.to(
  //           ".sub-heading-text-assets",
  //           {
  //             x: 0,
  //             opacity: 1,
  //             scale: 1,
  //           },
  //           "<"
  //         );

  //         const world = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".world-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             scrub: 1,
  //           },
  //         });
  //         world.fromTo(
  //           ".world-box",
  //           {
  //             top: "100%",
  //             right: 0,
  //           },
  //           {
  //             top: 0,
  //           }
  //         );
  //         world.fromTo(
  //           ".world-box-2",
  //           {
  //             bottom: "-100%",
  //             left: "45%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );
  //         // world-box-mobile

  //         world.fromTo(
  //           ".world-box-mobile",
  //           {
  //             top: "100%",
  //           },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );
  //         world.to(
  //           ".heading-text-world",
  //           { y: 0, opacity: 1, duration: 0.5 },
  //           "<"
  //         );
  //         world.to(
  //           ".sub-heading-text-world",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         world.to(
  //           ".description-text-world",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );

  //         const security = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".security-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             markers: true,
  //             scrub: 1,
  //           },
  //         });

  //         security.fromTo(
  //           ".security-box",
  //           {
  //             top: "100%",
  //             right: 0,
  //           },
  //           {
  //             top: 0,
  //             duration: 1,
  //           },
  //           "<"
  //         );
  //         security.fromTo(
  //           ".security-box-2",
  //           {
  //             left: "45%",
  //             bottom: "-100%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );
  //         security.fromTo(
  //           ".security-box-mobile",
  //           { top: "100%" },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );
  //         security.to(
  //           ".heading-text-security",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         security.to(
  //           ".sub-heading-text-security",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         ),
  //           security.to(
  //             ".sub-heading-text-security",
  //             {
  //               y: 0,
  //               opacity: 1,
  //               duration: 0.5,
  //             },
  //             "<"
  //           );

  //         const unique = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".unique-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             markers: true,
  //             scrub: 1,
  //           },
  //         });
  //         unique.fromTo(
  //           ".unique-box",
  //           {
  //             right: 0,
  //             top: "100%",
  //           },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );

  //         unique.fromTo(
  //           ".unique-box-mobile",
  //           {
  //             top: "100%",
  //           },
  //           {
  //             top: 0,
  //             stagger: 2,
  //           },
  //           "<"
  //         );
  //         unique.fromTo(
  //           ".unique-box-mobile-1",
  //           {
  //             bottom: "-100%",
  //           },
  //           {
  //             bottom: 0,
  //             stagger: 2,
  //           },
  //           "<"
  //         );

  //         unique.to(
  //           ".heading-text-unique",
  //           { x: 0, opacity: 1, duration: 0.5 },
  //           "<"
  //         );
  //         unique.to(
  //           ".sub-heading-text-unique",
  //           { x: 0, opacity: 1, duration: 0.5 },
  //           "<"
  //         );
  //         unique.to(
  //           ".collapse-item",

  //           {
  //             opacity: 1,
  //             duration: 0.5,
  //             stagger: 0.5,
  //           }
  //         );

  //         const transparency = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: ".transparency-trigger",
  //             start: isDesktop ? "center center" : "top -=10",
  //             end: isDesktop ? "+=1000 bottom" : "+=500",
  //             pin: true,
  //             markers: true,
  //             scrub: 1,
  //           },
  //         });
  //         transparency.fromTo(
  //           ".transparency-box",
  //           { top: "100%", right: 0 },
  //           {
  //             top: 0,
  //           }
  //         );
  //         transparency.fromTo(
  //           ".transparency-box-2",
  //           {
  //             left: 0,
  //             bottom: "-100%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );

  //         transparency.fromTo(
  //           ".transparency-box-mobile",
  //           {
  //             bottom: "-100%",
  //           },
  //           {
  //             bottom: 0,
  //           },
  //           "<"
  //         );
  //         transparency.fromTo(
  //           ".transparency-box-mobile-1",
  //           {
  //             top: "100%",
  //           },
  //           {
  //             top: 0,
  //           },
  //           "<"
  //         );

  //         transparency.to(
  //           ".heading-text-transparency",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         transparency.to(
  //           ".sub-heading-text-transparency",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );
  //         transparency.to(
  //           ".description-text-transparency",
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 0.5,
  //           },
  //           "<"
  //         );

  //         animateText({
  //           target: ".heading-text-piece",
  //           trigger: ".piece-trigger",
  //           start: "+=150",
  //         });
  //         animateText({
  //           target: ".sub-heading-text-piece",
  //           trigger: ".piece-trigger",
  //           start: "+=100",
  //         });
  //         gsap.to(".email-box", {
  //           x: 0,
  //           opacity: 1,
  //           duration: 1,
  //           scrollTrigger: {
  //             trigger: ".piece-trigger",
  //             start: `top +=150`,
  //             toggleActions: "play pause resume reverse",
  //           },
  //           onComplete: () => {
  //             gsap.to(".nav-button", {
  //               opacity: 0,
  //               display: "none",
  //             });
  //             gsap.to(
  //               ".email-block-border",
  //               {
  //                 width: "100%",
  //                 duration: 0.5,
  //                 stagger: 0.1,
  //               },
  //               "<"
  //             );
  //           },
  //           onReverseComplete: () => {
  //             gsap.to(".nav-button", {
  //               opacity: 1,
  //               display: "block",
  //             });
  //             gsap.to(
  //               ".email-block-border",
  //               {
  //                 width: "0%",
  //                 duration: 0.5,
  //                 stagger: 0.5,
  //               },
  //               "<"
  //             );
  //           },
  //         });
  //         // security-box-mobile
  //         gsap.fromTo(
  //           ".security-box-mobile",
  //           { top: "100%" },
  //           {
  //             top: 0,
  //             scrollTrigger: {
  //               trigger: ".piece-trigger",
  //               start: `top +=30%`,
  //               end: "+=100%",
  //               toggleActions: "play pause resume reverse",
  //             },
  //           }
  //         );
  //         gsap.fromTo(
  //           ".piece-box-mobile-1",
  //           { bottom: "100%" },
  //           {
  //             bottom: 0,
  //             scrollTrigger: {
  //               trigger: ".piece-trigger",
  //               start: `top +=30%`,
  //               end: "+=100%",
  //               toggleActions: "play pause resume reverse",
  //             },
  //           }
  //         );

  //         gsap.to(".piece-box", {
  //           bottom: 0,
  //           opacity: 1,
  //           scrollTrigger: {
  //             trigger: ".piece-trigger",
  //             start: `top +=10%`,
  //             toggleActions: "play pause resume reverse",
  //           },
  //         });
  //         gsap.to(".nav-logo", {
  //           opacity: 0,
  //           scrollTrigger: {
  //             trigger: ".hide-footer-logo",
  //             start: "top center",
  //             toggleActions: "play pause resume reverse",
  //           },
  //           onReverseComplete: () => {
  //             gsap.to(".nav-logo", {
  //               opacity: 1,
  //             });
  //           },
  //         });
  //       }
  //     );
  //   }, main);

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="pt-2 w-full collapse-item">
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
