import styled from "styled-components";

export const FormInput = styled.form `
  width: 100%;
  max-width: 720px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;

  input {
    width: 80%;
    height: 50px;
    outline: none;
    border: none;
    padding: 16px;
    font-size: 16px;
    color: #ccc;
    border-radius: 5px;
  }

  button {
    width: 20%;
    height: 50px;
    background-color: #07101a;
    color: white;
    font-size: 14px;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
    transition: all.2s ease-in-out;

    &:hover {
      background-color: #00104f;
    }
  }
`