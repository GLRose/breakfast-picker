import styled from "styled-components";


export const Course = styled.h1`
  color: pink;
  display: flex;
  justify-content: center;
  font-family: 'Edu TAS Beginner', cursive;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 650px;
  border: 10px solid #a5d5d5;
  border-radius: 20px;
`;

export const Select = styled.select`
background-color: pink;
border-style: none;
color: black;
font-family: 'Edu TAS Beginner', cursive;
cursor: pointer;
flex-shrink: 0;
font-size: 17px;
font-weight: 500;
height: 3rem;
border: 3px solid  #a5d5d5;
border-radius: 10px;
`;

export const Small = styled.div`
  display: flex;
  justify-content: left;
  padding: 10px;
`;

export const Button = styled.button`
background-color: pink;
border-style: none;
border: 3px solid  #a5d5d5;
color: black;
font-family: 'Edu TAS Beginner', cursive;
cursor: pointer;
flex-shrink: 0;
font-size: 17px;
font-weight: 500;
height: 3rem;
text-align: center;
border-radius: 10px;
margin: 2px;
`;

export const BlackHeaders = styled.h1`
background-color: #a5d5d5;
color: black;
font-family: 'Edu TAS Beginner', cursive;
border-radius: 5px;
margin: 0 auto 0 auto;
width: 145px;
height: 36px;
margin-bottom: 10px;
text-align: center;
font-size: 26px;
`;
