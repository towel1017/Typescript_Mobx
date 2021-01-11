import React from 'react'

interface Props {
      id : number,
      title : string,
      al_date : string,
      status : number
}

const QuestionItem = (props: Props) => {
      const { id, title ,al_date, status} = props;
      return (
            <div>
                  <span>{id}</span>
                  <span>{title}</span>
                  <span>{al_date}</span>
                  <span>{status === 1 ? "대기":  status === 2 ?  "수락" : "거절"}</span>
            </div>
      )
}

export default QuestionItem
