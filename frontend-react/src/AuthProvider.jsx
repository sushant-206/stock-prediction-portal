import {useState, useContext, createContext} from 'react'

// Create the context
const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(
        // !! marked is used to set true if access token is present else false if not present
        !!localStorage.getItem('accessToken')
    );

  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthProvider
export {AuthContext};
