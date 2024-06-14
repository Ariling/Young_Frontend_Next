import React from 'react'
import GuestImage from '../utils/GuestImage';
import QuestionContent from '../utils/QuestionContent';
import { EmojiArray } from '../utils/questionArray';
import { QuestionBtn } from '@/styles/questionStyle';
import { useGetSuffix } from '@/hooks/useGetSuffix';
import { ReducerProps } from '@/types/Treducer';
import { useQuestionStore } from '@/store/question';

const EmojiQuestion = (props : ReducerProps) => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
    const changeQuestion  = useQuestionStore.use.changeQuestion()
  return (
    <>
            <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={EmojiArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e} onClick={()=>{
                    changeQuestion(1, idx)
                    props.dispatch({type : 'PLUS'})
                }}>{e}</QuestionBtn>
            )
        })}
        >
        <>
                    {testName}
        {useGetSuffix(testName, 2)}
        <br />
          이모지라면
            </>
        </QuestionContent>
    </>
  )
}

export default EmojiQuestion