import { createContext, useContext, useEffect, useState } from "react";

//it is globle storage jis hum sara data store krne wale hai
export const AuthContext = createContext();

//this is the data provider r yaha apko children pass krna hi hoga r authprovider ko wrap krna hoga main.jsx me
export const AuthProvider = ({ children }) => {
  //for getting token to use in  logout
  const [token, setToken] = useState(localStorage.getItem("token"));
  // state for the authorization
  const [user, setUser] = useState("");
  // state for service page
  const authorizationToken = `Bearer ${token}`;
  const [services, setServices] = useState("");
  const storeTokenInLS = (serverToken) => {
    //for login valuet true then show the logout
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };
  //for logout fn token is true then true token is false then false
  let isLoggedIn = !!token;

  //tackling logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };
  //jwt authentication and to get th corrently logged in data
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("user data", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };
  //fetching data for service from db
  const getServices = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error ${error}`);
    }
  };
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
//this is like delivery boy jo ish product ko chah rha ya mang hai usko ye pahucha de and creating custom hook or custom hook create krne ke liye use se start kr ke kuch bhi likh skte hai like useAuth
//ish ke ander sara data aa gya koi bhi usko use kr skta hai like doremon pocket
export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
