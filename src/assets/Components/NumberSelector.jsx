import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  let myArr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberContainer>
      <span>{error}</span>
      <div className="numbers">
        {myArr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            onClick={() => numberSelectorHandler(value)}
            key={i}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};
export default NumberSelector;

const NumberContainer = styled.div`
  span {
    color: red;
    font-size: 24px;
    font-weight: 500;
    margin-left: 200px;
  }

  .numbers {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    float: right;
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
