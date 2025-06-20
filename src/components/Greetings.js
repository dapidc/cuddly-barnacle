import React from "react";

const Greeting = () => {
  const handleClick = () => {
    alert("Hello");
  }
  return <button onClick={handleClick}>Click</button>;
}

export default Greeting;