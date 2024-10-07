import { createContext, useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compared, setCompared] = useState({
    compared: localStorage.getItem("compared"),
  });

  useEffect(() => {
    localStorage.setItem("compare", compared);
  }, [compared]);

  const value = useMemo(
    () => ({ compared, setCompared }),
    [compared, setCompared]
  );

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
}

export default CompareContext;

CompareProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
