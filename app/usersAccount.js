import { View, Text , ScrollView , FlatList  , ToastAndroid, Pressable } from 'react-native'
import React , {useEffect} from 'react'
import { Stack } from 'expo-router'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import Fontisto from "react-native-vector-icons/Fontisto"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import ChartKit from '../components/conditioncomponents/ChartKit';
import CryptoAssets from '../components/conditioncomponents/cryptoAssetsComponents/CryptoAssets';
import BottomSheets from '../components/conditioncomponents/bottomSheet/BottomSheets';
import { Toasts } from '../components/conditioncomponents/alertmodel/ToastMessage';
import NFTComponents from '../components/conditioncomponents/NFTComponents';
import { nftdata } from "../components/DataComponent/nfts"
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { ToastMessage } from '../components/conditioncomponents/alertmodel/ToastMessage';
// import { ScrollView } from 'react-native-gesture-handler';
// import Chart from '../components/conditioncomponents/Chart';

const usersAccount = () => {
  const navigator = useRouter();
  const data = ["","","","","",""]
  // Toasts("welcome to our toast", "LONG", "top")

  useEffect(() => { 

    console.log(nftdata)
    
  }, [])
  

  const openDetails = () => {
    console.log("clicked")
    navigator.push('userDetails')
  }

    return (
    
      <View className="flex flex-1 bg-white pb-40 ">
          
        <SafeAreaView className="flex w-full">
              <View className=" w-full flex-row space-x-2 pt-4 ">
                  <View className="w-14 h-16 flex justify-around items-end pb-2">
                      <View className="bg-slate-300 w-10 h-10 flex justify-center items-center rounded-full ">
                      <Icon name="user-alt" size={25} color={"#000"} />             
                    </View>
                </View> 
                    <View className="w-48 h-16 flex flex-col justify-center pt-2">
                      <View className="flex flex-col">
                        <Text className=" text-black font-semibold text-md mt-2">0xb234....34362</Text>      
                          <View className="flex flex-row">
                              <Text className="text-gray-500 font-md text-xs pb-2">Ethereum main Network </Text>
                              <Text className="h-fit flex justify-center items-center"><MaterialIcon name='keyboard-arrow-down' color={"gray"} size={20} /></Text>
                          </View>
                          <View>
                              <Icon/>
                          </View>
                      </View>
                  </View> 

                  <View className=" w-20 flex flex-row">
                      <View className="w-1/2 flex justify-center items-end">
                           <Icon name="wallet" size={20} color={"#000"} />                  
                      </View>
                       <View className="relative w-1/2 flex justify-center items-end pr-1">
                            <Icons name="notifications" size={20} color={"#000"} />             
                            <View className="absolute w-2 h-2 bg-red-500 rounded-full right-1 top-6"></View>
                        </View>
                </View>
              </View>
                <ScrollView showsVerticalScrollIndicator={false}>

              <View className=" w-full h-fit flex px-3 font-semibold py-8 flex-col h-28 space-y-1">
                     <Text className="capitalize text-gray-500 w-full text-center text-lg ">Total balance</Text>
                      <Text className="text-black text-5xl py-3 font-bold h-24 w-full text-center">4,285.74</Text>
              </View>
              <View className="w-full h-full py-3 ">
                  <View className="flex flex-col justify-center items-center mt-4 ">
                        <View className="flex flex-row capitalize  font-lg text-lg  w-[190px] h-10 my-2 space-x-2 border  border-slate-200  rounded-2xl text-center justify-center">
                            <View className="bg-green-500 rounded-full h-5 w-5 flex justify-center items-center mt-2">
                               <Feather name="arrow-up-right" size={18} color={"#fff"} ></Feather>
                            </View>  
                            <View className="flex justify-center items-center">
                                <Text className="text-sm text-gray-600 font-bold ">$30,453</Text>
                            </View>
                            <View className="flex justify-center items-center">
                                <Text className="text-sm text-gray-400 font-semibold">+25.45%</Text>
                              </View>
                      </View>
                    </View>
                      
                    <View className="w-full h-20  flex flex-row justify-center items-center space-x-2">
                               <View className="bg-black rounded-3xl h-10 w-20 flex justify-center items-center"><Feather name="plus" size={24} color={"#fff"}></Feather></View>
                               <View className="bg-black rounded-3xl h-10 w-20 flex justify-center items-center"><Feather name="upload" size={24} color={"#fff"}></Feather></View>
                               <View className="bg-black rounded-3xl h-10 w-20 flex justify-center items-center"><Fontisto name='arrow-swap' size={24} color={"#fff"} ></Fontisto></View>
                    </View> 

                    <View  className="w-full h-4/5">
                            <View className="">
                               <Pressable onPress={()=>openDetails()} className="w-full h-12 flex justify-center items-start "><Text className="text-gray-400 font-semibold pl-8 text-md ">Asset</Text></Pressable>
                  <View >
                    <FlatList
                      data={data}
                      keyExtractor={()=>Math.random()}
                      renderItem={(data) => <CryptoAssets />}
                      showsVerticalScrollIndicator={false}
                    
                    />
                   </View>
                </View>
                
                <View className="w-full h-full pt-10">
                  <View className="h-8  w-full flex flex-row justify-between items-end pr-3"><Text className="w-fit h-fit text-md font-semibold pl-6 text-gray-500   ">Collection</Text><TouchableOpacity  className="h-8 w-full border border-gray-400  mr-3 flex justify-center items-center rounded-lg "><Text className="capitalize text-gray-500 font-semibold">view all</Text></TouchableOpacity></View>
                  <View className="h-full">
                    <FlatList
                      data={nftdata}
                      keyExtractor={(nftdatas) => nftdatas.id}
                      renderItem={(nftdatas)=><NFTComponents  />}
                      numColumns={2}
                    
                    />
                   </View>
                </View>
                
                </View>

             </View>
                </ScrollView>
            <BottomSheets    />
            </SafeAreaView>
      </View>

  )
}

export default usersAccount