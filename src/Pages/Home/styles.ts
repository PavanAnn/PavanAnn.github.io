import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';
import { FormGroup, Checkbox, Typography } from '@mui/material';

export const Container = styled.div`
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 80%;
`;

export const WelcomeMessage = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
`;

export const AuthButton = styled.button`
  margin: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #010001 !important;
  cursor: pointer;
  font-size: 16px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FFFFFF;
  }
`;

export const AnimeContainer = styled.div`
  gap: 100px;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const ImgContainer = styled.div`
  border: 3px solid #fafafb;
  border-style: dotted;
  padding: 30px;
  background-color: #010001;
`;

export const AnimeImage = styled.img`
  width: 300px;
  height: auto;
  filter: blur(10px);
  user-drag: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
`;

export const CheckboxGroup = styled(FormGroup)`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
  margin-top: 20px;
  min-width: 40px;
`;

export const CheckGrid = styled.div`
  cursor: pointer;
  display: flex;
  align-items: start;
  min-width: 100%;
  border: 2px solid #fafafb;
`;


export const CustomCheckbox = styled(Checkbox)`

margin-left: 20px;

  & .MuiSvgIcon-root {
    font-size: 40px;
    color: #fafafb;
  }

  &.Mui-checked {
    color:#010001; 
  }

  & svg {
    fill: #fafafb;
  }
`;

export const ResultMessage = styled(Typography)`
  margin-top: 20px;
`;

export const LoadingSpinner = styled(CircularProgress)`
  margin-top: 60px;
`;
