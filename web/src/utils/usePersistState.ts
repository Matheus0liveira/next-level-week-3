import { useEffect, useState } from 'react';



const usePersistState = (key: string, initialValue: object | string) => {

  const [state, setState] = useState(() => {

    const storageValue = localStorage.getItem(key);


    if(storageValue){
      return JSON.parse(storageValue);
    };

    return initialValue;

  });


  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  },[key, state]);



  return [state, setState];
};



export default usePersistState;