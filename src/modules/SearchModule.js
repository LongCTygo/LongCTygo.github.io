import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchModule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [leftTableData, setLeftTableData] = useState([]);

  const handleSearch = () => {
    if (searchQuery.length === 0) {
      return;
    }
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          fname: searchQuery,
        },
      })
      .then((result) => {
        const data = result.data.data;
        const newLeftTableData = [];
        let limit = 0;
        for (let i = 0; i < data.length; i++) {
          const card = data[i];
          newLeftTableData.push({
            password: String(card.id).padStart(8, "0"),
            cardName: card.name,
            cardType: card.type,
            frameType: card.frameType,
          });
          limit++;
          if (limit === 100) {
            break;
          }
        }
        // console.log(newLeftTableData)
        setLeftTableData(newLeftTableData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getTypeBadge = (type, typeName) => {
    let textColor = "text-black";
    let bgColor = "bg-orange-400";
    if (type.startsWith("normal")) {
      bgColor = "bg-yellow-400";
    } else if (type === "spell") {
      bgColor = "bg-emerald-400";
    } else if (type === "trap") {
      bgColor = "bg-fuchsia-700";
    } else if (type.startsWith("synchro")) {
      bgColor = "bg-white";
    } else if (type.startsWith("xyz")) {
      bgColor = "bg-black";
      textColor = "text-white";
    } else if (type.startsWith("fusion")) {
      bgColor = "bg-purple-700";
    } else if (type.startsWith("ritual")) {
      bgColor = "bg-blue-400";
    } else if (type === "link") {
      bgColor = "bg-blue-700";
    }
    let className = `badge ${bgColor} ${textColor}`;
    return <span className={className}>{typeName}</span>;
  };

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
        <button onClick={handleSearch} className="btn btn-secondary px-10">
          Search
        </button>
      </div>
      <div className="mb-4 w-full md:w-2/3 overflow-y-auto" style={{"max-height": "30rem"}}>
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
                    className="text-primary"
                    href={`https://yugipedia.com/wiki/${row.password}`}
                  >
                    {row.password}
                  </a>
                </td>
                <td>
                  {row.cardName} {getTypeBadge(row.frameType, row.cardType)}
                </td>
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
    </div>
  );
};

export default SearchModule;
