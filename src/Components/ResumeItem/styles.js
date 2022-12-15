import styled from "styled-components";
export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffff;
  border-radius:5px;
  padding: 5px 15px;
  widt:30%;
  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
    svg {
      display: none;
    }
  }

`;
//header do card
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;
  svg {             //icons
    width: 25px;
    height: 25px;
  }
`;
//paragrafo
export const HeaderTitle = styled.p`
  font-size: 20px;
`;
//span que apresenta o campo total do clotrole financeiro
export const Total = styled.span`
  font-size: 30px;
  font-weight:bold;
  `;