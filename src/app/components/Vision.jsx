import React from "react";
import MaxWidthWrapper from "./CustomComponents/MaxWidthWrapper";
import CustomHeading from "./CustomComponents/CustomHeading";
import Link from "next/link";

const Vision = () => {
  return (
    <MaxWidthWrapper className="flex flex-col justify-center items-center lg:pt-5 pt-10 lg:mb-20 relative">
      <CustomHeading title="Our Vision" />
      <div className="relative isolate px-6 pt-1 lg:px-8">
        <div
          className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/628] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[60.1875rem]"></div>
        </div>

        <div className="mx-auto max-w-2xl py-6 sm:py-10 lg:py-10 ">
          <div className="flex w-full justify-center lg:absolute lg:top-3 lg:-right-96 top-10  -right-3">
            <img
              src="https://www.leadsnextech.com/images/earthTech.jpg"
              className="m-0 w-1/3 md:w-1/5 brightness-100 mix-blend-multiply rotate-[23deg]   dark:mix-blend-normal dark:rounded-full"
            />
          </div>
          <div className="hidden sm:mb-8  sm:flex sm:justify-center">
            <div className="relative flex rounded-full px-3 py-2 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Human-Centric EarthTech Solutions.{" "}
              <Link href="#">
                <p className="font-semibold text-indigo-600 mx-2">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Learn more <span aria-hidden="true">&rarr;</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <p className="lg:mt-6  text-2xl font-semibold leading-8 text-gray-800">
              Striving to become a Leading EarthTech Analytics Company by
              providing Human Centric Solutions using NextGen Technologies.
            </p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Vision;
