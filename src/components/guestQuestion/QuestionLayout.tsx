import React, { useReducer } from 'react'

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
  return (
    <main className='bg--layout flex flex-col items-center justify-center p-7'>
        안녕
    </main>
  )
}

export default QuestionLayout