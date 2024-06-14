import React, { useReducer } from 'react'
import FaceQuestion from './FaceQuestion';
import EmojiQuestion from './EmojiQuestion';

type Action = {type : 'PLUS'} | {type : 'MINUS'};

export function reducer(state : number, action :Action ){
    switch (action.type){
        case 'PLUS':
            return state+1;
        case 'MINUS':
            if(state === 1){
                return state;
            }else{
                return state-1;
            }
        default : return state;
    }
}

const QuestionLayout = () => {
    const [num, dispatch] = useReducer(reducer, 2);
  return (
    <main className='bg--layout flex flex-col items-center justify-center p-7'>
        {num === 1 ? <FaceQuestion /> : <EmojiQuestion />}
    </main>
  )
}

export default QuestionLayout