// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaSatellite, FaLeaf, FaCloud, FaBrain } from "react-icons/fa";
// import MaxWidthWrapper from "./CustomComponents/MaxWidthWrapper";

// const techStack = [
//   {
//     id: 1,
//     name: "AI & Machine Learning",
//     icon: <FaBrain className="text-blue-500" />,
//     description: "Advanced AI models analyze environmental data for insights.",
//   },
//   {
//     id: 2,
//     name: "IoT & Smart Sensors",
//     icon: <FaCloud className="text-green-500" />,
//     description:
//       "Real-time data collection from sensors deployed in the field.",
//   },
//   {
//     id: 3,
//     name: "Satellite & GIS Mapping",
//     icon: <FaSatellite className="text-yellow-500" />,
//     description:
//       "Geospatial analysis helps track climate patterns and land use.",
//   },
//   {
//     id: 4,
//     name: "Sustainable Cloud Computing",
//     icon: <FaLeaf className="text-gray-500" />,
//     description: "Eco-friendly cloud solutions optimize energy consumption.",
//   },
// ];

// const TechStack = () => {
//   const [hoveredTech, setHoveredTech] = useState(null);

//   return (
//     <MaxWidthWrapper className="container mx-auto px-6 py-12 relative">
//       <h2 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
//         NextGen Technologies Powering EarthTech Analytics
//       </h2>
//       <p className="text-center text-gray-500 dark:text-gray-400 mt-2">
//         Striving to become a leader in EarthTech Analytics by providing
//         human-centric solutions for a sustainable future.
//       </p>

//       {/* Tech Stack Icons */}
//       <div className="flex lg:flex-row flex-col justify-center gap-8 mt-6 cursor-pointer">
//         {techStack.map((tech) => (
//           <motion.div
//             key={tech.id}
//             className="p-6 bg-white dark:bg-gray-800 shadow-lg  rounded-xl text-center"
//             whileHover={{ scale: 1.1 }}
//             onMouseEnter={() => setHoveredTech(tech)}
//             onMouseLeave={() => setHoveredTech(null)}
//           >
//             <div className="text-5xl flex  lg:justify-start justify-center">
//               {tech.icon}
//             </div>
//             <h3 className="text-lg font-semibold mt-2">{tech.name}</h3>
//           </motion.div>
//         ))}
//       </div>

//       {hoveredTech && (
//         <motion.div
//           className="mt-4 text-lg text-gray-600 dark:text-gray-300 absolute w-full flex justify-center"
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 10 }}
//         >
//           {hoveredTech.description}
//         </motion.div>
//       )}
//     </MaxWidthWrapper>
//   );
// };

// export default TechStack;

"use client";

import Image from "next/image";

const solutions = [
  {
    id: 1,
    title: "Sustainable Agriculture",
    subtitle: "Precision Farming",
    description:
      "Utilizing AI-driven insights to optimize water usage, soil health, and crop yields for sustainable farming.",
    image: "https://dummyimage.com/720x400",
  },
  {
    id: 2,
    title: "Smart Cities",
    subtitle: "Urban Planning",
    description:
      "Leveraging geospatial analytics for efficient city planning, traffic management, and resource allocation.",
    image: "https://dummyimage.com/721x401",
  },
  {
    id: 3,
    title: "Climate Monitoring",
    subtitle: "Environmental Insights",
    description:
      "Real-time monitoring of climate patterns to help businesses and governments make data-driven decisions.",
    image: "https://dummyimage.com/722x402",
  },
  {
    id: 4,
    title: "Renewable Energy",
    subtitle: "Energy Optimization",
    description:
      "Using AI-powered analytics to enhance the efficiency of solar and wind energy solutions.",
    image: "https://dummyimage.com/723x403",
  },
];

const OurSolutions = () => {
  return (
    <section className="text-gray-600 body-font max-w-7xl mx-auto relative">
      <div className="container px-5 py-24 mx-auto">
        {/* Title Section */}
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Transforming the Future with EarthTech
            </h1>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            We leverage NextGen Technologies to deliver human-centric solutions,
            driving sustainability and innovation.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap -m-4">
          {solutions.map((solution) => (
            <div key={solution.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <Image
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={solution.image}
                  alt={solution.title}
                  width={720}
                  height={400}
                  priority
                />
                <h3 className="tracking-widest text-green-500 text-xs font-medium title-font">
                  {solution.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {solution.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
