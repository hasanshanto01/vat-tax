import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   console.log(children);
  const [user, setUser] = useState(null);
  const [isUserVerified, setIsUserVerified] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [personalDetails, setPersonalDetails] = useState(null);

  // const baseURL = `http://127.0.0.1:8000/api/v1`;
  const baseURL = `http://62.171.179.61:8000/api/v1`;

  const authInfo = {
    user,
    setUser,
    isUserVerified,
    setIsUserVerified,
    isAdmin,
    setIsAdmin,
    personalDetails,
    setPersonalDetails,
    baseURL,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
