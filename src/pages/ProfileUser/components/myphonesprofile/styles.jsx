import styled from "styled-components";

export const ContainerMyPhonesProfile = styled.div`
width: 100%;
height: 100%;
background: rgba(232, 234, 236);
`;


export const ContentMyPhonesProfile = styled.div`
 width: 35%;
  height: 53%;
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
  height: 15%;
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
  height: 15%;
  border-bottom: 1px solid #ddd;
  padding-left: 10px;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const PhonesListProfile = styled.div`
  width: 100%;
  height: 100%;
  display: contents;
  padding: 10px;
  overflow-y: auto;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
    cursor: pointer;
    transition: transform 0.2s;
    margin-left: 15px;

    &:hover {
      transform: scale(1.05);
    }
  }
`;