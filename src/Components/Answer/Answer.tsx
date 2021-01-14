import React from 'react'
import { AnswerData } from '../../Shared/Store/AnswerStore';


const Answer = (props: AnswerData) => {
      const {name, answer, is_checked } = props;
      return (
            <div>
                  <div>
                        <span>{name}</span>
                        <p>{is_checked && "✅"}</p>
                  </div>
                  <div>
                        {answer}
                  </div>
            </div>
      )
}

export default Answer
