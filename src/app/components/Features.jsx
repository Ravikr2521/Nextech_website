import React from "react";
import CustomHeading from "./CustomComponents/CustomHeading";

const Features = () => {
  const features = [
    {
      image: "img/spaceTech.jpg",
      title: "Develop SpaceTech & AI driven NextGen products",
      description:
        "Climate Smart Agriculture, Disaster Risk Management, Weather Analytics, Landscape, Biodiversity & Forest Ecology, Carbon Footprint & Sequestration, Agri Value Chain Analytics",
    },
    {
      image: "img/geospacialLocation.jpg",
      title: "Provide Geospatial, Location Intelligence & Analytical Services.",
      description:
        "Unlock the power of geospatial data with our cutting-edge location intelligence and analytical services. Make informed decisions based on accurate spatial insights.",
    },
    {
      image: "img/IntelligentCognitiveSystems.jpg",
      title:
        "Develop Cognitive AI Solutions for Digital Commerce, Fintech and Social Networks.",
      description:
        "Harness the potential of intelligent cognitive systems to streamline your business operations. Leverage the latest advancements in AI and machine learning.",
    },
    {
      image: "img/IoTSensorNetworks.jpg",
      title:
        "Develop Core Advanced Analytical Products on IoT , Drone-SAT & Sensor Networks.",
      description:
        "Gain actionable insights from your IoT devices and sensor networks. Our core analytical products provide valuable data-driven solutions for optimizing performance.",
    },
  ];
  return (
    // <div className="flex flex-col justify-center items-center lg:pt-0 pt-10 mb-10 relative lg:px-12 md:px-12 px-6">
    //   <CustomHeading title="What We Do" />
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-10 mt-8">
    //     {features.map((item, index) => {
    //       return (
    //         <div
    //           className="border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-all rounded-lg  flex flex-col items-center justify-between transform hover:scale-105 duration-300"
    //           key={index}
    //         >
    //           <img
    //             src={item.image}
    //             alt={item.title}
    //             className="w-full h-44 object-cover rounded-t-lg  border-gray-300 dark:border-gray-800 brightness-75 dark:brightness-95"
    //           />
    //           <div className="bg-white dark:bg-black h-auto py-4 text-center flex flex-col justify-between p-4 rounded-md">
    //             <h3 className="text-lg font-semibold text-blue-900 dark:text-gray-100 mb-4">
    //               {item.title}
    //             </h3>
    //             <p className="text-gray-600 dark:text-gray-500 italic text-md">
    //               {item.description}
    //             </p>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center lg:pt-0 pt-10 mb-10 relative lg:px-12 md:px-12 px-6">
      <CustomHeading title="What We Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-10 mt-8">
        {features.map((item, index) => {
          return (
            <div
              className="border select-none border-gray-200 relative dark:border-gray-600 shadow-lg hover:shadow-xl transition-all rounded-lg  flex flex-col items-center justify-between transform hover:scale-105 duration-300"
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full min-h-[460px] object-cover rounded-lg  border-gray-300 dark:border-gray-800 brightness-75 dark:brightness-95"
              />
              <div className="bg-white dark:bg-black h-auto  py-4 text-center flex flex-col  justify-between p-4  rounded-b-lg info_card">
                <h3 className="text-xl font-semibold  dark:text-gray-100 text-white">
                  {item.title}
                </h3>
                <p className="text-whie mt-2 dark:text-gray-500 italic text-md text-[#cacaca]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
