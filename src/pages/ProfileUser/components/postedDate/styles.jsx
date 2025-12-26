import styled from "styled-components";

export const ContainerPostedDate = styled.div`
width: 100%;
height: 66%;
margin-top: 60px;
margin-right: 5px;
`;

export const ContentDate = styled.div`
 width: 28%;
 height: 70%;
 margin-top: 18px;
 margin-left: 20px;
 overflow-y: auto;
 direction: rtl; /* Scroll do lado esquerdo */

 /* Estilização da scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
    height: 3px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 1px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const YearItem = styled.div`
  direction: ltr; /* Restaura a direção do texto */
  padding: 5px 15px;
  cursor: pointer;
  transition: background 0.2s;
  font-weight: 500;
  color: #1c1e21;
  border-bottom: 1px solid #e4e6eb;
  
  &:hover {
    background: #f2f3f5;
  }
  
  &:active {
    background: #e4e6eb;
  }
  
  &:first-child {
    font-weight: 600;
    color: #1877f2;
  }
  `;