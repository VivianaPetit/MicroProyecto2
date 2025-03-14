import { createContext, useState } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState('Viviana');

    return (
        <UserContext value={{ user, setUser }}>
            {children}
        </UserContext>
    );
};

export { UserContext, UserProvider };
