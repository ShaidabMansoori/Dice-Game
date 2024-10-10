import styled from "styled-components";

const RollDice = ({ currentDice, roledice }) => {
  return (
    <DiceContainer>
      <div onClick={roledice}>
        <img src={`./dice_${currentDice}.png`} alt="dice image" />
      </div>

      
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
  }

  
`;
