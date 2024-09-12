import React from "react";
import Button from "./Button";

const NewsCard = ({ item, limitDescription, formatDate }) => {
  return (
    <div className="p-3 border rounded-md flex flex-col gap-2 h-full bg-white shadow-md dark:bg-gray-900 dark:border-gray-700">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.title}</h1>
      <div className="h-48 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-800 dark:text-gray-300">{limitDescription(item.description)}</p>
      </div>
      <p className="text-xs mt-auto text-gray-600 dark:text-gray-400">{formatDate(item.publishedAt)}</p>
      <span className="flex justify-between text-sm text-gray-700 dark:text-gray-400">
        <a href={item.source.url} className="hover:underline font-medium dark:hover:text-yellow-400">
          Source: {item.source.name}
        </a>
      </span>
      <Button as="a" href={item.url} target="_blank" rel="noreferrer" className="text-sm border py-1 px-2 bg-black text-white w-max rounded dark:bg-gray-600 dark:text-gray-200">
        Read more
      </Button>
    </div>
  );
};

export default NewsCard;
