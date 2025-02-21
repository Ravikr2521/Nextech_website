import React from "react";

const EarthTechMission = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
      <div className="flex flex-col-reverse items-center justify-between text-gray-600 md:flex-row md:gap-6 lg:gap-12 lg:items-center">
        <div className="md:w-7/12 lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            Empowering a Sustainable Future with Human-Centric EarthTech
            Solutions
          </h2>
          <p className="my-8 text-gray-600 dark:text-gray-300">
            We are committed to leveraging cutting-edge technologies to create
            innovative and sustainable solutions that empower businesses and
            communities worldwide. Through data-driven insights and
            human-centric approaches, we drive progress in environmental,
            social, and economic domains.
          </p>

          <div className="divide-y divide-gray-100 dark:divide-gray-800 space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 md:items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-indigo-500 dark:text-indigo-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                  AI-Powered Insights
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Harnessing AI & Big Data to drive impactful analytics for
                  sustainable solutions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 md:items-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-teal-600 dark:text-teal-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                  Sustainable Solutions
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Developing eco-friendly and data-driven solutions for a better
                  future.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-5/12 lg:w-1/2">
          <img
            src="/img/pie.svg"
            alt="EarthTech Analytics"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default EarthTechMission;
