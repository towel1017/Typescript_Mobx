import React from 'react'
import * as S from "./Styled";
import {data} from "./dummy.json";
import QuestionItem from './QuestionItem';

interface Props {
}

const QuestionList = (props: Props) => {
      const questionList = data.map(({title, al_date, status}, index )=> (
            <QuestionItem 
                  id={index + 1}
                  title={title} 
                  al_date={al_date} 
                  status={status} 
                  key={index} 
             />
      ))
      return (
            <S.QuestionListDetailWrapper>
                  {questionList}
            </S.QuestionListDetailWrapper>
      )
}

export default QuestionList
