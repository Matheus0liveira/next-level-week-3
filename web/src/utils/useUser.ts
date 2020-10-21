import { useContext } from 'react';

import { UserContext } from '../context/user';


interface PropsContext {
  user: string;
  setUser: string;
  token: string;
  setToken: string;
 }

const useUser = () => {


  const context = useContext<PropsContext | any>(UserContext);

  if(!context) throw new  Error('useUser must be used within a UserProvider');


  const { user, setUser, token, setToken } = context;



  return { user, setUser, token, setToken };

}


export default useUser;