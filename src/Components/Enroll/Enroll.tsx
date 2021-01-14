import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router';
import useStore from '../../Shared/useStore';
import * as S from "./Styled";

interface Props {
      
}

const Enroll = (props: Props) => {
      const questionStore = useStore();
      const history = useHistory();
      const [title, setTitle] = useState("");
      const [article, setArticle] = useState("");
      const handleAddQuestion = () => {
            if(title && article) {
                  questionStore.Questions.addQuestion(title, article);
                  history.push("/Home");
            } else {
                  alert("모두 입력해주세요")
            }
      }
      const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if(e.target.value.length > 14) 
                  alert("제목은 14자를 넘을 수 없습니다")
            else 
                  setTitle(e.target.value)
      }
      return (
            <S.Positioner>
                  <S.EnrollFormTitleWrapper> 
                        <span>
                              궁금한 질문은 무엇인가요?
                        </span>
                  </S.EnrollFormTitleWrapper>
                  <S.EnrollFormWrapper>
                  <S.EnrollFormTitleInputWrapper>
                        <span>제목</span>
                        <input type="text" value={title} onChange={handleTitleInputChange}  />
                  </S.EnrollFormTitleInputWrapper>
                  <S.EnrollFormArticleWrapper>
                        <span>내용</span>
                        <textarea value={article} onChange={(e) => {setArticle(e.target.value)}}  />
                  </S.EnrollFormArticleWrapper>
                  </S.EnrollFormWrapper>
                  <S.EnrollFormBtnWrapper>
                        <button onClick={handleAddQuestion}>등록하기</button>
                  </S.EnrollFormBtnWrapper>
            </S.Positioner>
      )
}

export default Enroll
