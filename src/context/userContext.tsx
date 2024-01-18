"use client";

import { Movie } from "@/interfaces/MovieInterface";
import { createContext, useState } from "react";

export type UserType = {
  id: number;
  name: string;
  email: string;
  movies: Movie[];
};


export const userContext = createContext<{
  currentUser: UserType | null;
  setCurrentLoggedUser: (loggedUser: UserType) => void;
}>({ currentUser: null, setCurrentLoggedUser: () => {} });

export const UserContextProvider = ({ ...props }) => {
  const [currentUser, setCurrentUser] = useState<UserType | null>(null);
  const setCurrentLoggedUser = (loggedUser: UserType) => {
    setCurrentUser(loggedUser);
  };

  return (
    <userContext.Provider value={{ currentUser, setCurrentLoggedUser }}>
      {props.children}
    </userContext.Provider>
  );
};