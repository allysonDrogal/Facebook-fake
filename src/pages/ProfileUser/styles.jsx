import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  //display: flex;
  justify-content: center;
  background: #e8eaec;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const ContentProfileUser = styled.div`
  width: 80%;
  height: 100%;
  //display: flex;
  justify-content: center;
  background: #e8eaec;
  position: relative;
`;

export const ProfileBannerUser = styled.div`
  background: gray;
  width: 98%;
  height: 70%;
  display: flex;
  align-items: end; 
  position: relative;
  margin-left: 15px;
  overflow: hidden;
`;

export const BannerVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
  object-fit: cover;
  z-index: 0;
`;

export const ProfileImageUser = styled.img`
  width: 15%;
  height: 35%;
  position: absolute;
  top: 60%;
  margin-left: 25px;
  border: #e8eaec 3px solid;
`;

export const ProfileNameUser = styled.h1`
position: absolute;
top: 80%;
left: 19%;
color: aliceblue;
`;

export const FollowOrMessageUser = styled.div`
position: absolute;
top: 81%;
left: 67%;
color: black;
display: flex;
width: 40%;
`;

export const ButtonFollowUser = styled.button`
 border: black 1px solid;
 height: 25px;
 width: 32%;
 border-radius: 3px 2px 2px 3px;
 display: flex;
 align-items: center;
 justify-content: center;
 color: #2e252c;
 margin-right: 10px;
 font-weight: 600;
 
`;

export const ContainerFollowersUser = styled.div`
 width: 98%;
 height: 13%;
 background: #ffff;
 margin-left: 15px;
 margin-top: 10px;
 border-radius: 3px;
 display: flex;
 justify-content: space-between;
`;

export const ContainerAboutUser = styled.div`
 width: 35%;
 height: 38%;
 background: #ffff;
 margin-left: 15px;
 margin-top: 10px;
 border-radius: 3px;

 `;


export const ImageFollowersUser = styled.img`
width: 30px;
height: 30px;
border: solid wheat 1px;
`;

export const ContainerSponsoredUser = styled.div`
  width: 22%;
  height: 100%;
`;

