import { createContext, useContext, useState, ReactNode } from "react";

interface IUser {
    email: string;
    login: string;
    password: string;
}

interface UserContextType {
    userData: IUser[];
    currentUser: IUser | null;
    addUser: (user: IUser) => void;
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
    const [userData, setUserData] = useState<IUser[]>([]);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);

    const addUser = (user: IUser) => {
        setUserData((prev) => [...prev, user]);
    };

    const loginUser = (login: string, password: string) => {
        const user = userData.find((user) => user.login === login && user.password === password);
        if(user) {
            setCurrentUser(user);
            return true;
        } else {
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ userData, currentUser, loginUser, addUser }}>
            {children}
        </UserContext.Provider>
    );
};
