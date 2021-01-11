import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Move = keyframes`
    from {
      transform: translateX(10vh);
    }
    to {
      transform: translateX(0px);
    }
`;

const Positioner = styled.div`
      display: flex;
      flex-direction: row;
      width : 100%;
      height : 100vh;
      overflow: hidden;
`;

const BackgroundWrapper = styled.div`
      display : flex;
      flex : 1;
      justify-content: flex-end;
      align-items: flex-end;
    animation-name: ${FadeIn}, ${Move};
    animation-duration: 1.6s;
    animation-timing-function: ease-in;
`;

const TitleWrapper =  styled.div`
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
            font-size: 36px;
            color : #0066FF;
      }
`;
const SubTitle = styled.span`
      padding-left: 20vh;
      padding-bottom: 25vh;
`;

const MainTitle = styled.span`
      line-height: 50px;
`;

const NameTitle = styled.span`
      font-weight: bold;
`;

const StartBtnWrapper = styled.div`
      display : flex;
      padding-left: 50px;
      button {
            cursor: pointer;
            border : 3px solid #0066FF;
            padding : 20px 60px 20px 60px;
            background-color: white;
            span {
                  font-size: 19px;
                  color : #0066FF;
            }
      }
      button:hover {
            background-color: #0066FF;
            span {
                  color :white;
            }
      }
`;
export {
      Positioner, 
      BackgroundWrapper, 
      TitleWrapper, 
      MainTitle, 
      SubTitle, 
      StartBtnWrapper, 
      NameTitle
};