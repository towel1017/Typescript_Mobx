import React from 'react'
import * as S from "./Styled";
import {Background} from "../../img/index";
import { useHistory } from 'react-router';


interface Props {
      
}

const Main = (props: Props) => {
      const history = useHistory();
      return (
            <S.Positioner>
                  <S.TitleWrapper>
                        <S.MainTitle>
                              궁금한게 있다면
                        </S.MainTitle>
                        <S.SubTitle>
                              <S.NameTitle>
                                    PIN
                              </S.NameTitle>
                        에 물어보세요!
                        </S.SubTitle>
                        <S.StartBtnWrapper>
                              <button onClick={() => {history.push("/Home")}}><span>START</span></button>
                        </S.StartBtnWrapper>
                  </S.TitleWrapper>
                  <S.BackgroundWrapper>
                        <img src={Background} alt="background" />
                  </S.BackgroundWrapper>
            </S.Positioner>
      )
}

export default Main
