

// SearchContext.js

import { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [restrolist, setrestrolist] = useState(null);
  const [filteredrestrolist, setfilteredrestrolist] = useState([]);

  return (
    <SearchContext.Provider value={{ restrolist, setrestrolist, filteredrestrolist, setfilteredrestrolist }}>
      {children}
    </SearchContext.Provider>
  );
};


