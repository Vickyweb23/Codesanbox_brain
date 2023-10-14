import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState("Vinodhini");
  const [age, setAge] = useState(25);
  const [pair, setPair] = useState(" They are Best pair in this World");
  const handleClick = () => {
    setCount("Arivazhagan");
    setAge(27);
    setPair("They  are Got Best Lovers Award in 2023");
  };
  return (
    <div>
      <h1>
        {" "}
        {count} and age is :{age}{" "}
      </h1>
      <h2>{pair}</h2>
      <button onClick={handleClick}>button</button>
    </div>
  );
};
export default App;
