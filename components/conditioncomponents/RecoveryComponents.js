import { View, Text } from 'react-native'
import React from 'react'

const RecoveryComponents = ({id , word}) => {
  return (
      <View className="lowercase  m-2 flex flex-row border w-fit h-fit border-opacity-25 border-slate-200 rounded-lg p-1">
          <Text className="px-1 text-opacity-40 font-bold text-slate-300">{id}</Text>
          <Text className="font-bold text-slate-500">{word}</Text>
    </View>
  )
}

export default RecoveryComponents