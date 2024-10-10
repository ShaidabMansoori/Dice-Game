import styled from "styled-components";
import { Button } from "./Button";

const StartGame = ({toggle}) => {
  return (
    <StartContainer>
      <div className="dicelogo" alt="dice_image">
        <img src="./dices 1.png" />
      </div>
      <div className="play">
        <h1>DICE GAME</h1>
        <Button
        onClick={toggle}
         className="btn1">Play Now</Button>
      </div>
    </StartContainer>
  );
};

export default StartGame;

const StartContainer = styled.div`
  max-width: 1180px;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  h1{
    font-size: 96px;
    white-space: nowrap;
    margin: 0;
  }

  .btn1 {
    float: right;
    font-weight: 600;
  }
`;

