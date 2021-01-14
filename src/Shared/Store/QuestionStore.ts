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

const getFormatDate = (date : Date) => {
      let year : number | string = date.getFullYear();
      let month : number | string = 1 + date.getMonth();
      month = month >= 10 ? month : "0" + month;
      var day : number | string = date.getDate();
      day = day >= 10 ? day : "0" + day;
      return year + "-" + month + "-" + day;
    };

export const Questions = observable<Question>({
      questions : [
            {title : "개발하기 싫다", article : "ㅈㄷㅂㅈㄱㄷㅎㅎㄹㅎ", al_date : "2020-10-19", status : 2},],

      addQuestion(title, article) {
            this.questions.push({
                  title : title, 
                  article : article, 
                  al_date : getFormatDate(new Date(Date.now())), 
                  status : 1
            });
            console.log(this.questions)
      }
})