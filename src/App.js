import { useState } from "react";

import styled from "styled-components";

import Input from "./components/input";
import Button from "./components/button";

function App() {
  const [curNumber, setCurNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleClear = () => {
    setCurNumber("0");
    setFirstNumber("0");
  };

  const handleNumbers = (num) => {
    setCurNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSum = () => {
    if (firstNumber === "0") {
      setFirstNumber(curNumber);
      setCurNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(curNumber);
      setCurNumber(String(sum));
    }
  };

  const handleMinus = () => {
    if (firstNumber === "0") {
      setFirstNumber(curNumber);
      setCurNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(curNumber);
      setCurNumber(String(sum));
    }
  };

  const handleMult = () => {
    if (firstNumber === "0") {
      setFirstNumber(curNumber);
      setCurNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(curNumber);
      setCurNumber(String(sum));
    }
  };

  const handleDiv = () => {
    if (firstNumber === "0") {
      setFirstNumber(curNumber);
      setCurNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(curNumber);
      setCurNumber(String(sum));
    }
  };

  const handleIquals = () => {
    if (firstNumber !== "0" && operation !== "" && curNumber !== "0") {
      switch (operation) {
        case "+":
          handleSum();
          break;
        case "-":
          handleMinus();
          break;
        case "*":
          handleMult();
          break;
        case "/":
          handleDiv();
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Input value={curNumber} />
          <Row>
            <Button value={"C"} onClick={handleClear} />
            <Button value={"/"} onClick={handleDiv} />
            <Button value={"*"} onClick={handleMult} />
            <Button value={"+"} onClick={handleSum} />
          </Row>
          <Row>
            <Button value={"7"} onClick={() => handleNumbers("7")} />
            <Button value={"8"} onClick={() => handleNumbers("8")} />
            <Button value={"9"} onClick={() => handleNumbers("9")} />
            <Button value={"-"} onClick={handleMinus} />
          </Row>
          <Row>
            <Button value={"4"} onClick={() => handleNumbers("4")} />
            <Button value={"5"} onClick={() => handleNumbers("5")} />
            <Button value={"6"} onClick={() => handleNumbers("6")} />
            <Button value={"="} onClick={handleIquals} />
          </Row>
          <Row>
            <Button value={"1"} onClick={() => handleNumbers("1")} />
            <Button value={"2"} onClick={() => handleNumbers("2")} />
            <Button value={"3"} onClick={() => handleNumbers("3")} />
            <Button value={"0"} onClick={() => handleNumbers("0")} />
          </Row>
        </Content>
      </Container>
    </>
  );
}

export default App;

const Container = styled.section`
  background-color: #cacaca;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 50%;
  background-color: #ffffff;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
