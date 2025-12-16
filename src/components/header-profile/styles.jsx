import styled from "styled-components";

export const ProfileHeader = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: #f3f3f3 1px solid;
    background: #ffffff;
`;

export const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  border: #f3f3f3 1px solid;
  border-top: 0;
  border-bottom: 0;
  height: 100%;
  display: flex;
  align-items: center;
  color: #000000;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;