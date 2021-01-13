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
            questionStore.Questions.addQuestion(title, article);
            setTitle("")
            setArticle("")
            console.log(questionStore.Questions.questions)
            history.push("/Home");
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
                        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}  />
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
