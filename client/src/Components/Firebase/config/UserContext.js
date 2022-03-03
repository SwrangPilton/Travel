import { useEffect } from "react";
import { useContext, useState } from "react";
import { createContext } from "react";
import { auth } from "./firebaseConfig";

export const UserContext = createContext(null)
export const GetUser = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        })
    }, [])
    const value = { user }
    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}