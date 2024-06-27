import React from "react";
import './App.css';
import Name from "./composants/Name";
import Price from "./composants/Price";
import Description from "./composants/Description";
import Image from "./composants/Image";
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  const Prenom = "PAPE";

  return (
    <div className="App">
      
            <Image />
            <Name />
            <Price />
            <Description />
          
      <div className="greeting">
        {Prenom ? (
          <p>Bonjour, {Prenom}!</p>
        ) : (
          <p>Bonjour, là !</p>
        )}
      </div>
    </div>
  );
};

export default App;


