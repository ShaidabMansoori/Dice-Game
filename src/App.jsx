import React, { useState } from "react";
import GamePlay from "./assets/Components/GamePlay";
import StartGame from "./assets/Components/StartGame";

const App = () => {
  const [isGameLoggedIn, setIsGameLoggedIn] = useState(false);

  const togglefunction = () => {
    setIsGameLoggedIn((prev) => !prev);
  };

  return (
    <>{isGameLoggedIn ? <GamePlay /> : <StartGame toggle={togglefunction} />}</>
  );
};

export default App;
