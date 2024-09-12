import React from "react";
import { FiTrendingUp } from "react-icons/fi";

const Hero = ({ setQuery }) => {
  const trendingTopics = [
    "Climate Change",
    "Artificial Intelligence",
    "Global Economy",
    "Space Exploration",
    "Renewable Energy",
  ];

  return (
    <div className="md:w-3/4 md:mx-auto mx-5 mb-5">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-1 text-center dark:text-gray-200">
        Explore the Latest
        <span className="block bg-clip-text text-transparent bg-gradient-to-br from-gray-300 to-gray-600 animate-gradient dark:from-gray-700 dark:to-gray-900">
          News & Trends
        </span>
      </h1>
      <p className="mt-10 md:text-3xl text-xl font-semibold text-center dark:text-gray-300">What We Offer</p>
      <div className="mb-10 border border-dashed p-2 grid grid-cols-3 gap-4 rounded dark:border-gray-600">
        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Daily News Updates</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Tailor your news feed by selecting topics such as technology,
            politics, sports, and entertainment. Get a more personalized
            experience.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Breaking News Coverage</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Stay updated with the most trending and viral stories in one click.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Investigative Journalism</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Bookmark articles to read later and organize your favorite reads
            with ease.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Documentaries</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Filter news by categories such as politics, sports, and
            entertainment.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Opinion Shows</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Receive real-time notifications about breaking news.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Informed Citizenry</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Access news in multiple languages to stay informed no matter where
            you are.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">In-Depth Analysis</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Toggle between light and dark themes for a more comfortable reading
            experience.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Live Reporting</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Toggle between light and dark themes for a more comfortable reading
            experience.
          </p>
        </div>

        <div className="border border-dashed p-4 rounded hover:shadow-md dark:border-gray-700 dark:hover:shadow-xl">
          <h3 className="text-xl font-semibold dark:text-gray-100">Weather Forecasts</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Toggle between light and dark themes for a more comfortable reading
            experience.
          </p>
        </div>

      </div>

      <div className="mt-5 animate-fade-in-up animation-delay-400 space-y-2 md:w-max mx-auto">
        <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-700 md:w-max mx-auto dark:text-gray-300">
          <FiTrendingUp className="h-5 w-5 mr-2 text-gray-600 dark:text-gray-400" />
          Trending Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {trendingTopics.map((topic, index) => (
            <span
              key={index}
              onClick={() => setQuery(topic)}
              className="bg-white text-gray-700 text-sm px-3 py-1 rounded-full border border-dashed hover:bg-gray-200 transition-all duration-300 cursor-pointer transform hover:scale-105 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
