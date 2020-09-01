import React, {createContext, useState, useEffect} from 'react';
import Toaster from '../toaster';
import PropTypes from 'prop-types';


const ToasterContext = createContext();

export const ToasterProvider = ({children})=>{
  const defaultValue = [
    {
      variant: 'primary',
      title: 'título 01',
      description: 'descrição 01',
    },
  ];

  const [toastList, setToastList ] = useState([]);
  const [position, setPosition] = useState('top-right');

  const addToast = (newToast) => setToastList(prev => {
    return [...prev,newToast]
  });

  const removeToast = (id) => {
    const index = toastList.findIndex(e => e.id === id);
    toastList.splice(index, 1);
    setToastList([...toastList]);
  };



  return(
    <ToasterContext.Provider value={{toastList, addToast, position, setPosition}}>
      <Toaster toastList={toastList} position={position} handleRemove={removeToast}/>
      {children}
    </ToasterContext.Provider>
  )
}

export default ToasterContext
