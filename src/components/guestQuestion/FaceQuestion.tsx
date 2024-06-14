import React from 'react'
import GuestImage from '../utils/GuestImage'
import { QuestionBtn } from '@/styles/questionStyle';
import { useGetSuffix } from '@/hooks/useGetSuffix';
import { FaceArray } from '../utils/questionArray';
import QuestionContent from '../utils/QuestionContent';

const FaceQuestion = () => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
  return (
    <>
        <GuestImage src={testSrc}/>
        <QuestionContent 
        children2={FaceArray.map((e, idx)=>{
            return(
                <QuestionBtn key={e}>{e}</QuestionBtn>
            )
        })}
        >
        <>
                    {testName}
        {useGetSuffix(testName, 1)}
          <br />
          00상이야!{" "}
            </>
        </QuestionContent>
    </>
  )
}

export default FaceQuestion