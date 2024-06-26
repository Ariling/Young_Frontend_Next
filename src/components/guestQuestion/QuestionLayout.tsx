import React, { useReducer } from 'react'
import FaceQuestion from './FaceQuestion';
import EmojiQuestion from './EmojiQuestion';
import ColorQuestion from './ColorQuestion';
import FirstImpressionQuestion from './FirstImpressionQuestion';
import PresentImpressionQuestion from './PresentImpressionQuestion';

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
    const [num, dispatch] = useReducer(reducer, 1);
    const getComponent = (num : number) => {
        if (num === 1) return <FaceQuestion state={num} dispatch={dispatch}/>;
        if (num === 2) return <EmojiQuestion state={num} dispatch={dispatch}/>;
        if (num === 3) return <ColorQuestion state={num} dispatch={dispatch} />;
        if (num === 4) return <FirstImpressionQuestion state={num} dispatch={dispatch} />;

        return <PresentImpressionQuestion state={num} dispatch={dispatch} />;
    }
  return (
    <main className='bg--layout flex flex-col items-center justify-center p-7'>
        
        {getComponent(num)}
    </main>
  )
}

export default QuestionLayout