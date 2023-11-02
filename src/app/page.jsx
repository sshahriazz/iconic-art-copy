"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Button from "./components/Button";
import dynamic from "next/dynamic";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import AppLogo, { NavLogo } from "./components/AppLogo";
import { useIsomorphicLayoutEffect } from "./components/helpers/isomorphicEffect";
import { Power3, Power4 } from "gsap";
import { Power0 } from "gsap";
import FooterLogo from "./components/FooterLogo";

const Collapsed = dynamic(() => import("./components/Collapsed"), {
  ssr: false,
});

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
const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const main = useRef();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const mm = gsap.matchMedia(main);

      function animateText({ target, trigger, start }) {
        gsap.to(target, {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: trigger,
            start: `top ${start}`,
            toggleActions: "play pause resume reverse",
          },
        });
      }

      const breakPoint = 640;

      mm.add(
        {
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
        },
        (context) => {
          let { isDesktop, isMobile } = context.conditions;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".body",
              start: isDesktop ? "top -=5" : "top -=5",
              end: isDesktop ? "+=100" : "+=200",
              scrub: 1.5,
              pin: true,
            },
          });
          gsap.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
            opacity: 1,
            duration: 1,
          });

          gsap.to(
            isDesktop ? ".desktop-logo-cube" : ".mobile-logo-cube",
            {
              x: 0,
              y: 0,
              duration: 1,
            },
            "<"
          );
          gsap.to(isDesktop ? ".desktop-logo-svg" : ".mobile-logo-svg", {
            scale: 1,
            duration: 1,
            x: 0,
            y: 0,
          });
          gsap.to(
            isDesktop ? ".desktop-logo-a" : ".mobile-logo-a",
            {
              opacity: 1,
              duration: 1,
              y: 0,
            },
            "<"
          );
          gsap.to(
            isDesktop ? ".start-svg-char" : ".start-svg-char-mobile",
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
            },
            "<"
          );
          gsap.to(
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
            y: -400,
            duration: 3,
            ease: Power3.easeOut,
          });
          tl.to(
            ".top-center-rect",
            {
              top: "-100%",
              duration: 1,
              delay: 2,
            },
            "<"
          );
          tl.to(".left-bottom-rect", {
            top: "-100%",
            duration: 1,
          });
          tl.to(
            ".bottom-center-rect-2",
            {
              top: "-100%",
              duration: 2,
            },
            "<"
          );

          tl.to(".top-center-rect-2", {
            top: "-100%",
            duration: 1,
          });
          tl.to(
            ".top-right-rect",
            {
              top: "-100%",
              duration: 3,
            },
            "<"
          );
          tl.to(".bottom-center-rect", {
            top: "-100%",
            duration: 1,
          });

          tl.to(
            ".nav-logo",
            {
              y: 0,
              opacity: 1,
              scale: 1,
            },
            "<"
          );
          tl.to(
            ".nav-button",
            {
              y: 0,
              opacity: 1,
              scale: 1,
            },
            "<"
          );

          animateText({
            target: ".heading-text-craft",
            trigger: ".craft-trigger",
            start: "+=130",
          });

          animateText({
            target: ".sub-heading-text-craft",
            trigger: ".craft-trigger",
            start: "+=100",
          });
          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: ".craft-parallax",
              start: `top +=950`,
              end: "+=100%",
              markers: true,
              // pin: true,
              scrub: 1,
              // toggleActions: "play pause resume reverse",
            },
          });
          parallax.fromTo(
            ".craft-box",
            {
              right: 0,
              bottom: 800,
            },
            {
              bottom: 0,
              // duration: 6,
            }
          );
          parallax.fromTo(
            ".craft-box-2",
            {
              top: 0,
              left: "45%",
              top: 900,
            },
            {
              top: 0,
              // duration: 1,
            },
            "<"
          );
          animateText({
            target: ".heading-text-redefining",
            trigger: ".redefining-trigger",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-redefining",
            trigger: ".redefining-trigger",
            start: "+=100",
          });
          animateText({
            target: ".description-text-redefining",
            trigger: ".redefining-trigger",
            start: "-=20",
          });
          const redefining = gsap.timeline({
            scrollTrigger: {
              trigger: ".redefining-parallax",
              start: `top +=20%`,
              end: "+=600",
              scrub: 2,
            },
          });
          redefining.fromTo(
            ".redefine-box-1",
            { right: 0, top: 400 },
            {
              top: 0,
              duration: 1,
            }
          );
          redefining.fromTo(
            ".redefine-box-2",
            {
              left: "25%",
              top: 900,
            },
            {
              top: 0,
              left: "25%",
              duration: 0.5,
            },
            "<"
          );
          animateText({
            target: ".heading-text-assets",
            trigger: ".assets-trigger",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-assets",
            trigger: ".assets-trigger",
            start: "+=100",
          });
          animateText({
            target: ".description-text-assets",
            trigger: ".assets-trigger",
            start: "-=5",
          });
          const assets = gsap.timeline({
            scrollTrigger: {
              trigger: ".assets-parallax",
              start: `top +=30%`,
              end: "+=400",
              scrub: 1,
            },
          });
          assets.fromTo(
            ".assets-box",
            { top: 600, right: 0 },
            {
              top: 0,

              opacity: 1,
              scale: 1,
            }
          );
          assets.fromTo(
            ".assets-box-2",
            {
              bottom: 500,
              left: "35%",
            },
            {
              bottom: 0,
            },
            "<"
          );
          animateText({
            target: ".heading-text-world",
            trigger: ".world-trigger",
            start: "+=160",
          });
          animateText({
            target: ".sub-heading-text-world",
            trigger: ".world-trigger",
            start: "+=110",
          });
          animateText({
            target: ".description-text-world",
            trigger: ".world-trigger",
            start: "-=70",
          });
          const world = gsap.timeline({
            scrollTrigger: {
              trigger: ".world-parallax",
              start: `top +=10%`,
              end: "+=400",
              scrub: 1,
            },
          });
          world.fromTo(
            ".world-box",
            {
              top: 600,
              right: 0,
            },
            {
              top: 0,
              opacity: 1,
              scale: 1,
            }
          );
          world.fromTo(
            ".world-box-2",
            {
              bottom: 500,
              left: "45%",
            },
            {
              bottom: 0,
              opacity: 1,
              scale: 1,
            },
            "<"
          );
          animateText({
            target: ".heading-text-security",
            trigger: ".security-target",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-security",
            trigger: ".security-target",
            start: "+=100",
          });
          animateText({
            target: ".description-text-security",
            trigger: ".security-target",
            start: "-=20",
          });
          const security = gsap.timeline({
            scrollTrigger: {
              trigger: ".security-target",
              start: `top +=10%`,
              end: "+=400",
              scrub: 1,
            },
          });
          security.fromTo(
            ".security-box",
            {
              top: 600,
              right: 0,
            },
            {
              top: 0,
              duration: 1,
            }
          );
          security.fromTo(
            ".security-box-2",
            {
              left: "45%",
              bottom: 500,
            },
            {
              bottom: 0,
            },
            "<"
          );
          animateText({
            target: ".heading-text-unique",
            trigger: ".unique-trigger",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-unique",
            trigger: ".unique-trigger",
            start: "+=100",
          });
          animateText({
            target: ".description-text-unique",
            trigger: ".unique-trigger",
            start: "-=50",
          });
          const unique = gsap.timeline({
            scrollTrigger: {
              trigger: ".unique-parallax",
              start: `top +=10%`,
              end: "+=400",
              scrub: 1,
            },
          });
          unique.fromTo(
            ".unique-box",
            {
              right: 0,
              top: 600,
            },
            {
              top: 0,
            }
          );

          animateText({
            target: ".heading-text-transparency",
            trigger: ".transparency-trigger",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-transparency",
            trigger: ".transparency-trigger",
            start: "+=100",
          });
          animateText({
            target: ".description-text-transparency",
            trigger: ".transparency-trigger",
            start: "-=50",
          });
          const transparency = gsap.timeline({
            scrollTrigger: {
              trigger: ".transparency-parallax",
              start: `top +=10%`,
              end: "+=200",
              scrub: 1,
            },
          });
          transparency.fromTo(
            ".transparency-box",
            { top: 800, right: 0 },
            {
              top: 0,
            }
          );
          transparency.fromTo(
            ".transparency-box-2",
            {
              left: 0,
              bottom: 500,
            },
            {
              bottom: 0,
            },
            "<"
          );
          animateText({
            target: ".heading-text-piece",
            trigger: ".piece-trigger",
            start: "+=150",
          });
          animateText({
            target: ".sub-heading-text-piece",
            trigger: ".piece-trigger",
            start: "+=100",
          });
          gsap.to(".email-box", {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: ".piece-trigger",
              start: `top +=150`,
              toggleActions: "play pause resume reverse",
            },
          });
          gsap.to(".piece-box", {
            bottom: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: ".piece-trigger",
              start: `top +=10%`,
              toggleActions: "play pause resume reverse",
            },
          });
        }
      );
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative">
      <div className="flex flex-col relative justify-center h-screen w-full px-4 md:px-10 max-w-[1440px] mx-auto">
        <AppLogo />
        <svg
          className="absolute top-center-rect"
          width="180"
          height="53"
          viewBox="0 0 180 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="180"
            height="312"
            transform="matrix(1 0 0 -1 0 52.1445)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute bottom-center-rect-2 border"
          width="180"
          height="313"
          viewBox="0 0 180 313"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="180"
            height="668"
            transform="matrix(1 0 0 -1 0 668.584)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute top-right-rect"
          width="360"
          height="138"
          viewBox="0 0 360 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="360"
            height="137"
            transform="matrix(-1 0 0 -1 360 137.145)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute top-center-rect-2"
          width="180"
          height="475"
          viewBox="0 0 180 475"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="180"
            height="668"
            transform="matrix(1 0 0 -1 0 474.145)"
            fill="#F4F4F4"
          />
        </svg>
        <svg
          className="absolute left-bottom-rect"
          width="462"
          height="316"
          viewBox="0 0 462 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="462"
            height="315"
            transform="matrix(1 0 0 -1 0 315.584)"
            fill="#F4F4F4"
          />
        </svg>
      </div>
      <div className="max-w-[1440px] mx-auto sticky bg-transparent pb-3 pt-10 top-0 z-10">
        <div className="flex w-full items-center justify-between px-4 sm:px-5 md:px-10">
          <NavLogo />
          <Button link="#">Find out more</Button>
        </div>
      </div>
      <Container className="relative craft-parallax">
        <ItemContainer className={"craft-trigger"}>
          <ContentLayout
            title={
              <Title className="heading-text-craft ">
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
        <div className="absolute craft-box z-0">
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
          className="absolute craft-box-2 z-0"
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
      </Container>

      <Container className="relative redefining-parallax">
        <ItemContainer className={"redefining-trigger"}>
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
          className="absolute redefine-box-1"
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
          className="absolute  redefine-box-2"
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

      <Container className="relative assets-parallax">
        <ItemContainer className={"assets-trigger"}>
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
          className="absolute assets-box"
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
          className="absolute assets-box-2"
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

      <Container className="relative world-parallax">
        <ItemContainer className={"world-trigger"}>
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
          className="absolute world-box"
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
          className="absolute world-box-2"
          height="40"
          viewBox="0 0 180 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="40" fill="#F4F4F4" />
        </svg>
      </Container>

      <Container className="relative ">
        <ItemContainer className={"security-target"}>
          <ContentLayout
            title={
              <Title className="heading-text-security">
                Knowledge and <br /> Security
              </Title>
            }
            subTitle={
              <SubTitle className="sub-heading-text-security">
                The Cornerstones <br className="block sm:hidden" /> of{" "}
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
          className="absolute security-box"
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
          className="absolute security-box-2"
          width="180"
          height="275"
          viewBox="0 0 180 275"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="180" height="543" fill="#F4F4F4" />
        </svg>
      </Container>
      <Container className="relative unique-parallax">
        <ItemContainer className={"unique-trigger"}>
          <ContentLayout
            title={<Title className="heading-text-unique">our blueprint</Title>}
            subTitle={
              <SubTitle className="sub-heading-text-unique">
                The reason Iconic Art <br /> is unique
              </SubTitle>
            }
          />
          <div className="w-full description-text-unique md:w-[640px] self-start md:self-end text-[22px] font-medium">
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
          className="absolute unique-box  -z-10"
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
      <Container className="relative transparency-parallax">
        <ItemContainer className="transparency-trigger">
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
          className="absolute transparency-box-2"
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
          className="absolute transparency-box"
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
      <div className="xl:h-screen max-w-[1440px] mx-auto piece-trigger overflow-hidden">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex relative flex-col w-full xl:h-screen py-28 sm:py-10">
            <div className="flex items-start h-full justify-center px-4 md:px-10 flex-col">
              <h1 className="heading-text-piece z-10 text-[3.375rem] block md:text-[8.125rem] max-w-[327px] md:max-w-[972px]  font-bold leading-[80%] uppercase text-[#373635]">
                Own a piece <br /> of a <br /> master piece
              </h1>
              <SubTitle className="sub-heading-text-piece z-10">
                Stay Ahead with <br className="block sm:hidden" /> Iconic Art
              </SubTitle>
            </div>
            <svg
              width="183"
              className="absolute piece-box -z-10"
              height="284"
              viewBox="0 0 183 284"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="183"
                height="328"
                transform="matrix(1 1.74846e-07 1.74846e-07 -1 0 328)"
                fill="#F4F4F4"
              />
            </svg>
          </div>
          <div className="email-box z-50 px-5 md:px-10 w-full py-28 sm:py-10 xl:h-screen bg-[#373635]  text-white flex flex-col justify-center items-start">
            <p className="text-[14px] md:text-[22px] font-futura font-medium leading-[140%] max-w-[290px] md:max-w-[650px] self-start  text-white">
              Find a powerful, straightforward, safer solution for your next
              investment venture.
            </p>
            <Formik
              initialValues={{
                name: "",
                email: "",
              }}
              validationSchema={ValidationSchema}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex w-full flex-col items-start mt-10">
                  <label
                    htmlFor="name"
                    className="block font-futura text-sm font-medium leading-6"
                  >
                    Your Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-0 border-0 text-white font-bold sm:text-[2rem] leading-[38.4px] border-white border-b bg-transparent  placeholder:text-gray-200 focus:ring-0 focus:ring-inset focus:ring-transparent text-sm sm:leading-6"
                  />
                  {errors.name && touched.name ? (
                    <span className="text-white font-futura text-sm leading-[140%] font-medium">
                      {errors.name}
                    </span>
                  ) : null}
                  <label
                    htmlFor="email"
                    className="block font-futura text-sm mt-6 font-medium leading-6"
                  >
                    Your Email
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jo@domaine"
                    required
                    className="w-full px-0 border-0 text-white font-bold sm:text-[2rem] leading-[38.4px] border-white border-b bg-transparent  placeholder:text-gray-200 focus:ring-0 focus:ring-inset focus:ring-transparent text-md sm:leading-6"
                  />
                  {errors.email && touched.email ? (
                    <span className="text-white text-sm font-futura leading-[140%] font-medium">
                      {errors.email}
                    </span>
                  ) : null}

                  <button
                    className="rounded-[50px] w-full font-futura md:w-auto mt-10 py-4 px-7 border bg-white text-[#373635] hover:text-white hover:bg-[#373635] transition-all duration-300 ease-in-out]"
                    type="submit"
                  >
                    Request More Information
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div className="pt-36 h-screen pb-11 overflow-hidden bg-[#F4F4F4]">
        <div className="w-full justify-center flex">
          <div className="hidden md:block">
            <FooterLogo />
          </div>
          <div className="block md:hidden scale-[2]">
            <NavLogo />
          </div>
        </div>

        {/* start */}

        <div className="flex justify-center w-full h-screen mt-[34px]">
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
    <div className={className + " " + "h-screen  md:max-w-[1440px] mx-auto"}>
      {children}
    </div>
  );
}

