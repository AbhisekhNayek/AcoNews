import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import Button from "./Button";

const NewsContent = ({ query }) => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const articlesPerPage = 10;
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;

  const getNewsData = async (page, searchQuery) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://gnews.io/api/v4/search?q=${searchQuery}&apikey=${apiKey}&page=${page}&max=${articlesPerPage}`
      );
      setNewsData(res.data.articles);
      setTotalPages(Math.ceil(res.data.totalArticles / articlesPerPage));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNewsData(currentPage, query);
  }, [currentPage, query]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderSkeletonLoader = () => (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {Array(articlesPerPage).fill().map((_, index) => (
        <div key={index} className="p-3 border rounded-md flex flex-col gap-2 animate-pulse bg-gray-200">
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-32 bg-gray-300 rounded-md"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );

  const limitDescription = (description, wordLimit = 30) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return description;
  };

  if (error) {
    return <p className="md:w-3/4 md:mx-auto mx-5">There was an error fetching the news: {error.message}</p>;
  }

  return (
    <div className="md:w-3/4 md:mx-auto mx-5">
      {loading ? (
        renderSkeletonLoader()
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {newsData.length > 0 ? (
            newsData.map((item) => (
              <NewsCard
                key={item.url}
                item={item}
                limitDescription={limitDescription}
                formatDate={formatDate}
              />
            ))
          ) : (
            <p>No news articles available.</p>
          )}
        </div>
      )}
      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-1 bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Previous
        </Button>

        <span className="text-gray-700">
          {` Page ${currentPage} of ${totalPages} `}
        </span>

        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-1 bg-gray-300 text-gray-700 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NewsContent;
