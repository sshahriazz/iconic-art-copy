import React from "react";
import BgBoxes from "../components/BgBoxes";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});
const EmailSection = () => {
  return (
    <div className="relative lg:h-screen email-trigger md:max-w-[1440px] mx-auto overflow-hidden">
      <BgBoxes />
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full pt-20 lg:pt-0">
        <div className="h-full flex flex-col justify-center">
          <div className="flex flex-col mt-[15%] mb-[5%]">
            <div className="flex items-start h-full justify-center px-4 md:px-10 flex-col">
              <h1 className="heading-text-piece z-10 text-[3.375rem] block md:text-[8.125rem] max-w-[327px] md:max-w-[972px]  font-bold leading-[80%] uppercase text-[#373635]">
                Own a piece <br /> of a <br /> master piece
              </h1>
              <SubTitle className="sub-heading-text-piece z-10">
                Stay Ahead with <br className="block sm:hidden" /> Iconic Art
              </SubTitle>
            </div>
          </div>
        </div>
        <div className="h-full w-full ">
          <div className="email-box h-full  z-50 px-5 md:px-10 py-28 sm:py-10  bg-[#373635]  text-white flex flex-col justify-center items-start">
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
                  <div className="flex justify-between w-full align-middle items-center">
                    <Field
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Enter your name"
                      required
                      className="w-full px-0 border-0 text-white font-bold sm:text-[2rem] leading-[38.4px] bg-transparent  placeholder:text-gray-200 focus:ring-0 focus:ring-inset focus:ring-transparent text-sm sm:leading-6"
                    />
                    <span className="font-bold text-3xl pr-3 pt-4">*</span>
                  </div>

                  <span className="email-block-border w-0 border border-white"></span>
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
                  <div className="flex justify-between w-full align-middle items-center">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jo@domaine"
                      required
                      className="w-full px-0 border-0 text-white font-bold sm:text-[2rem] leading-[38.4px]  bg-transparent  placeholder:text-gray-200 focus:ring-0 focus:ring-inset focus:ring-transparent text-md sm:leading-6"
                    />
                    <span className="font-bold text-3xl pr-3 pt-4">*</span>
                  </div>
                  <span className="email-block-border w-0 border border-white"></span>

                  {errors.email && touched.email ? (
                    <span className="text-white text-sm font-futura leading-[140%] font-medium">
                      {errors.email}
                    </span>
                  ) : null}

                  <div className="w-full">
                    <label
                      htmlFor="location"
                      className="block font-futura text-sm mt-6 font-medium leading-6"
                    >
                      Your Country
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-2 block tracking-wide font-bold text-[32px]  w-full border-0 text-white bg-[#373635]"
                      defaultValue="Canada"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>

                  <button
                    disabled={errors.name || errors.email}
                    className="rounded-[50px] w-full font-futura md:w-auto mt-10 py-4 px-7 border bg-white text-[#373635] hover:text-white hover:bg-[#373635] transition-all duration-300 ease-in-out"
                    type="submit"
                  >
                    Request More Information
                  </button>

                  <p className="font-futura  text-center text-[20px] mt-4 font-medium">
                    Merci <br /> Nous avons bien reçu votre demande.
                  </p>
                </Form>
              )}
            </Formik>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="flex gap-1 justify-center ml-0 lg:ml-[37%] mt-5">
                <span className="font-futura text-[12px]">Legal</span>
                <svg
                  width="18"
                  height="17"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_1694_18405"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="18"
                    height="17"
                  >
                    <rect
                      x="0.816406"
                      y="0.316895"
                      width="16.366"
                      height="16.366"
                      fill="#D9D9D9"
                    />
                  </mask>
                  <g mask="url(#mask0_1694_18405)">
                    <path
                      d="M8.99831 12.1192L5.37891 8.49983L5.8615 8.01724L8.65735 10.8131V4.06738H9.33927V10.8131L12.1351 8.01724L12.6177 8.49983L8.99831 12.1192Z"
                      fill="#969492"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;

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
