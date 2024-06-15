import React from 'react'
import GuestImage from '../utils/GuestImage';
import QuestionContent from '../utils/QuestionContent';
import { QuestionBtn } from '@/styles/questionStyle';
import { ColorArray, ColorObject } from '../utils/questionArray';
import { useGetSuffix } from '@/hooks/useGetSuffix';
import { ReducerProps } from '@/types/Treducer';
import { useQuestionStore } from '@/store/question';

const ColorQuestion = (props : ReducerProps) => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
    const changeQuestion  = useQuestionStore.use.changeQuestion()
  return (
    <>
            <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={ColorArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e} className={`${ColorObject[idx]}`} onClick={()=>{
                    changeQuestion(2, idx)
                    props.dispatch({type : 'PLUS'})
                }}
                >{e}</QuestionBtn>
            )
        })}
        >
        <>
                    {testName}
        {useGetSuffix(testName, 3)}
        <br />
        어울리는 색은...
            </>
        </QuestionContent>
    </>
  )
}

export default ColorQuestion