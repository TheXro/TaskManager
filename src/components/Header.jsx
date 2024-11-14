import React from "react";
import Sort from "./Sort";

function Header({ name }) {
  const currentDate = new Date();
  const date = currentDate.toDateString();
  // console.log(date);
  return (
    <>
      <div className="flex justify-between pr-20 items-center">
        <div className="greetings">
          <h1 className="text-3xl">Hello, {name} </h1>
          <h2 className="text-xl opacity-45">Today, {`${date}`}</h2>
        </div>
        <Sort />
      </div>
    </>
  );
}

export default Header;
