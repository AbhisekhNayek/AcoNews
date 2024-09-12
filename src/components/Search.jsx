import { useState } from "react";
import Button from "./Button";

const Search = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchInput.trim() === "") {
      onSearch("latest");
    } else {
      onSearch(searchInput.trim());
    }

    setSearchInput("");
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <div className="md:w-3/4 md:mx-auto mx-5 flex items-center">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search news"
          className="border border-gray-300 p-3 mr-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button type="submit">Search</Button>
      </div>
    </form>
  );
};

export default Search;
