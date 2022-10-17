import React, { useEffect } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from '../context/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter" >
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className={`relative text-xl rounded-full p-3 hover:bg-light-gray`}
      >
        <span
          style={{ background: dotColor }}
          className={`absolute inline-flex rounded-full h-2 w-2 right-2 top-2`}
        />
        {icon}
      </button>
    </TooltipComponent>
  )
}

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClick, currentColor, screenSize } = useStateContext();
  return (
    <div
      className="flex justify-between p-2 md:mx-6 relative"
    >
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <NavButton
        title="Cart"
        customFunc={() => handleClickNavbar('cart')}
        color={currentColor}
        icon={<FiShoppingCart />}
      />
      <NavButton
        title="Chat"
        dotColor="#03c9D7"
        customFunc={() => handleClickNavbar('chat')}
        color={currentColor}
        icon={<BsChatLeft />}
      />
      <NavButton
        title="Notifications"
        dotColor="#03c9D7"
        customFunc={() => handleClickNavbar('notification')}
        color={currentColor}
        icon={<RiNotification3Line />}
      />
      <TooltipComponent
        content="Profile"
        position="BottomCenter"
      >
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick('userProfile')}
        >
          <img src={avatar} className="rounded-full w-8 h-8" />
          <p>
            <span>Hi, </span> {" "}
            <span className="text-gray-400 text-14 font-bold ml-1">Cristian </span>
          </p>
          <MdKeyboardArrowDown />
        </div>
      </TooltipComponent>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Cart />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </div>
  )
}

export default Navbar
