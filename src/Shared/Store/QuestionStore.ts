import {observable } from "mobx"

export interface QuestionData {
      title : string,
      article : string,
      al_date : string,
      status : number
}

interface Question {
      questions : QuestionData[];
      addQuestion : (title : string, article : string) => void;
}

export const Questions = observable<Question>({
      questions : [
            {title : "개발하기 싫다", article : "ㅈㄷㅂㅈㄱㄷㅎㅎㄹㅎ", al_date : "2020-10-19", status : 2},],

      addQuestion(title, article) {
            this.questions.push( {
                  title : title, 
                  article : article, 
                  al_date : "2021-01-02", 
                  status : 0
            });
            console.log(this.questions)
      }
})