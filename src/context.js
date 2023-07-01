import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const url = "https://fakestoreapi.com/products";

  const fetchData = async (url) => {
    try {
      const { data } = await axios(url);
      setUserData(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <AppContext.Provider value={{ userData }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
