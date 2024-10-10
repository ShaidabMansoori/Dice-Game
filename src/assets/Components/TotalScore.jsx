import styled from "styled-components";

const TotalScore = ({score}) => {
  return (
    <TotalScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </TotalScoreContainer>
  );
};

export default TotalScore;

const TotalScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    font-weight: 500;
    line-height: 10px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
