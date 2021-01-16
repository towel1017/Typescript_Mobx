import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router';
import { QuestionData } from '../../Shared/Store/QuestionStore';
import useStore from '../../Shared/useStore';
import AnswerList from '../Answer/AnswerList';

interface DetailType {
      q_id : string
}

const DetailInfo : React.FC<RouteComponentProps<DetailType>> = ({match}) => {
      const {Questions} = useStore()
      const selectItem = Questions.questions.filter(item => item.id === parseInt(match.params.q_id))
      console.log(match.params.q_id, selectItem)
      const {title, article, al_date, status} = selectItem[0]
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

export default withRouter(DetailInfo)
