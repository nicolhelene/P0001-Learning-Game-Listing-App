import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/images/logo.png";
import { HiMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  }, [theme]); // Adding theme as a dependency to useEffect

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme == "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
