import React from "react";
import CustomHeading from "./CustomComponents/CustomHeading";

const Team = () => {
  const teams = [
    {
      image: "img/navneet-ravikar.webp",
      name: "Navneet Ravikar",
      desgnation: "Founder & Managing Director",
      link: "https://www.linkedin.com/in/navneet-ravikar-675a3b16",
      bgColor: "bg-gradient-to-b  from-blue-100 via-blue-50 to-transparent",
    },
    {
      image: "img/anil-parek.jpg",
      name: "Anil Pareek",
      desgnation: "Co-Founder & Director - Marketing",
      link: "https://www.linkedin.com/in/anil-pareek-76b1922",
      bgColor: "bg-gradient-to-b from-green-100 via-green-50 to-transparent",
    },
    {
      image: "img/alok_mukharjee.jpg",
      name: "Alok B Mukherjee",
      desgnation:
        "Co-Founder & Director - Products, Research & Analytics, Lead System Scientist",
      link: "https://www.linkedin.com/in/dr-alok-b-mukherjee-52b08b1a9",
      bgColor: "bg-gradient-to-b from-purple-100 via-purple-50 to-transparent",
    },
    {
      image: "img/bharath-sir.jpg",
      name: "Bharath Settipally",
      desgnation: "Co-Founder & Director - Technology & Product Development",
      link: "https://www.linkedin.com/in/bharath-settipally-a90a9524",
      bgColor: "bg-gradient-to-b from-orange-100 via-orange-50 to-transparent",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-14 mb-10 relative lg:px-12 md:px-12 px-6">
      <CustomHeading title="Our Team" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-9">
        {teams.map((member, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center shadow-lg rounded-lg p-6 transition-all transform hover:scale-105 duration-300 ${member.bgColor}`}
          >
            <div className="relative w-32 h-32">
              <div className="rounded-full w-full border-[3px] drop-shadow-lg h-full overflow-hidden bg-white dark:bg-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain object-top"
                />
              </div>
            </div>

            <div className="text-center mt-6">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-gray-100">
                {member.name}
                <div className="flex justify-center mx-auto my-2">
                  <span className="inline-block w-3 h-0.5 bg-gray-500 rounded-full"></span>
                  <span className="inline-block w-32 h-0.5 mx-1 bg-gray-500 rounded-full"></span>
                  <span className="inline-block w-3 h-0.5 bg-gray-500 rounded-full"></span>
                </div>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                {member.desgnation}
              </p>
            </div>
            <img
              src="img/leadsNexTech-logo-transparent.png"
              className="h-11 absolute  left-2 top-0 object-contain opacity-80"
            />

            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-4 right-4 bg-gray-500 p-2 rounded-full text-white shadow-md hover:bg-blue-700 animate-pulse transition duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
