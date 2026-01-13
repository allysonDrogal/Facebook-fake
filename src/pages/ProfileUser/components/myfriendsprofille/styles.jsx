import styled from "styled-components";

export const ContainerMyFriendsProfile = styled.div`
width: 92%;
height: 100%;
background: rgba(232, 234, 236);
`;


export const ContentMyFriendsProfile = styled.div`
  width: 100%;
  background: #ffff;
  margin-left: 15px;
  margin-top: 10px;
  border-radius: 3px;
`;

export const HeaderContentMyFriendsProfile = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: 600;
  align-items: center;
  background: #f5f7f9;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  color: #808080;
`;

export const FriendsListProfile = styled.div`
 width: 100%;
  height: 82%;
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 5px;
`;

export const FriendCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const FriendName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  padding: 8px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
`;