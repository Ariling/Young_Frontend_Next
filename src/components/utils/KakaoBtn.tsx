import React from 'react'
import Kakao from "@/svg/kakaologin.svg"
import { getLogin } from '@/apis/host';


const KakaoBtn = () => {
    const code = "헤헷"
    const startKakao = async () => {
        //카카오 로그인 여기에 구현
        try {
          // console.log('start');
          const data = await getLogin(code);
          // console.log(data);
        } catch (error) {
          console.error("Login failed:", error);
          // navigate('/hostLoading');
        }
      };
  return (
    <Kakao className='z-10'
    onClick={startKakao}/>
  )
}

export default KakaoBtn