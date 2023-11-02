"use client";

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
// import { SplitText } from "gsap/dist/SplitText";
import Image from "next/image";
import SplitType from "split-type";
import Button from "../components/Button";
import { useIsomorphicLayoutEffect } from "../components/helpers/isomorphicEffect";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
const Home = () => {
  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector(".box");
      const containers = self.selector(".a-container");
      const aboxes = self.selector(".a-box");
      new SplitType("#my-text");
      const grayBoxes = self.selector(".gray-box");

      // move whole icon text left bottom
      gsap.to(".char", {
        y: 450,
        x: -450,
        fontSize: "35px",
        gap: "0",
        // x:,
        stagger: 0.2,
        delay: 0.1,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        // scrollTrigger: {
        //   start: "top +=600",
        //   // end: "bottom 50%",
        //   toggleActions: "restart pause resume reverse",
        //   markers: true,
        //   trigger: "#small-logo",
        // },
      });

      // animate gray boxes
      grayBoxes.forEach((grayBox, index) => {
        gsap.to(grayBox, {
          marginRight: 0,
          display: "block",
          // y: -655,
          scrollTrigger: {
            start: "top +=200",
            // end: "top 70%",
            toggleActions: "restart pause resume reverse",
            markers: true,
            trigger: ".big-box-trigger",
          },
          scale: 1,
          duration: 1,
        });
      });
      // animate chars
      gsap.to(".char", {
        y: 0,
        stagger: 0.2,
        delay: 0.1,
        scale: 1,
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          start: "top +=600",
          // end: "bottom 50%",
          toggleActions: "restart pause resume reverse",
          markers: true,
          trigger: "#my-text",
        },
      });
      // });
      // move whole box down
      aboxes.forEach((abox) => {
        gsap.to(abox, {
          x: 180,
          y: 655,
          scrollTrigger: {
            start: "top +=700",
            // end: "bottom 50%",
            toggleActions: "restart pause resume reverse",
            markers: true,
            trigger: containers[0],
          },
          scale: 0.6,
          duration: 1,
        });
      });
      // cutoff the box
      boxes.forEach((box) => {
        gsap.to(box, {
          x: -30,
          y: -30,
          scrollTrigger: {
            start: "top +=200",
            toggleActions: "restart pause resume reverse",
            markers: true,
            trigger: box,
          },
          duration: 0.2,
          overflow: "visible",
        });
      });
    }, main);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={main} className="relative">
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="grid relative grid-cols-2 a-box">
          <div className=" h-28 w-36 bg-gray-800 box relative"></div>
          <div className=" h-28 w-36 bg-black"></div>
          <div className=" h-28 w-36 bg-black"></div>
          <div className=" h-28 w-36 bg-black"></div>
          <div className=" h-28 w-36 bg-black"></div>
          <div className=" h-28 w-36 bg-black"></div>
          <div className="text-[290px] char leading-[73%] overflow-hidden text-white z-10 fixed bottom-0 right-[-18%]">
            A
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-screen w-screen big-box-trigger">
        <div className="flex justify-end overflow-hidden">
          <div className="bg-secondary gray-box mr-[-400px]  w-[137px] md:w-[360px] h-[137px] md:h-[137px]"></div>
        </div>
        <div className="flex text-[160px] text-black gap-[11rem] justify-center px-10 md:px-0 a-container">
          <span id="my-text" className="me-9">
            ICONIC
          </span>{" "}
          <span id="my-text">RT</span>
        </div>
        <div className="flex  justify-center">
          <div className="bg-secondary gray-box scale-0 w-[65px] md:w-[180px] h-[106px] md:h-[312px] ml-16 md:ml-36"></div>
        </div>
      </div>
      {/* <div className="flex justify-center">
        <div className="bg-secondary w-[65px] md:w-[180px] h-[106px] md:h-[50px] ml-16 md:ml-36"></div>
      </div> */}
      <div className="flex sticky  top-[20px] flex-col justify-between h-screen w-screen">
        <div className="w-full  left-0">
          <div
            className="flex w-full justify-between px-10 -mt-2 "
            id="small-logo"
          >
            <div>
              <Image
                src="/assets/logo/logo.png"
                alt="IconicArt"
                width="210"
                height="38"
              />
            </div>
            <div>
              <Button link="#">Find out more</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="px-10 pt-24">
          <h1 className="text-[130px] leading-[104px] pb-[30px]">
            Crafting Every Investment Piece
          </h1>
          <h2 className=" text-3xl uppercase font-futura">
            with Unrivaled Guarantee
          </h2>
        </div>
        <div>
          <div className="flex justify-end">
            <div className="bg-secondary w-[180px] h-[312px]"></div>
          </div>
          <div className="flex justify-end">
            <div className="bg-secondary w-[551px] h-[180px]"></div>
          </div>
          <div className="flex justify-end gap-[180px]">
            <div className="bg-secondary w-[330px] h-[180px]"></div>
            <div className="bg-secondary w-[551px] h-[300px]"></div>
          </div>
          <div className="px-10 mt-[-100px]">
            <h1 className="text-[130px] tracking-tighter leading-[104px] pb-[30px]">
              REDEFINING <br /> THE STANDARDS
            </h1>
            <h2 className=" text-3xl uppercase font-futura">
              of tangible asset investments
            </h2>
            <div className="flex justify-end mt-[160px]">
              <p className="w-[640px] h-[124px] text-[22px] font-[500]">
                Iconic Art is unequaled in its commitment to investors. It is
                the first ever firm to offer an unrivaled coverage that protects
                investors in Blue-chip artwork from any potential depreciation
                in their shares’ value.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-10 mt-[-100px]">
            <h1 className="text-[130px] tracking-tighter leading-[104px] pb-[30px]">
              Tangible <br />
              Assets
            </h1>
            <h2 className=" text-3xl uppercase font-futura">
              with A Legacy <br /> of Proven Performance
            </h2>
            <div className="flex justify-end mt-[160px]">
              <p className="w-[640px] h-[124px] text-[22px] font-[500]">
                Iconic Art is unequaled in its commitment to investors. It is
                the first ever firm to offer an unrivaled coverage that protects
                investors in Blue-chip artwork from any potential depreciation
                in their shares’ value.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-10 mt-[-100px]">
            <h1 className="text-[130px] tracking-tighter leading-[104px] pb-[30px]">
              Tangible <br />
              Assets
            </h1>
            <h2 className=" text-3xl uppercase font-futura">
              with A Legacy <br /> of Proven Performance
            </h2>
            <div className="flex justify-end mt-[160px]">
              <p className="w-[640px] h-[124px] text-[22px] font-[500]">
                Iconic Art is unequaled in its commitment to investors. It is
                the first ever firm to offer an unrivaled coverage that protects
                investors in Blue-chip artwork from any potential depreciation
                in their shares’ value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
