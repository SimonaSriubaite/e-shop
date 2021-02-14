import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState(false);

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

DisplayProvider.propTypes = {
  children: PropTypes.node,
};
