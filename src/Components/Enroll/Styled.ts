import styled from "styled-components"

export const Positioner = styled.div`
      display: flex;
      flex-direction: column;
      width : 100%;
      height : 100vh;
      overflow: hidden;
`;

export const EnrollFormTitleWrapper = styled.div`
      display : flex;
      justify-content: center;
      align-self: center;
      padding : 20px;
      span {
            font-size: 25px;
            color : #2E62E5;
      }
`;

export const EnrollFormWrapper  = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      div {
            padding : 10px;
      }
`;

export const EnrollFormTitleInputWrapper = styled.div`
      display : flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      span {
            width: 50%;
            color : #2E62E5;
            font-size: 25px;
      }
      input {
            border : 2px solid #2E62E5;
            padding : 8px 0 8px 0;
            width: 50%;
            font-size: 21px;
      }
`;

export const EnrollFormArticleWrapper  = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 80%;
      height: 500px;
      span {
            color : #2E62E5;
            font-size: 25px;
            width: 50%;
      }
      textarea {
            resize: none;
            width: 50%;
            height: 100%;
            border : 2px solid #2E62E5;
            font-size: 21px;
      }
`;

export const EnrollFormBtnWrapper = styled.div`
      display : flex;
      justify-content: center;
      align-items: center;
      button {
            padding : 20px 40px 20px 40px;
            background-color: white;
            border : 3px solid #2E62E5;
            border-radius: 4px;
            background-color: #2E62E5;
            color : white;
            font-size: 18px;
      }
`;