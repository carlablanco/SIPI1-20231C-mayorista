'use client'
import { createContext , useContext , useState} from 'react';
import { users } from '@/mock/mockdata'
import {useRouter} from 'next/navigation';

export const UserContext = createContext();

export const UserProvider = ({children}) => {


    const router = useRouter();


    const [user, setUser] = useState({});

    const [logged , setLogged] = useState(false);
    

    const login = (user) => {
        authUser(user);
    }

    const logout = () => {
        setUser({});
        setLogged(false);
    }


        // SOLUCIONAR PROBLEMAS CON EL INICIO DE SESION
            // SOLUCIONAR PROBLEMAS CON EL INICIO DE SESION
                // SOLUCIONAR PROBLEMAS CON EL INICIO DE SESION

    const authUser = (userData) => {
        console.log(userData)
        users.forEach(u => {
            if (u.email == userData.email && u.password == userData.password) {
                console.log(u)
                setUser(u);
                console.log(user)                
                setLogged(true);
                router.push('/')
            }
        })

    }




    return <UserContext.Provider value={{user, logged, login, logout, authUser}}>
        {children}
    </UserContext.Provider>
}




