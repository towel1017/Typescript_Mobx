import React from 'react'
import * as S from "./Styled";
import QuestionItem from './QuestionItem';
import useStore from '../../Shared/useStore';

interface Props {
}

const QuestionList = (props: Props) => {
      const {Questions} = useStore();
      const questionList = Questions.questions.map(({title, al_date, status}, index )=> (
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
