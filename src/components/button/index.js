import styled from "styled-components";

export default function Button({ value, onClick }) {
  return <ButtonContent onClick={onClick}>{value}</ButtonContent>;
}

const ButtonContent = styled.button`
  width: 3rem;
  height: 3rem;
  border: unset;
  flex: 1;
  border: 1px solid #cdcdcd;
  background-color: #00aaf0;
  font-weight: 700;
  font-size: 1rem;
  transition: all ease 0.5s;

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
