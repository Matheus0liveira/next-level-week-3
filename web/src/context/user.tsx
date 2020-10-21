import React, { createContext } from 'react';
import usePersistState from '../utils/usePersistState';



export const UserContext = createContext({});



const UserProvider: React.FC = ({ children }) => {
  
  const userValues = {
    id: '',
    name: '',
    email: '',
  
  
  };
  
  const userToken = {
    token: ''
  
  
  };


  const [user, setUser] = usePersistState('@dashboard:user', userValues);
  const [token, setToken] = usePersistState('@dashboard:token', userToken);

  return (

    <UserContext.Provider value={{user, token, setUser, setToken}}>
      {children}
    </UserContext.Provider>


  )

}


export default UserProvider;