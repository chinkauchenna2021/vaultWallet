import { View, Text , Image , TouchableOpacity } from 'react-native'
import React from 'react'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const NFTComponents = () => {
  return (
    <View className="w-3/6 h-[310px] px-2 shadow shadow-slate-300 mt-8 ">
      <View className="w-full h-[200px]  object-fit ">
        <Image source={{uri:"https://i.seadn.io/gcs/files/810cde16a75b659fc051b0805e5eeb74.jpg?auto=format&w=0"}} className="w-full h-full rounded-t-xl " />
      </View>
      <View className="w-full">
        <View className="w-full flex flex-col justify-between pt-1 ">
          <Text className="text-slate-700 font-bold text-lg p-1">NftPunk #27</Text>
           <Text className="uppercase text-slate-600 text-sm p-1 font-semibold ">0.027 ETH</Text> 
        </View> 
       <TouchableOpacity className="  mt-2 h-11 w-full flex justify-center items-center rounded-2xl bg-amber-400"><Text className="w-fit h-fit text-md font-semibold text-white">View</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default NFTComponents