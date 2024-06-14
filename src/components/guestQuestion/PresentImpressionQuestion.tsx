import { useGetSuffix } from '@/hooks/useGetSuffix';
import React from 'react'
import QuestionContent from '../utils/QuestionContent';
import GuestImage from '../utils/GuestImage';
import { presentImpressionArray } from '../utils/questionArray';
import { QuestionBtn } from '@/styles/questionStyle';
import { ReducerProps } from '@/types/Treducer';
import { useQuestionStore } from '@/store/question';
import Router from 'next/router';

const PresentImpressionQuestion = (props : ReducerProps) => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
    const changeQuestion  = useQuestionStore.use.changeQuestion()
    // const questionArray = useQuestionStore.use.questionArray();
    // console.log(questionArray);
  return (
    <>
        <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={presentImpressionArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e} onClick={()=>{
                    changeQuestion(4, idx)
                    Router.replace("/guestLoading")
                }}>{e}</QuestionBtn>
            )
        })}
        >
        <>
        지금 내가 생각하는
          <br />
                    {testName}
        {useGetSuffix(testName, 5)}...
            </>
        </QuestionContent>
    </>
  )
}

export default PresentImpressionQuestion