'use client'
import { createContext , useContext , useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {


    const [user, setUser] = useState({});

    const [logged , setLogged] = useState(false);
    

    const login = (user) => {
        setUser(user);
        setLogged(true);
    }

    const logout = () => {
        setUser({});
        setLogged(false);
    }


    return <UserContext.Provider value={{user, logged, login, logout}}>
        {children}
    </UserContext.Provider>
}




