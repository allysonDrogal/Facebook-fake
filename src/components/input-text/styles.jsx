import styled from "styled-components";

export const Container = styled.div`
 margin: 10px;
`;

export const Input = styled.input`
 width: 100%;
  height: 40px;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #1877f2;
  }
  
  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;