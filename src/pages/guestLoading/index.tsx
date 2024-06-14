import LoadingCompo from '@/components/utils/LoadingCompo'
import { useLoadingTime } from '@/hooks/useLoadingTime'
import { Text } from '@/styles/questionStyle'
import Router from 'next/router'
import React, { useEffect } from 'react'

const Index = () => {
    const loading = useLoadingTime(3000);
    useEffect(() => {
        if (loading) {
          Router.replace("/guestResult");
        }
      }, [loading]);
  return (
    <LoadingCompo>
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <Text>밍글이가</Text>
          <Text>생각하는</Text>
          <Text>루씨</Text>
          <Text>만드는 중</Text>
        </div>
    </LoadingCompo>
  )
}

export default Index