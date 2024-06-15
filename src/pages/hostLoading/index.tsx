import LoadingCompo from '@/components/utils/LoadingCompo';
import { useLoadingTime } from '@/hooks/useLoadingTime';
import { Text } from '@/styles/questionStyle';
import Router from 'next/router'
import React, { useEffect } from 'react'

const Index = () => {
    const loading = useLoadingTime(3000);
    useEffect(() => {
        if (loading) {
          Router.replace("/hostResult")
        }
      }, [loading]);
  return (
    <LoadingCompo>
    <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
    <Text>내 공간 생성 완료!</Text>
    </div>
</LoadingCompo>
  )
}

export default Index