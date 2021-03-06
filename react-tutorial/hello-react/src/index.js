import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Lake( {name} ){
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function SkiResort( {name} ) {
  return (
    <div>
      <h1>Visit {name}!</h1>
    </div>
  );
}

function App(props) {
  // if (props.season === "summer") {
  //   return <Lake name="this lake"/>;
  // } else if (props.season === "winter") {
  //   return <SkiResort name="JHMR" />
  // }
  return (
    <div>
      {(props.season === "summer") ? 
      (<Lake name="this lake"/>) :
      (props.season === "winter") ? 
      (<SkiResort name="JHMR" />) :
      <h1>
        Come back in the winter or summer!
      </h1>
      }
    </div>
  );
}

ReactDOM.render(
  <App season={"summer"}/>,
  document.getElementById("root")
);