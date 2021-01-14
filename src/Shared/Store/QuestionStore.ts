import {observable } from "mobx"

export interface QuestionData {
      id : number,
      title : string,
      article : string,
      al_date : string,
      status : number
}

interface Question {
      questions : QuestionData[];
      addQuestion : (title : string, article : string) => void;
}

const getFormatDate = (date : Date) => {
      let year : number | string = date.getFullYear();
      let month : number | string = 1 + date.getMonth();
      month = month >= 10 ? month : "0" + month;
      var day : number | string = date.getDate();
      day = day >= 10 ? day : "0" + day;
      return year + "-" + month + "-" + day;
    };
let id = 3;
export const Questions = observable<Question>({
      questions : [
            {id : 1, title : "개발하기 싫다", article : "ㅈㄷㅂㅈㄱㄷㅎㅎㄹㅎ", al_date : "2020-10-19", status : 2},
            {id : 2, title : "내가 FE 인가?", article : "ㄴㄷㄴㅇㅀㅇㅀㄴㅇㄹㅇㄴㅀㄴㅇㄹㄴㅇㅍ", al_date : "2021-01-06", status : 0}
      ],

      addQuestion(title, article) {
            this.questions.push({
                  id : id++,
                  title : title, 
                  article : article, 
                  al_date : getFormatDate(new Date(Date.now())), 
                  status : 1
            });
            console.log(this.questions)
      }
})