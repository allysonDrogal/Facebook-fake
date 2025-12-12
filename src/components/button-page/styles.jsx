import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  padding: 0 16px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  background-color: ${props => {
    if (props.variant === "secondary") return "#e4e6eb";
    if (props.variant === "success") return "#42b72a";
    return "#1877f2";
  }};
  
  color: ${props => props.variant === "secondary" ? "#000" : "#fff"};
  
  &:hover:not(:disabled) {
    background-color: ${props => {
      if (props.variant === "secondary") return "#d8dadf";
      if (props.variant === "success") return "#36a420";
      return "#166fe5";
    }};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;