function Description({ children, className = "", id }) {
  return (
    <p
      id={id}
      className={
        "text-[14px] z-10 font-futura md:text-[22px] pb-[5%] font-medium leading-[140%] max-w-[290px] md:max-w-[600px] self-start md:self-end text-[#373635]" +
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
        "text-[14px] z-10 font-futura md:text-[22px] pb-[5%]  font-medium leading-[140%] max-w-[290px] md:max-w-[650px] self-start md:self-end text-[#373635]" +
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
        "text-[14px] md:text-[18px] z-10 font-medium leading-[140%] max-w-[290px] md:max-w-[550px] self-start md:self-end text-[#373635]" +
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
        "text-[3.375rem] block z-10 md:text-[8rem] max-w-[327px] md:max-w-[972px]  font-bold leading-[80%] uppercase text-[#373635]"
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
    <span className="text-7xl z-10 block font-medium leading-[100%] tracking-[18px] uppercase">
      {text}
    </span>
  );
}

function ItemContainer({ children, className }) {
  return (
    <div
      className={
        className +
        " " +
        "flex z-10 flex-col w-full pt-[15%] px-4 sm:px-5 h-full md:px-10"
      }
    >
      {children}
    </div>
  );
}

function ContentLayout({ title, subTitle, description }) {
  return (
    <div className="flex flex-col z-10 justify-between h-full w-full">
      <div>
        {title}
        {subTitle}
      </div>

      {description}
    </div>
  );
}
