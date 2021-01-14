import React from 'react'
import { RouteComponentProps } from 'react-router';
import { QuestionData } from '../../Shared/Store/QuestionStore';
import useStore from '../../Shared/useStore';
import AnswerList from '../Answer/AnswerList';

interface DetailType {
      q_id : string
}

const DetailInfo : React.FC<QuestionData & RouteComponentProps<DetailType>> = (props) => {
      const {title, article, al_date, status, match} = props;
      return (
            <div>
                  <div>
                        <span>{title}</span>
                        <p>{al_date}</p>
                        <p>{status === 1 ? "대기":  status === 2 ?  "완료" : "삭제"}</p>
                  </div>
                  <div>
                        {article}
                  </div>
                  <div>
                        <AnswerList q_id={match.params.q_id} />
                  </div>
            </div>
      )
}

export default DetailInfo
