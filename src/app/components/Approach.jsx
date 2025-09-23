"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Market Research and Analysis",
    description:
      "Identify your target audience and understand their needs, preferences, and behaviors.",
  },
  {
    id: 2,
    title: "Product Development and Testing",
    description:
      "Develop digital products or services that address the needs and preferences of your target audience.",
  },
  {
    id: 3,
    title: "Marketing and Promotion",
    description:
      "Develop a comprehensive marketing strategy to promote your digital products or services.",
  },
  {
    id: 4,
    title: "Launch and Optimization",
    description:
      "Launch your digital products or services to the market, closely monitoring their performance and user feedback.",
  },
];

const Approach = () => {
  return (
    <div className="bg-neutral-900 py-10 lg:py-20 mt-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title Section */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-white font-semibold text-2xl md:text-4xl">
            Our Approach
          </h2>
          <p className="mt-2 text-neutral-400">
            This profound insight guides our comprehensive strategy — from
            meticulous research and strategic planning to seamless execution of
            brand development and product deployment.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
          {/* Image Section */}
          <div className="relative aspect-w-16 aspect-h-9 lg:aspect-auto">
            <Image
              src="/img/geospacialLocation.jpg"
              alt="Our Approach"
              layout="responsive"
              width={600}
              height={600}
              className="rounded-xl "
            />
          </div>

          {/* Steps Timeline */}
          <div>
            <h3 className="text-xs font-medium uppercase text-yellow-400 mb-4">
              Steps
            </h3>

            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex gap-x-5 ms-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Step Number */}
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 flex justify-center items-center size-8">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-yellow-400 font-semibold text-xs uppercase rounded-full">
                      {step.id}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-white">{step.title}:</span>{" "}
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.a
              href="#"
              className="group inline-flex items-center gap-x-2 py-2 px-4 bg-yellow-400 font-medium text-sm text-neutral-800 rounded-full focus:outline-none mt-4"
              whileHover={{ scale: 1.05 }}
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                  d="M14.05 2a9 9 0 0 1 8 7.94"
                ></path>
                <path
                  className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                  d="M14.05 6A5 5 0 0 1 18 10"
                ></path>
              </svg>
              Schedule a Call
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
