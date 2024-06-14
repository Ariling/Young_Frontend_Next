import React from 'react'
import GuestImage from '../utils/GuestImage';
import QuestionContent from '../utils/QuestionContent';
import { QuestionBtn } from '@/styles/questionStyle';
import { ColorArray } from '../utils/questionArray';
import { useGetSuffix } from '@/hooks/useGetSuffix';

const ColorQuestion = () => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
  return (
    <>
            <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={ColorArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e} >{e}</QuestionBtn>
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