import { View, Text } from 'react-native'
import React from 'react'

const TermsSection = ({title , subTitle}) => {
  return (
    <View className="my-3 flex flex-col px-4 text-left">
          <Text className="text-2xl font-semibold">{title}</Text>
          <Text className="text-md font-normal">{subTitle}</Text>
    </View>
  )
}

export default TermsSection
