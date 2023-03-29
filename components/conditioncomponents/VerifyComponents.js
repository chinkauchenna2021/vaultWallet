import { View, Text , Pressable } from 'react-native'
import React from 'react'

const VerifyComponents = ({word , wordPressed}) => {
  return (
      <Pressable onPress={()=>wordPressed(word)} className="lowercase  m-2 flex flex-row border w-fit h-fit border-opacity-10 border-slate-200 rounded-lg p-1">
          <Text className="font-bold text-slate-500">{word}</Text>
    </Pressable>
  )
}

export default VerifyComponents