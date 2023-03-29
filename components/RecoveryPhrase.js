import { View, Text, Pressable , TouchableOpacity  } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RecoveryComponents from './conditioncomponents/RecoveryComponents'

const RecoveryPhrase = () => { 

    const copiedToClipboard = () => { console.log("copied to clipboard") };

  return (
      <View className="flex flex-1 flex-col items-center">
          <View className="flex flex-col items-center mt-8">
             <Text className="mt-3 font-bold text-3xl ">Your Recovery Phrase</Text>
              <View className=" text-center">
                  <Text className="text-center text-lg opacity-30  px-5 py-2" >Write down or copy this words in the right order and save them somewhere safe.</Text>
              </View>
              <View className="w-72 border border-1 border-dashed border-[#e28743] h-6/7 mt-8">
                  <View className="w-full flex flex-row flex-wrap justify-center py-2">
                      <RecoveryComponents id={1} word={"children"} />
                      <RecoveryComponents id={2} word={"children"} />
                      <RecoveryComponents id={3} word={"children"} />


                 </View>
              </View>

              <View>
                   <Pressable onPress={()=>copiedToClipboard()} className="py-3"><Text className="text-[#e28743] font-bold text-lg">Copy</Text></Pressable>
              </View>
              <View className="w-full h-1/6 flex-1 justify-end pb-12 " >
                  <View  className="flex items-center">                 
                      <View className="w-[360px] h-28 bg-red-200 opacity-40 flex flex-col rounded-md -circle">
                          <View className="flex justify-center items-center py-2"><Text><Icon name="info-circle" color={"#e28743"} size={25} /></Text></View>
                        <View className="">
                         <Text className=" text-red-700  text-center text-lg font-extrabold ">Never share recovery phrase with anyone store it securely!</Text>     
                       </View>
                  </View>

                    </View>
                   <View className="w-96 flex items-center mt-3">
                       <Link className="w-[360px] h-12 bg-[#e28743] rounded-md flex text-center pt-[12px] font-bold text-white my-2" href={{pathname:"/verifyPhrase"}}><Text>Continue</Text></Link>
                  </View>
              </View>        
        </View>
    </View>
  )
}

export default RecoveryPhrase