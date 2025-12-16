import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  //display: flex;
  justify-content: center;
  background: #e8eaec;
`;

export const ProfileBanner = styled.div`
  background: gray;
  width: 98%;
  height: 70%;
  display: flex;
  align-items: end; 
  background-image: url(${props => props.bannerUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  margin-left: 15px;
`;

export const ProfileImage = styled.img`
  width: 15%;
  height: 35%;
  position: absolute;
  top: 60%;
  margin-left: 25px;
  border: #e8eaec 3px solid;
`;

export const ProfileName = styled.h1`
position: absolute;
top: 80%;
left: 19%;
color: aliceblue;
`;

export const FollowOrMessage = styled.div`
position: absolute;
top: 81%;
left: 80%;
color: black;
display: flex;
width: 18%;
`;

export const ButtonFollow = styled.button`
 border: black 1px solid;
 height: 25px;
 width: 30%;
 border-radius: 3px 2px 2px 3px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #2e252c;
 margin-right: 10px;
 font-weight: 600;
 
`;

export const ContainerFollowers = styled.div`
 width: 98%;
 height: 13%;
 background: #ffff;
 margin-left: 15px;
 margin-top: 10px;
 border-radius: 3px;
 display: flex;
 justify-content: space-between;
`;

export const ContainerAbout = styled.div`
 width: 35%;
 height: 38%;
 background: #ffff;
 margin-left: 15px;
 margin-top: 10px;
 border-radius: 3px;

 `;


export const ImageFollowers = styled.img`
width: 30px;
height: 30px;
border: solid wheat 1px;
`;