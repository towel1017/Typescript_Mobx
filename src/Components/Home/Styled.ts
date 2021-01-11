import styled from "styled-components"


export const Positioner = styled.div`
      display: flex;
      flex-direction: column;
      width : 100%;
      height : 100vh;
      overflow: hidden;
`;

export const QuestionBtnWrapper = styled.div`
      display : flex;
      flex-direction: row;
      justify-content: center;
      height: 300px;
      button {
            cursor: pointer;
            width : 160px;
            height: 70px;
            background-color: white;
            margin : 30px;
            border : 3px solid #2E62E5;
            font-size: 18px;
            color : #2E62E5; 
 }
 button:hover {
      background-color: #2E62E5;
      color : white;
}
`;

export const QuestionListWrapper = styled.div`
      display : flex;
      height: 600px;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
`;
export const QuestionListTitle = styled.div`
      font-size: 24px;
      color : #2E62E5;
`;

export const QuestionItemWrapper = styled.div`
      width : 1000px;
      height: 500px;
      overflow-y: auto;
`;

export const QuestionItemTitleWrapper = styled.div`
      display : flex;
      justify-content: space-around;
      border-bottom: 2px solid #2E62E5;
      padding : 8px;
      span {
            font-size : 21px;
            color : #2E62EF
      }
`;

