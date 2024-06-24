import React, { useEffect, useState, createContext } from "react";
import { auth } from "../fire"; // Импортируйте auth из fire.js
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const signUp = (email, password, navigate) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/login"))
      .catch(err => setError(err.message));
  };

  const login = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/products"))
      .catch(err => setError(err.message));
  };

  const logOut = () => {
    signOut(auth);
  };

  const authListener = () => {
    onAuthStateChanged(auth, user => {
      if (user) {
        if (user.email === "adminkgtu@gmail.com" || user.email === "admin@gmail.com") {
          setIsAdmin(true);//password kgtu001
        }
        setCurrentUser(user);
      } else {
        setCurrentUser("");
        setIsAdmin(false);
      }
    });
  };

  useEffect(authListener, []);

  return (
    <authContext.Provider value={{ currentUser, error, isAdmin, signUp, login, logOut }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
