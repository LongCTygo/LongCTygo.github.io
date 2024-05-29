import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardNameRow from "../partials/CardNameRow";

const SearchModule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [leftTableData, setLeftTableData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (isSearching) {
      return;
    }
    if (searchQuery.length === 0) {
      setErrorMessage("Please enter your search query.");
      return;
    }
    localStorage.setItem("searchQuery",searchQuery)
    setIsSearching(true);
    setErrorMessage("");
    setLeftTableData([]);
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          fname: searchQuery,
        },
      })
      .then((result) => {
        const data = result.data.data;
        const newLeftTableData = [];
        for (let i = 0; i < data.length; i++) {
          const card = data[i];
          newLeftTableData.push({
            password: String(card.id).padStart(8, "0"),
            cardName: card.name,
            cardType: card.type,
            frameType: card.frameType,
            race: card.race
          });
        }
        setLeftTableData(newLeftTableData);
        localStorage.setItem("data",JSON.stringify(newLeftTableData))
      })
      .catch((error) => {
        localStorage.setItem("data","[]")
        if (error.response.status === 400) {
          setErrorMessage("No results found.");
          return;
        }
        console.error(error);
        setErrorMessage("An error occured.");
      });
    setIsSearching(false);
  };

  useEffect(() => {
    document.title = "Search Card Database";
    if (localStorage.getItem("searchQuery") !== null){
      setSearchQuery(localStorage.getItem("searchQuery"))
      if (localStorage.getItem("data") === null ){
        localStorage.setItem("data",JSON.stringify([]))
        return
      }
      try {
        const data = JSON.parse(localStorage.getItem("data"))
        setLeftTableData(data)
      } catch {
        console.warn("Malformed data.")
        localStorage.setItem("data",JSON.stringify([]))
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-4xl font-bold mb-4">Search Database</h1>
      <div className="mb-4 flex w-full md:w-2/3">
        <div className="flex-grow mx-2">
          <input
            type="text"
            placeholder="Search..."
            className="input input-primary w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
        <button
          id="search-button"
          onClick={handleSearch}
          className="btn btn-secondary px-10"
        >
          Search
        </button>
      </div>
      <div
        className="mb-4 w-full md:w-2/3 overflow-y-auto"
        style={{ "maxHeight": "30rem" }}
      >
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Password</th>
              <th>Card Name</th>
              <th>Get Price</th>
            </tr>
          </thead>
          <tbody>
            {leftTableData.map((row) => (
              <tr key={row.password}>
                <td>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary link link-hover"
                    href={`https://yugipedia.com/wiki/${row.password}`}
                  >
                    {row.password}
                  </a>
                </td>
                <CardNameRow row={row} />
                <td>
                  <Link to={row.password} className="btn btn-primary">
                    Get Price
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-secondary">
        {isSearching && (
          <span className="loading loading-ring loading-lg"></span>
        )}
      </p>
      <p className="text-error">{errorMessage}</p>
    </div>
  );
};

export default SearchModule;
