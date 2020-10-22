import React, { createContext } from 'react';
import usePersistState from '../utils/usePersistState';



export const UserContext = createContext({});



const UserProvider: React.FC = ({ children }) => {


  const [user, setUser] = usePersistState('@dashboard:user', '');
  const [token, setToken] = usePersistState('@dashboard:token', '');

  return (

    <UserContext.Provider value={{user, token, setUser, setToken}}>
      {children}
    </UserContext.Provider>


  )

}


export default UserProvider;