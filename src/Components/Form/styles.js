import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: 98%; 
  margin: 20px auto;
  background-color: #ffff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around; //espaco entre os itens
  padding: 15px 0px;
  gap: 20px;
  //para uma resolução menor que 750 pixeis display grid
  @media (max-width: 750px){
    display: grid;
  }

`;
//campo de entrada de dados
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
`;



