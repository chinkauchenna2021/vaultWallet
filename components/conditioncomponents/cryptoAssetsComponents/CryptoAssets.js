import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CryptoAssets = ({}) => {
  return (
      <TouchableOpacity className="w-full h-20  flex justify-center items-center">
          <View className="h-fit w-[340px] flex flex-row">
              <View className="h-12 w-12 rounded-full flex justify-center items-center rounded-full">
                  <Image  source={require("../../../assets/ethereumlogo2.png")} className="h-8 w-8 " />
              </View>
              <View className="w-full  flex flex-row items-center space-x-2">
                  <View className="w-[130px] pl-2 h-fit flex justify-end flex-col">
                      <Text className="capitalize text-md font-bold text-gray-600 ">ethereum</Text>
                      <Text className="py-1 text-xs font-bold text-gray-400 uppercase">50.18008 ETH</Text>
                  </View>
                  <View className="w-[130px] h-fit flex justify-center items-end">
                                         <Text className="capitalize text-md font-bold text-gray-600 ">$60,000.07</Text>
                      <Text className="py-1 text-xs font-bold text-green-500 uppercase">15.78%</Text>
                  </View>   
              </View>

          </View>
    </TouchableOpacity>
  )
}

export default CryptoAssets