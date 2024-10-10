import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button } from "./Button";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roledice = () => {
    if (!selectedNumber) {
      setError("you have to select a number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === currentDice) {
      setScore((prev) => prev + currentDice);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <GameContainer>
      <div className="topcontainer">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roledice={roledice} />

      <div className="btns">
        <p>Click to Role Dice</p>
        <Button onClick={resetScore}>Reset Score</Button>
        <Button>Show Rules</Button>
      </div>
    </GameContainer>
  );
};

export default GamePlay;

const GameContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  .topcontainer {
    display: flex;
    justify-content: space-between;
  }
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
