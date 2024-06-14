import React from 'react'
import GuestImage from '../utils/GuestImage'
import { ContentBox, QuestionBtn } from '@/styles/questionStyle';
import { useGetSuffix } from '@/hooks/useGetSuffix';
import { FaceArray } from '../utils/questionArray';

const FaceQuestion = () => {
    const testSrc = 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_1280.jpg';
    const testName = "루씨"
  return (
    <>
        <GuestImage src={testSrc}/>
        <ContentBox>
            <div className='mt-2 font-Neo font-bold text-[20px] text-center'>
            {testName}
          {useGetSuffix(testName)}
          <br />
          00상이야!{" "}
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {FaceArray.map((e, idx)=>{
                    return(
                        <QuestionBtn key={e}>{e}</QuestionBtn>
                    )
            })}
            </div>
        </ContentBox>
    </>
  )
}

export default FaceQuestion