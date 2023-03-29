import { View, Text, Pressable , TouchableOpacity  } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RecoveryComponents from './conditioncomponents/RecoveryComponents'
import VerifyComponents from './conditioncomponents/VerifyComponents';

const VerifyPhrase = () => {

    const showWord = (word) => {
       console.log(word)
    }



  return (
      <View className="flex flex-1 flex-col items-center">
          <View className="flex flex-col items-center mt-8">
             <Text className="mt-3 font-bold text-3xl ">Your Recovery Phrase</Text>
              <View className=" text-center">
                  <Text className="text-center text-lg opacity-30  px-5 py-2 " >Tap the words to put them next to each other in the correct order</Text>
              </View>
              <View className="w-72 border border-1 border-dashed border-[#e28743] h-6/7 mt-8">
                  <View className="w-full flex flex-row flex-wrap justify-center py-2">
                      <RecoveryComponents id={1} word={"children"} />
                      <RecoveryComponents id={2} word={"children"} />
                      <RecoveryComponents id={3} word={"children"} />


                 </View>
              </View>
      <View className="w-72 h-6/7 mt-32">
                  <View className="w-full flex flex-row flex-wrap justify-center py-2">
                      <VerifyComponents word={"children"} wordPressed={(word)=>showWord(word)} />
                      <VerifyComponents word={"man"} wordPressed={(word)=>showWord(word)} />
                      <VerifyComponents word={"mango"} wordPressed={(word)=>showWord(word)} />
                      <VerifyComponents word={"fruit"} wordPressed={(word)=>showWord(word)} />
    </View>
              </View>
              <View className="w-full h-1/6 flex-1 justify-end pb-12 " >
                  <View  className="flex items-center">                 
                    </View>
                   <View className="w-96 flex items-center mt-3">
                       <Link className="w-[360px] h-12 border border-slate-300 rounded-md flex text-center pt-[12px] font-bold text-slate-600  my-2" href={{pathname:"/verifyPhrase"}}><Text>Continue</Text></Link>
                  </View>
              </View>        
        </View>
    </View>
  )
}

export default VerifyPhrase