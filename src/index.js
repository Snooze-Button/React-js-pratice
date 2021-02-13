import React from "react";
import ReactDOM from "react-dom";
import { renderIntoDocument } from "react-dom/test-utils";
import "./index.css";

//Global var//
var city = "Madrid";
// block scope var//
let country = "Spain";

//make city an object//
let city = {
  name: "Tokyo",
  country: "Japan",
};

//Example of rendering from an object

/* ReactDOM.render(
  <h1 id="heading" className="cool-text">
    Hello from {city.country} , {city.name}
  </h1>,
  document.getElementById("root")
); */

//Component that takes in argument -> returns react element to create users interface//

//Props and Component Example//

/* function Hello({ library, message, number, nepaleseGreeting }) {
  //Display key in console from the props object
  //console.log(Object.keys(props));

  return (
    <div>
      <h1> Welcome to {library} ! </h1>
      <p className="font-size"> Lets build something {message} </p>
      <p className="font-size">{number} props in this function</p>
      <p className="font-size">{nepalese}</p>
    </div>
  );
}

function Greetings() {
  return <Hello nepaleseGreeting="Namaste"></Hello>;
}
 */

//Variable containaing List//

/* const lakeList = [
  {
    id: "1",
    lakeName: "SouthSide",
    lakeLocation: "NorthSide",
  },
  {
    id: "2",
    lakeName: "EastSide",
    lakeLocation: "WestSide",
  },
]; */

const numbers = [1, 2, 3, 4, 5];

// Rendering from a List//
// ReactDOM.render(<App items={numbers} />, document.getElementById("root"));

//CONDITIONAL RENDERING//

function Lake({ name }) {
  return (
    <div>
      <h1> Go to the Lake named {name}</h1>{" "}
    </div>
  );
}

function SkiResort({ name }) {
  return (
    <div>
      <h1> Go to Ski named {name} </h1>
    </div>
  );
}

function App(props) {
  /*    Using Map and Key Example
 <ul>
      {items.map((item) => (
        <li key={item.toString()}>{item}</li>
      ))}
    </ul>
  ); */

  if (props.season === "summer") {
    return <Lake name="Celest" />;
  } else if (props.season === "winter") {
    return <SkiResort name="Icee" />;
  }
}

ReactDOM.render(<App season="winter" />, document.getElementById("root"));
