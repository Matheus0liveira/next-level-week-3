import React, { createContext } from 'react';
import usePersistState from '../utils/usePersistState';



const UserContext = createContext({});



const UserProvider: React.FC = ({ children }) => {
  
  const userValues = {
    id: '',
    name: '',
    email: '',
  
  
  };
  
  const userToken = {
    token: ''
  
  
  };


  const [user, setUser] = usePersistState('@user', userValues);
  const [token, setToken] = usePersistState('@token', userToken);

  return (

    <UserContext.Provider value={{user, token, setUser, setToken}}>
      {children}
    </UserContext.Provider>


  )

}


export default UserProvider;