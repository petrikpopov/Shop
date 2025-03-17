import { createContext, useContext, useState, ReactNode } from "react";

type UserModel = {
  email: string;
  login: string;
  password: string;
}

type UserContextType = {
  userData: UserModel[];
  currentUser: UserModel | null;
  addUser: (user: UserModel) => void;
  loginUser: (login: string, password: string) => boolean;
}

const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }

  return context;
};

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userData, setUserData] = useState<UserModel[]>([]);
  const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

  const addUser = (user: UserModel) => {
    setUserData((prev) => [...prev, user]);
  };

  const loginUser = (login: string, password: string) => {
    const user = userData.find(
      (user) => user.login === login && user.password === password,
    );
    if (user) {
      setCurrentUser(user);
      return true;
    } else {
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ userData, currentUser, loginUser, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
