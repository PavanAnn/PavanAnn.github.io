import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vh;
  border: 1px solid red;
`;

export const AnimeContainer = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  border: 4px solid blue;
  gap: 200px;
`;


export const WelcomeMessage = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

export const AuthButton = styled.button`
margin: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;