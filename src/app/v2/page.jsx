"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useIsomorphicLayoutEffect } from "../components/helpers/isomorphicEffect";
import AppLogo, { NavLogo, NavLogoMobile } from "../components/AppLogo";
import Button from "../components/Button";
import FooterLogo from "../components/FooterLogo";

import Collapsed from "../components/Collapsed";
import EmailSection from "../components/EmailSection";

gsap.registerPlugin(ScrollTrigger);
const collapseData = [
  {
    id: 1,
    description:
      "World-class experts cherry-pick artworks with robust potential for value appreciation, securing them under optimal terms.",
  },
  {
    id: 2,
    description:
      "World-class experts cherry-pick artworks with robust potential for value appreciation, securing them under optimal terms.",
  },
  {
    id: 3,
    description:
      "World-class experts cherry-pick artworks with robust potential for value appreciation, securing them under optimal terms.",
  },
  {
    id: 4,
    description:
      "World-class experts cherry-pick artworks with robust potential for value appreciation, securing them under optimal terms.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia(main);

      

      const breakPoint = 640;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          // isTablet: `(min-width: 819px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".app-icon-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=1300 bottom" : "+=500",
              pin: true,
              scrub: 1.5,
            },
          });
          gsap.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
            opacity: 1,
            duration: 1,
          });

          tl.to(
            isDesktop ? ".desktop-logo-cube" : ".mobile-logo-cube",
            {
              x: 0,
              y: 0,
              duration: 1,
            },
            "<"
          );
          tl.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
            scale: 1,
            duration: 1,
            x: 0,
            y: 0,
          });
          tl.to(
            isDesktop ? ".desktop-logo-a" : ".mobile-logo-a",
            {
              opacity: 1,
              duration: 1,
              y: 0,
            },
            "<"
          );
          tl.to(
            isDesktop ? ".start-svg-char" : ".start-svg-char-mobile",
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
            },
            "<"
          );
          tl.to(
            isDesktop ? ".end-svg-char" : ".end-svg-char-mobile",
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
            },
            "<"
          );

          tl.to(".remove-up", {
            scale: isDesktop ? "0.268" : "0.41",
            top: isDesktop ? -30 : 23,
            left: isDesktop ? -251 : -65,
            duration: 2,
          });

          tl.fromTo(
            ".craft-box",
            {
              right: 0,
              bottom: "-150%",
            },
            {
              bottom: 0,
              duration: 2,
            },
            "<"
          );
          tl.to(
            ".heading-text-craft",
            {
              y: 0,
              opacity: 1,
              duration: 2,
            },
            "<"
          );
          tl.fromTo(
            ".craft-box-2",
            {
              left: "45%",
              top: "190%",
            },
            {
              top: 0,
            },
            "<"
          );

          tl.to(
            ".sub-heading-text-craft",
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 1,
            },
            "<"
          );

          tl.to(".remove-up", {
            opacity: 0,
            duration: 0,
          });
          tl.to(
            ".nav-logo",
            {
              opacity: 1,
              duration: 0,
            },
            "<"
          );
          tl.to(
            ".nav-button",
            {
              opacity: 1,
            },
            "<"
          );

          const redefining = gsap.timeline({
            scrollTrigger: {
              trigger: ".redefining-trigger",
              start: isDesktop ? "10% 10%" : "top -=10",
              end: isDesktop ? "+=1900 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });
          
          redefining.fromTo(
            ".redefine-box-2",
            {
              left: "25%",
              top: "100%",
              zIndex: -10,
            },
            {
              top: 0,
              duration: 0.5,
            },
            
          );
          redefining.fromTo(
            ".redefine-box-1",
            { right: 0, top: "70%", zIndex: -10 },
            {
              top: 0,
            },"<"
          );
          redefining.fromTo(
            ".redefining-mobile-box",
            { top: "100%", zIndex: -10 },
            {
              top: 0,
            },
            "<"
          );
          redefining.to(
            ".heading-text-redefining",
            {
              y: 0,
              opacity: 1,
            },
            "<"
          );
          redefining.to(
            ".sub-heading-text-redefining",
            {
              y: 0,
              opacity: 1,
            },
            "<"
          );
          redefining.to(
            ".description-text-redefining",
            {
              y: 0,
              opacity: 1,
            },
            "<"
          );

          const assets = gsap.timeline({
            scrollTrigger: {
              trigger: ".assets-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=1000 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });

          // assets.to(".blank-box-top", {
          //   top: 0,
          // });
          // assets.to(".blank-box-bottom", {
          //   bottom: 0,
          // });
          assets.fromTo(
            ".assets-box",
            { top: "150%", right: 0 },
            {
              top: 0,
              opacity: 1,
              scale: 1,
            }
          );
          assets.fromTo(
            ".assets-box-2",
            {
              bottom: "-200%",
              left: "35%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          assets.fromTo(
            ".assets-box-mobile",
            {
              top: "100%",
            },
            {
              top: 0,
            },
            "<"
          );
          assets.fromTo(
            ".assets-box-mobile-1",
            {
              bottom: "100%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          assets.to(
            ".heading-text-assets",
            {
              y: 0,
              opacity: 1,
            },
            "<"
          );
          assets.to(".description-text-assets", {
            y: 0,
            opacity: 1,
          });
          assets.to(
            ".sub-heading-text-assets",
            {
              x: 0,
              opacity: 1,
              scale: 1,
            },
            "<"
          );

          const world = gsap.timeline({
            scrollTrigger: {
              trigger: ".world-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=1000 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });
          world.fromTo(
            ".world-box",
            {
              top: "100%",
              right: 0,
            },
            {
              top: 0,
            }
          );
          world.fromTo(
            ".world-box-2",
            {
              bottom: "-100%",
              left: "45%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          // world-box-mobile

          world.fromTo(
            ".world-box-mobile",
            {
              top: "100%",
            },
            {
              top: 0,
            },
            "<"
          );
          world.to(
            ".heading-text-world",
            { y: 0, opacity: 1, duration: 0.5 },
            "<"
          );
          world.to(
            ".sub-heading-text-world",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          world.to(
            ".description-text-world",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );

          const security = gsap.timeline({
            scrollTrigger: {
              trigger: ".security-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=1000 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });

          security.fromTo(
            ".security-box",
            {
              top: "100%",
              right: 0,
            },
            {
              top: 0,
              duration: 1,
            },
            "<"
          );
          security.fromTo(
            ".security-box-2",
            {
              left: "45%",
              bottom: "-100%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          security.fromTo(
            ".security-box-mobile",
            { top: "100%" },
            {
              top: 0,
            },
            "<"
          );
          security.to(
            ".heading-text-security",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          security.to(
            ".sub-heading-text-security",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          security.to(
            ".sub-heading-text-security",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          security.to(
            ".description-text-security",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );

          const unique = gsap.timeline({
            scrollTrigger: {
              trigger: ".unique-trigger",
              start: isDesktop ? "top +=10" : "top -=10",
              end: isDesktop ? "+=1400 top" : "+=500",
              pin: true,
              scrub: 2,
            },
          });
          unique.fromTo(
            ".unique-box",
            {
              right: 0,
              top: "100%",
            },
            {
              top: 0,
            },
            "<"
          );

          unique.fromTo(
            ".unique-box-mobile",
            {
              top: "100%",
            },
            {
              top: 0,
              stagger: 2,
            },
            "<"
          );
          unique.fromTo(
            ".unique-box-mobile-1",
            {
              bottom: "-100%",
            },
            {
              bottom: 0,
              stagger: 2,
            },
            "<"
          );

          unique.to(
            ".heading-text-unique",
            { x: 0, opacity: 1, duration: 0.5 },
            "<"
          );
          unique.to(
            ".sub-heading-text-unique",
            { x: 0, opacity: 1, duration: 0.5 },
            "<"
          );
          unique.to(".collapse-item", {
            delay: 1,
            opacity: 1,
            stagger: 1,
          });
          unique.fromTo(
            ".border-width",
            { width: isDesktop ? "8%" : "17%" },
            {
              width: "100%",
              duration: 1,
              stagger: 0.1,
              onComplete: () => {
                setActiveIndex(0);
              },
            }
          );
          unique.to(".collapse-item", {
            onReverseComplete: () => {
              setActiveIndex(null);
            },
          });

          const transparency = gsap.timeline({
            scrollTrigger: {
              trigger: ".transparency-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=1000 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });
          transparency.fromTo(
            ".transparency-box",
            { top: "100%", right: 0 },
            {
              top: 0,
            }
          );
          transparency.fromTo(
            ".transparency-box-2",
            {
              left: 0,
              bottom: "-100%",
            },
            {
              bottom: 0,
            },
            "<"
          );

          transparency.fromTo(
            ".transparency-box-mobile",
            {
              bottom: "-100%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          transparency.fromTo(
            ".transparency-box-mobile-1",
            {
              top: "100%",
            },
            {
              top: 0,
            },
            "<"
          );

          transparency.to(
            ".heading-text-transparency",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          transparency.to(
            ".sub-heading-text-transparency",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
          transparency.to(
            ".description-text-transparency",
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );

          const emailBlock = gsap.timeline({
            scrollTrigger: {
              trigger: ".email-trigger",
              start: isDesktop ? "center center" : "top -=10",
              end: isDesktop ? "+=2300 bottom" : "+=500",
              pin: true,
              scrub: 2,
            },
          });
          emailBlock.to(".rect-1", {
            opacity: 1,
            duration: 1,
            x: 0,
            y: 0,
          });
          emailBlock.to(".rect-2", {
            opacity: 1,
            duration: 1,
            y: 0,
          });
          emailBlock.to(
            ".rect-3",
            {
              opacity: 1,
              duration: 1,
              y: 0,
              x: 0,
            },
            "<"
          );
          emailBlock.to(
            ".rect-5",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );
          emailBlock.to(".rect-4", {
            opacity: 1,
            duration: 1,
            y: 0,
            x: 0,
          });

          emailBlock.to(
            ".rect-6",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );
          emailBlock.to(".rect-8", {
            opacity: 1,
            duration: 1,
            y: 0,
          });
          emailBlock.to(
            ".rect-7",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );

          emailBlock.to(
            ".rect-9",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );
          emailBlock.to(
            ".rect-12",
            {
              opacity: 1,
              duration: 1,
              y: 0,
            },
            "<"
          );
          emailBlock.to(
            ".rect-10",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );
          emailBlock.to(
            ".rect-11",
            {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
            },
            "<"
          );

          emailBlock.to(".heading-text-piece", {
            x: 0,
            opacity: 1,
            duration: 0.5,
          });
          emailBlock.to(".sub-heading-text-piece", {
            x: 0,
            opacity: 1,
            duration: 0.5,
          });

          emailBlock.to(".email-box", {
            x: 0,
            opacity: 1,
            duration: 1,
          });
          emailBlock.to(".nav-button", {
            opacity: 0,
            display: "none",
          });
          emailBlock.to(
            ".email-block-border",
            {
              width: "100%",
              duration: 0.5,
              stagger: 0.1,
            },
            "<"
          );
          emailBlock.to(".nav-logo", {
            opacity: 0,
            duration: 1,
            delay: 2,
          });
          emailBlock.to(".sub-heading-text-piece", {
            opacity: isDesktop ? 0 : 1,
            duration: 0.5,
            delay: 3,
          });
        }
      );
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative">
      <div className="flex w-full z-10 justify-between items-center fixed top-5 px-4 md:px-10 max-w-[1440px] mx-auto">
        <NavLogo />
        <Button link="#">Find out more</Button>
      </div>
      <div className="app-icon-trigger h-screen relative flex justify-center flex-col items-center px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="craft-parallax absolute w-full h-full">
          <svg
            width="130"
            className="absolute block craft-mobile-box  right-[10%] sm:hidden craft-box-mobile-1 z-0"
            height="121"
            viewBox="0 0 130 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="130"
              height="171"
              transform="matrix(1 0 0 -1 0 121)"
              fill="#F4F4F4"
            />
          </svg>
          <svg
            width="65"
            className="absolute craft-mobile-box-1  right-0 block sm:hidden craft-box-mobile z-0"
            height="189"
            viewBox="0 0 65 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="76"
              height="189"
              transform="matrix(-1 0 0 -1 76 189)"
              fill="#F4F4F4"
            />
          </svg>
          <svg
            className="absolute block craft-mobile-box-2  right-0 sm:hidden craft-box-mobile-2 z-0"
            width="195"
            height="126"
            viewBox="0 0 195 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="261"
              height="225"
              transform="matrix(-1 0 0 -1 261 225)"
              fill="#F4F4F4"
            />
          </svg>

          <ItemContainer defaultPx={false} className={"craft-trigger"}>
            <ContentLayout
              title={
                <Title className="heading-text-craft px-0">
                  Crafting <br className="block sm:hidden" /> Every <br />
                  Investment <br className="block sm:hidden" />
                  Piece
                </Title>
              }
              subTitle={
                <SubTitle className="sub-heading-text-craft">
                  with Unrivaled <br className="block sm:hidden" /> Guarantee
                </SubTitle>
              }
              description={<></>}
            />
          </ItemContainer>
          <div className="absolute hidden sm:block craft-box z-0">
            <div className="absolute bg-white w-[70%] h-[65%] left-0 top-0"></div>
            <svg
              width="540"
              height="477"
              viewBox="0 0 540 477"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="540"
                height="476"
                transform="translate(540 476.145) rotate(-180)"
                fill="#F4F4F4"
              />
            </svg>
          </div>
          <svg
            width="180"
            height="52"
            className="absolute hidden sm:block craft-box-2 z-0"
            viewBox="0 0 180 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="180"
              height="79"
              transform="translate(0 -27)"
              fill="#F4F4F4"
            />
          </svg>
        </div>
        <AppLogo />
      </div>

      <Container className="relative redefining-parallax redefining-trigger">
        <svg
          className="absolute redefining-mobile-box left-0 block sm:hidden redefine-box-mobile"
          width="195"
          height="133"
          viewBox="0 0 195 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="195"
            height="182.308"
            transform="matrix(1 0 0 -1 0 132.607)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute redefining-mobile-box right-0 block sm:hidden redefine-box-mobile-1"
          width="128"
          height="453"
          viewBox="0 0 128 453"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="156"
            height="574"
            transform="matrix(1 0 0 -1 0 453)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={
              <Title className="heading-text-redefining">
                REDEFINING <br /> THE STANDARDS
              </Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-redefining">
                of tangible <br className="block sm:hidden" /> asset investments
              </SubTitle>
            }
            description={
              <Description className="description-text-redefining">
                Iconic Art is unequaled in its commitment to investors. It is
                the first ever firm to offer an unrivaled coverage that protects
                investors in Blue-chip artwork from any potential depreciation
                in their sharesU+2019 value.
              </Description>
            }
          />
        </ItemContainer>
        <svg
          width="330"
          height="200"
          viewBox="0 0 330 200"
          className="absolute hidden sm:block redefine-box-1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="330"
            height="252"
            transform="matrix(1 0 0 -1 0 200)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute hidden sm:block redefine-box-2"
          width="540"
          height="367"
          viewBox="0 0 540 367"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="551"
            height="502"
            transform="translate(0 -135)"
            fill="#F4F4F4"
          />
        </svg>
      </Container>

      <Container className="relative assets-parallax assets-trigger">
        <svg
          width="65"
          height="160"
          viewBox="0 0 65 160"
          className="absolute right-0 block sm:hidden assets-box-mobile"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="156"
            height="197"
            transform="matrix(-1 0 0 1 156 -37)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          width="195"
          height="68"
          className="absolute right-0 block sm:hidden assets-box-mobile-1"
          viewBox="0 0 195 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="195"
            height="93"
            transform="matrix(-1 0 0 -1 195 93)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={
              <Title className="heading-text-assets">
                Tangible <br />
                Assets
              </Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-assets">
                with A Legacy <br /> of Proven Performance
              </SubTitle>
            }
            description={
              <Description className="description-text-assets">
                When investing in Iconic Art, you invest in shares backed by
                high-value tangible assets. According to the Mei Moses Art
                Index, the Art market has shown a compounded annual growth rate
                of 8.5% since 1950. This market presents a lucrative opportunity
                for investors seeking to diversify their portfolios and tap into
                the potential appreciation of art’s value.
              </Description>
            }
          />
        </ItemContainer>
        <svg
          width="540"
          height="512"
          className="absolute hidden sm:block assets-box"
          data-speed="2.5"
          viewBox="0 0 540 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="784"
            height="312"
            transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 512)"
            fill="#F4F4F4"
          />
          <rect
            width="784"
            height="312"
            transform="matrix(1 1.74846e-07 1.74846e-07 -1 180 214)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          data-speed={5}
          width="180"
          height="100"
          className="absolute hidden sm:block assets-box-2"
          viewBox="0 0 180 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="180"
            height="312"
            transform="translate(180 312) rotate(-180)"
            fill="#F4F4F4"
          />
        </svg>
      </Container>

      <Container className="relative world-parallax world-trigger">
        <svg
          className="absolute right-0 block sm:hidden world-box-mobile"
          width="195"
          height="441"
          viewBox="0 0 195 441"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="97"
            height="315"
            transform="matrix(-1 0 0 -1 227 441)"
            fill="#F4F4F4"
          />
          <rect
            width="213"
            height="183.137"
            transform="matrix(-1 0 0 1 213 -37)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={
              <Title className="heading-text-world whitespace-nowrap">
                WORLD-
                <br className="block sm:hidden" />
                RECOGNIZED <br /> ART DEALERS
              </Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-world">
                with an indisputable <br />
                track record
              </SubTitle>
            }
            description={
              <WorldDescription className="description-text-world">
                With three decades as industry leaders, our art trading
                expertise is without equal, earning a stellar reputation in the
                industry. As responsible professionals, we recognize that art
                investments, like any asset, have inherent risks, and with this
                in mind, we are now offering investment opportunities to all
                through fractionalization. In this way, we are able to provide
                our knowledge and unprecedented security against any risks to
                everyone.
              </WorldDescription>
            }
          />
        </ItemContainer>
        <svg
          width="720"
          height="588"
          viewBox="0 0 720 588"
          className="absolute hidden sm:block world-box"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="360"
            height="439"
            transform="translate(360 200) rotate(-180)"
            fill="#F4F4F4"
          />
          <rect
            width="607"
            height="608"
            transform="translate(360 -20)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          width="180"
          className="absolute hidden sm:block world-box-2"
          height="40"
          viewBox="0 0 180 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="40" fill="#F4F4F4" />
        </svg>
      </Container>

      <Container className="relative security-trigger">
        <svg
          className="absolute block w-full left-0 sm:hidden security-box-mobile"
          width="390"
          height="404"
          viewBox="0 0 390 404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="130"
            height="362"
            transform="matrix(1 0 0 -1 65 331)"
            fill="#F4F4F4"
          />
          <rect
            width="130"
            height="631"
            transform="matrix(1 0 0 -1 -65 404)"
            fill="#F4F4F4"
          />
          <rect
            width="260"
            height="440"
            transform="matrix(-1 0 0 -1 455 404)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={
              <Title className="heading-text-security">
                Knowledge and <br /> Security
              </Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-security">
                The Cornerstones <br className="block sm:hidden" /> of
                <br className="hidden sm:block" /> Tangible
                <br className="block sm:hidden" />
                Asset Investment
              </SubTitle>
            }
            description={
              <Description className="description-text-security">
                At Iconic Art, our engagement transcends the acquisition of a
                piece of a masterpiece. We provide a meticulously curated
                journey into alternative investments and put together
                investments with long-lasting performance in mind.
              </Description>
            }
          />
        </ItemContainer>
        <svg
          className="absolute hidden sm:block security-box"
          width="720"
          height="512"
          viewBox="0 0 720 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="360"
            height="751"
            transform="translate(540 512) rotate(-180)"
            fill="#F4F4F4"
          />
          <rect
            width="607"
            height="360"
            transform="translate(360 -40)"
            fill="#F4F4F4"
          />
          <rect
            width="607"
            height="360"
            transform="translate(0 -160)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute hidden sm:block security-box-2"
          width="180"
          height="275"
          viewBox="0 0 180 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="543" fill="#F4F4F4" />
        </svg>
      </Container>
      <Container className="relative unique-parallax unique-trigger">
        <svg
          width="390"
          className="absolute -z-10 w-full block top-0 left-0 sm:hidden unique-box-mobile"
          height="340"
          viewBox="0 0 390 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="205"
            height="339"
            transform="matrix(-1 0 0 1 465 -37)"
            fill="#F4F4F4"
          />
          <rect
            width="299"
            height="366"
            transform="matrix(1 0 0 -1 -39 340)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          width="181"
          height="71"
          className="absolute block -z-10 bottom-0 right-0 sm:hidden unique-box-mobile-1"
          viewBox="0 0 181 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="197"
            height="86"
            transform="matrix(-1 0 0 -1 197 86)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={<Title className="heading-text-unique">our blueprint</Title>}
            subTitle={
              <SubTitle className="sub-heading-text-unique">
                The reason Iconic Art <br /> is unique
              </SubTitle>
            }
          />
          <div className="w-full md:w-1/2  pt-24  self-start md:self-end text-[22px] font-medium">
            {collapseData.map((desc, index) => (
              <Collapsed
                isActive={activeIndex === index}
                onSelect={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                key={desc.id}
                closeContent={<CollapseToggle text={desc.id} />}
                openContent={<CollapseToggle text={desc.id} />}
              >
                <CollapseText>{desc.description}</CollapseText>
              </Collapsed>
            ))}
          </div>
        </ItemContainer>
        <svg
          width="720"
          className="absolute hidden sm:block unique-box  -z-10"
          height="370"
          viewBox="0 0 720 370"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="733"
            height="616"
            transform="translate(733 370) rotate(-180)"
            fill="#F4F4F4"
          />
        </svg>
      </Container>
      <Container className="relative transparency-parallax transparency-trigger">
        <svg
          className="absolute left-0  block sm:hidden transparency-box-mobile"
          width="107"
          height="162"
          viewBox="0 0 107 162"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="107"
            height="223"
            transform="matrix(-1 0 0 -1 107 223)"
            fill="#F4F4F4"
          />
        </svg>

        <svg
          width="390"
          className="absolute w-full block top-0 left-0 sm:hidden transparency-box-mobile-1"
          height="288"
          viewBox="0 0 390 288"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="138"
            height="208"
            transform="matrix(-1 0 0 -1 463 288)"
            fill="#F4F4F4"
          />
          <rect
            width="442"
            height="197"
            transform="matrix(-1 0 0 1 425 -37)"
            fill="#F4F4F4"
          />
        </svg>

        <ItemContainer>
          <ContentLayout
            title={
              <Title className="heading-text-transparency">Transparency</Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-transparency">
                our Relentless <br /> pursuit
              </SubTitle>
            }
            description={
              <Description className="description-text-transparency">
                Beyond the price guarantee, Iconic Art champions transparency;
                Iconic Art strictly adheres to the SEC’s Exemption Regulation A,
                ensuring that every detail and every move is meticulously
                documented and readily accessible via the SEC’s official
                platform.
              </Description>
            }
          />
        </ItemContainer>
        <svg
          className="absolute -z-10 hidden sm:block transparency-box-2"
          width="360"
          height="142"
          viewBox="0 0 360 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="380"
            height="200"
            transform="translate(360 200) rotate(-180)"
            fill="#F4F4F4"
          />
        </svg>

        <svg
          className="absolute -z-10 hidden sm:block transparency-box"
          width="900"
          height="576"
          viewBox="0 0 900 576"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="965"
            height="247"
            transform="translate(0 -47)"
            fill="#F4F4F4"
          />
          <rect
            width="577"
            height="424"
            transform="translate(570 152)"
            fill="#F4F4F4"
          />
        </svg>
      </Container>
      <EmailSection />

      <div className="overflow-hidden bg-[#F4F4F4]">
        <div className="w-full justify-center pt-[6rem] flex hide-footer-logo">
          <div className="hidden md:block">
            <FooterLogo />
          </div>
          <div className="block md:hidden scale-[2]">
            <NavLogoMobile />
          </div>
        </div>

        {/* start */}

        <div className="flex justify-center w-full">
          <div className="flex z-10 flex-col w-full pt-[10%] px-4 sm:px-5 h-full md:px-10">
            <ul className="w-full px-4 font-futura sm:px-0 sm:max-w-[303px] pb-5 md:max-w-[1166px]  mx-auto text-[10px] leading-[16px] font-normal">
              <li>Available in the US U+2013 Accredited investors elsewhere</li>
              <li>
                <sup> 1</sup> The investment is to purchase shares in an LLC
                that is the owner of the masterpiece.
              </li>
              <li>
                <sup>2</sup> The Guarantee Against Capital Loss provided by
                Iconic Art begins once all offered shares of an LLC have been
                sold during the initial offering. The Guarantee Against Capital
                Loss guarantees that, when the artwork is sold, the shareholder
                will get the offering price at which the share was offered
                during the initial offering regardless of any depreciation in
                the artwork’s value. In the secondary market, the price of the
                shares may fluctuate based on sup ply and demand, which means
                that the price at which investors can sell their shares in the
                secondary market may differ from the offering price and/or the
                price they bought such shares; this price difference is not
                coverd by the guarantee. The Guarantee Against Capital Loss will
                not apply to secondary market transactions. Further conditions
                apply.
              </li>
              <li>
                <sup>3</sup> Potential third-party fees may apply for the use of
                the secondary market.
              </li>
              <li>
                <sup>4</sup> Annual basic management fees of 1.5% of the
                investment portfolio can be applied for qualified investors with
                $100,000 and above investment with a dedicated Iconic Art
                advisor to develop a custom investment portfolio.
              </li>
              <li>
                <sup>5</sup> Some fees may be charged on the secondary market
                according to third-party partner fee policies.
              </li>
              <li>
                <sup>6</sup> Included in the share offering price.
              </li>
            </ul>
          </div>
        </div>

        {/* end  */}
      </div>
    </div>
  );
};

export default Home;

function Container({ children, className = "" }) {
  return (
    <div className={className + " " + "md:max-w-[1440px] mx-auto h-full"}>
      {children}
    </div>
  );
}

function Description({ children, className = "", id }) {
  return (
    <p
      id={id}
      className={
        "text-[14px] z-10 pt-24 font-futura md:text-[22px] font-medium leading-[140%] max-w-[290px] md:max-w-[600px] self-start md:self-end text-[#373635]" +
        " " +
        className
      }
    >
      {children}
    </p>
  );
}
function WorldDescription({ children, className = "", id }) {
  return (
    <p
      id={id}
      className={
        "text-[14px] z-10 pt-24 font-futura md:text-[22px] font-medium leading-[140%] max-w-[290px] md:max-w-[650px] self-start md:self-end text-[#373635]" +
        " " +
        className
      }
    >
      {children}
    </p>
  );
}
function CollapseText({ children, className = "", id }) {
  return (
    <p
      id={id}
      className={
        "text-[14px] pl-1 pb-4 sm:pb-6 overflow-x-hidden pt-1 md:text-[18px] z-10 font-medium leading-[140%] max-w-[290px] md:max-w-[550px] self-start md:self-end text-[#373635]" +
        " " +
        className
      }
    >
      {children}
    </p>
  );
}

function Title({ children, className = "", id }) {
  return (
    <h1
      id={id}
      className={
        className +
        " " +
        "text-[3.375rem] block md:text-[5rem] lg:text-[8rem] max-w-[327px] md:max-w-[972px]  font-bold leading-[80%] uppercase text-[#373635]"
      }
    >
      {children}
    </h1>
  );
}

function SubTitle({ children, className = "", id }) {
  return (
    <h2
      id={id}
      className={
        className +
        " " +
        "text-[1.125rem] z-10 block mt-[1.15rem] md:mt-[1.5rem] md:text-3xl whitespace-nowrap uppercase font-medium tracking-[1.8px] leading-[130%] font-futura text-[#373635]"
      }
    >
      {children}
    </h2>
  );
}

function CollapseToggle({ text }) {
  return (
    <span className="text-6xl pl-2 z-10 block font-medium leading-[100%] tracking-[18px] uppercase">
      {text}
    </span>
  );
}

function ItemContainer({ children, className, defaultPx = true }) {
  return (
    <div
      className={
        className + " " + defaultPx
          ? "px-4 sm:px-5  md:px-10 flex z-10 flex-col w-full pt-[10%] h-full"
          : "flex z-10 flex-col w-full pt-[15%] h-full"
      }
    >
      {children}
    </div>
  );
}

function ContentLayout({ title, subTitle, description }) {
  return (
    <div className="flex flex-col z-10 justify-between h-full w-full">
      <div className="pt-32 sm:pt-28 lg:pt-14 xl:pt-0">
        {title}
        {subTitle}
      </div>
      {description}
    </div>
  );
}
