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
  const [currentColor, setCurrentColor] = useState('#1A97F5');
  const [currentMode, setCurrentMode] = useState('dark');
  const [themeSettings, setThemeSettings] = useState(false);

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  }

  const setMode = (mode) => {
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
    setThemeSettings(false);
  }

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
    <StateContext.Provider value={{
      activeMenu,
      setActiveMenu,
      isClicked,
      handleClick,
      screenSize,
      setScreenSize,
      currentColor,
      currentMode,
      setColor,
      setMode,
      themeSettings,
      setThemeSettings,
    }}>
      {children}
    </StateContext.Provider >
  )
}

export const useStateContext = () => useContext(StateContext);

