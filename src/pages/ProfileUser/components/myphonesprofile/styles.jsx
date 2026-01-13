import styled from "styled-components";

export const ContainerMyPhonesProfile = styled.div`
width: 92%;
height: 100%;
background: rgba(232, 234, 236);
`;


export const ContentMyPhonesProfile = styled.div`
  width: 100%;
  background: #ffff;
  margin-left: 15px;
  margin-top: 10px;
  border-radius: 3px;
`;

export const HeaderContentMyPhonesProfile = styled.div`
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

export const TagsMorePhonesProfile = styled.div`
 display: flex;
  font-size: 15px;
  font-weight: 600;
  align-items: center;
  width: 100%;
  height: 46px;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const PhonesListProfile = styled.div`
  width: auto;
  height: 82%;
  padding: 10px;
  gap: 5px;
  display: grid;
  grid-template-columns: auto auto auto;


  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    margin-right: 5px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;