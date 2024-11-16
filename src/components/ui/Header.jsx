import React from "react";


function Header({ name }) {
  const currentDate = new Date();
  const date = currentDate.toDateString();
  return (
    <>
      <div className="flex justify-between items-center ">
        <div className="greetings">
          <h1 className="text-3xl">Hello, {name} </h1>
          <h2 className="text-xl opacity-45">Today, {`${date}`}</h2>
        </div>
      </div>
    </>
  );
}

export default Header;
