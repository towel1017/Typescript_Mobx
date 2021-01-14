import React from 'react'
import useStore from '../../Shared/useStore'
import Answer from './Answer';

interface AnswerType {
      q_id : string
}

const AnswerList : React.FC<AnswerType> = ({q_id}) => {
      const {Answers} = useStore();
      const answerList = Answers.answers
      .filter(item => item.question_id === parseInt(q_id))
      .map(({id, question_id, name, answer, is_checked}) => (
            <Answer
                  key={id}
                  id={id} 
                  question_id={question_id} 
                  name={name} 
                  answer={answer} 
                  is_checked={is_checked} 
            />
      ))
      return (
            <div>
                  {answerList}
            </div>
      )
}

export default AnswerList
