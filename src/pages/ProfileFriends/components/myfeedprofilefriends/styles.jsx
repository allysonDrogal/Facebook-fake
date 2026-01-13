import styled from "styled-components";

export const MyFeedProfileContainer = styled.div`
 width: 64%;
  min-height: 100%;
  position: absolute;
  background: #e8eaec;
  left: 34%;
  top: 86%;
  margin-bottom: 20px;
`;

export const MyFeedProfileContent = styled.div`
  width: 73.5%;
  height: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: #ffffff;
`;

export const HeaderFeed = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ImgHeaderFedd = styled.img`
  width: 50px;
  height: 50px;
`;

export const TitleNameFeed = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
`;

export const TitleFeed = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 15px;
`;

export const PublishedFeed = styled.img`
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const ContainerOfLikesCommentsShares = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-bottom: #ccc 1px solid;
`;
export const ContainerOfLikes = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: #ccc 1px solid;
`;

export const ContainerOfComments = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 15px;
`;

export const HeaderFeedComments = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ImgHeaderFeddComments = styled.img`
  width: 40px;
  height: 40px;
`;

export const TitleNameFeedComments = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 15px;
  display: flex;
  align-items: center;
`;

export const CommentInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  padding: 0 40px 0 12px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #5a07f5ff;
    box-shadow: 0 0 0 2px rgba(90, 7, 245, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 50px;
`;
