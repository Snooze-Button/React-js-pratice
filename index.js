import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import "./index.css";

//Array Destructuring Example Below

const snacks = ["popcorn", "pizza bytes", "corn on the cob"];

//accessing values via index
console.log(snacks[1]);
console.log(snacks[2]);
console.log(snacks[0]);

const [first, second, third] = ["popcorn", "pizza bytes", "corn on the cob"];

//accessing values via variables
console.log(first);
console.log(second);
console.log(third);

//useState hooks example
function App() {
  //"let" dont work change to "const"
  const [status, setStatus] = useState("Open");
  const [year, setYear] = useState(2010);
  const [anime, setAnime] = useState("Anime Name");

  const animeName = ["Crow Zero", "Air Gear", "Kuroko no Basket", "SAO"];

  return (
    <>
      <h1> Year: {year} </h1>
      <button onClick={() => setYear(year + 1)}>Year</button>

      <h1>Anime Name: {anime}</h1>
      <button onClick={() => setAnime(animeName[1])}>Anime</button>

      <div>
        <h1> Status: {status} </h1>;
        <button onClick={() => setStatus("Closed")}>Closed</button>
        <button onClick={() => setStatus("Be Right Back")}>Break</button>
        <button onClick={() => setStatus("Open")}>Open</button>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

//CheckBox Example
function Checkbox() {
  const [checked, setChecked] = useState(true);

  //useEffect hook example
  useEffect(() => {
    alert(`checked: ${checked.toString()}`);
  });

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onClick={() => setChecked((checked) => !checked)}
      />
      {checked ? "checked" : "unchecked"}
    </>
  );
}

ReactDOM.render(<Checkbox />, document.getElementById("root"));
