import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  Notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }
  return (
    <StateContext.Provider value={{ test: 'test', activeMenu, setActiveMenu, isClicked, handleClick }}>
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);

