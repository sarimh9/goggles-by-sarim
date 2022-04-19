import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar(props) {
  const mystyle = {
    margin: "0px",
    marginRight: "30px",
    marginTop: "20px",
    marginLeft: "-25px",
  };

  return (
    <div
      className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center 
            items-center border-b dark:border-gray-700 border-gray-200"
    >
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p
            className="sm:text-xl text-lg bg-blue-500 text-white font-bold p-1 rounded-lg 
              dark:bg-gray-500 dark:text-gray-900"
          >
            Goggles🔍
          </p>
        </Link>
        <Search />
        <button
          className="sm:text-xl text-sm dark:bg-gray-50 dark:text-gray-900 bg-white
             border rounded-full hover:shadow-lg sm:w-24 w-20 px-2 py-1 ml-0"
          style={mystyle}
          type="button"
          onClick={() => {
            props.setDarkTheme(!props.darkTheme);
          }}
        >
          {props.darkTheme ? "Light💡" : "Dark🌙"}
        </button>
      </div>
    </div>
  );
}
