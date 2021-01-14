import { observable } from "mobx";

export interface AnswerData {
      id:  number,
      question_id : number,
      name : string,
      answer : string,
      is_checked  : boolean
}

interface Answer {
      answers : AnswerData[]
      addAnswer : (q_id : number, answer : string) => void
}
let id : number = 5;
export const Answers = observable<Answer>({
      answers : [
            {id : 1, question_id : 1, name :"김철수", answer : "하지마 그럼", is_checked : false} ,
            {id : 2, question_id : 1, name :"김영희",answer : "그래도 해", is_checked : true} ,
            {id : 3, question_id : 2, name :"김철수", answer : "그럼 뭔데", is_checked : false} ,
            {id : 4, question_id : 2, name :"김영희", answer : "열심히 해", is_checked : true} ,
      ],
      
      addAnswer(q_id, answer) {
            this.answers.push({
                  id : id++,
                  question_id : q_id,
                  name :"김철수",
                  answer : answer,
                  is_checked : false
            })
      }
})

