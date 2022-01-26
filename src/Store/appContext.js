import { createContext, useState } from "react";

export const Context = createContext(null)

const UserProvider = ({ children }) => {
    const [nombre, setNombre] = useState('');
    const cambiarNombre = (e) => {
        e.preventDefault()
        setNombre(e.target.value)
    }
    return (
        <Context.Provider value={{nombre, cambiarNombre}} >
            {children}
        </Context.Provider>
    );
}
export default UserProvider;