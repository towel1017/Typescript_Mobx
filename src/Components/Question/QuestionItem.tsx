import React from 'react'
import { useHistory } from 'react-router';

interface Props {
      id : number,
      title : string,
      al_date : string,
      status : number
}

const QuestionItem = (props: Props) => {
      const { id, title ,al_date, status} = props;
      const history = useHistory();
      return (
            <div onClick={() => {history.push(`/Details/${id}`)}}>
                  <span>{id}</span>
                  <span>{title}</span>
                  <span>{al_date}</span>
                  <span>{status === 1 ? "대기":  status === 2 ?  "완료" : "삭제"}</span>
            </div>
      )
}

export default QuestionItem
