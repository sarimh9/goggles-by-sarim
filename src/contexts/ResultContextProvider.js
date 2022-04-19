import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const API_URL = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Aligarh Muslim University");

  // type = /images, or /search or /videos etc
  const getResults = async (type) => {
    setIsLoading(true);
    // console.log({ type });
    const response = await fetch(`${API_URL}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "IN",
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
      },
    });

    const data = await response.json();
    // console.log(data);

    if (type.includes("/news")) {
      let tempArr = [...data.entries];
      console.log(tempArr); //data available here
      setResults(tempArr);
    } else {
      setResults(data);
    }

    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
