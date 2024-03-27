import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
`;

export const WelcomeMessage = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  color: #333;
`;

export const Introduction = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
  color: #666;
`;

export const PageBox = styled.div`
  width: 80%;
  max-width: 800px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

export const PageLink = styled.a`
  display: block;
  margin-bottom: 8px;
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff; /* Example color, you can change it */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Example color on hover, you can change it */
  }
`;