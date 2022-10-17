import React, { createContext, useContext, useState, useEffect } from 'react'

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  Notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true })
  }
  /* const currentColor: 'orange-theme', */
  const [currentColor, setcurrentColor] = useState('#1A97F5');
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  useEffect(() => {
    if (screen <= 900) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize])
  return (
    <StateContext.Provider value={{ screenSize, setScreenSize, test: 'test', activeMenu, setActiveMenu, isClicked, handleClick, currentColor }}>
      {children}
    </StateContext.Provider >
  )
}

export const useStateContext = () => useContext(StateContext);

