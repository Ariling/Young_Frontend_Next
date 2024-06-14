import React from 'react'
import GuestImage from '../utils/GuestImage';
import QuestionContent from '../utils/QuestionContent';
import { firstImpressionArray } from '../utils/questionArray';
import { QuestionBtn } from '@/styles/questionStyle';
import { useGetSuffix } from '@/hooks/useGetSuffix';
import { useQuestionStore } from '@/store/question';
import { ReducerProps } from '@/types/Treducer';

const FirstImpressionQuestion = (props : ReducerProps) => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
    const changeQuestion  = useQuestionStore.use.changeQuestion()
  return (
    <>
            <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={firstImpressionArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e} onClick={()=>{
                    changeQuestion(3, idx)
                    props.dispatch({type : 'PLUS'})
                }}>{e}</QuestionBtn>
            )
        })}
        >
        <>
                    {testName}
        {useGetSuffix(testName, 4)}
        <br />
        처음 봤을 때
            </>
        </QuestionContent>
    </>
  )
}

export default FirstImpressionQuestion