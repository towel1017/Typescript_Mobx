import React from 'react'
import * as S from "./Styled";
import QuestionList from '../Question/QuestionList'
import { useHistory } from 'react-router';

interface Props {
      
}

const Home = (props: Props) => {
      const history = useHistory();
      return (
            <S.Positioner>
                  <S.QuestionBtnWrapper>
                        <button onClick={() => history.push("/Enroll") }>질문하기</button>
                        <button>답변하기</button>
                  </S.QuestionBtnWrapper>
                  <S.QuestionListWrapper>
                        <S.QuestionListTitle>내 질문 함</S.QuestionListTitle>
                        <S.QuestionItemWrapper>
                              <S.QuestionItemTitleWrapper>
                                    <span>번호</span>
                                    <span>제목</span>
                                    <span>등록일자</span>
                                    <span>상태</span>
                              </S.QuestionItemTitleWrapper>
                              <QuestionList />
                        </S.QuestionItemWrapper>
                  </S.QuestionListWrapper>
            </S.Positioner>
      )
}

export default Home
