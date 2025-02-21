import React from "react";

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto px-6  py-12 ">
      <div
        className=" inset-0 bg-cover bg-center "
        style={{
          backgroundImage: "url('/img/bg_img.jpg')",
        }}
      ></div>
      <div className="md:w-2/3 lg:w-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 text-red-400"
        >
          <path
            fillRule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
            clipRule="evenodd"
          />
        </svg>

        <h2 className="my-6 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
          A technology-first approach to payments and finance
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad
          ipsum pariatur autem, fugit laborum in atque amet obcaecati? Nisi
          minima aspernatur, quidem nulla cupiditate nam consequatur eligendi
          magni adipisci.
        </p>
      </div>

      <div className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
        {[
          {
            title: "First Feature",
            description:
              "Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png",
          },
          {
            title: "Second Feature",
            description:
              "Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341134.png",
          },
          {
            title: "Third Feature",
            description:
              "Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341160.png",
          },
          {
            title: "More Features",
            description:
              "Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.",
            imgSrc: "https://cdn-icons-png.flaticon.com/512/4341/4341025.png",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
          >
            <div className="relative space-y-8 py-12 p-8">
              <img
                src={feature.imgSrc}
                className="w-12"
                width="512"
                height="512"
                alt={feature.title}
              />
              <div className="space-y-2">
                <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                  {feature.title}
                </h5>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
              <a
                href="#"
                className="flex items-center justify-between group-hover:text-secondary"
              >
                <span className="text-sm">Read more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition-all  duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
