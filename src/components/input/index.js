import styled from "styled-components";

export default function Input({ value }) {
  return (
    <>
      <InputContent>
        <input disabled value={value} />
      </InputContent>
    </>
  );
}

const InputContent = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #fff;

  input {
    width: 100%;
    height: 100%;
    border: unset;
    font-size: 1.2rem;
  }
`;
