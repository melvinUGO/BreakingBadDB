import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?name=${searchField}`
      );
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchField]);

  return (
    <AppContext.Provider
      value={{ characters, setSearchField, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
