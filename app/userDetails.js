import { View, Text, Image, TouchableOpacity, ScrollView , Pressable } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Animatable from 'react-native-animatable';


const userDetails = () => {
    return (
        
        <SafeAreaView className="flex-1 bg-white"> 
                <View  className="w-full h-[80px] flex flex-row justify-around items-center px-2">
                        <View  className=" w-fit">
                            <Icon name="keyboard-arrow-left" size={30} />    
                    </View>
                        <View  className="w-2/3 ">
                         <Text className="text-center font-semibold text-xl text-slate-600 ">Hydra Nft</Text>   
                    </View>
                        <View  className=" w-fit">
                            <Entypo name="dots-three-horizontal" size={20}   />    
                        </View>
        
                </View>        
                    <ScrollView className="flex-1 bg-white min-h-fit ">
                <View className="w-full min-h-[600px] flex flex-col">
                    <View className="h-fit flex object-cover px-6  w-full justify-start items-start relative">
                        <Image source={{uri:"https://i.seadn.io/gcs/files/810cde16a75b659fc051b0805e5eeb74.jpg?auto=format&w=0"}} className="h-[300px] w-[300px] rounded-2xl" />
                        <View className="absolute  bg- z-10 w-22 h-48 right-4 top-8 bg-white rounded-3xl ">
                            <View className="flex flex-col h-full w-[53px] bg-blue-200 rounded-3xl items-center space-y-2 ">
                                <View className="w-12 bg-white h-12 flex justify-center items-center rounded-full"><Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"><Entypo name="heart" size={32} color={"red"}  /></Animatable.Text></View>

                            </View>  
                         </View>
                        <Animatable.View    className="h-10 w-10 absolute left-10 top-4 ring-1 ring-red-900 ring-offset-2 bg-black flex justify-center items-center rounded-md"><Text className="text-white h-fit w-fit font-bold tracking-wide">Nft</Text></Animatable.View>
                    </View>
                <View className="w-full h-fit py-2">
                   <View className="w-full pl-8 py-2"><Text className="text-3xl font-bold  ">Hydra Nft</Text></View>  
                        <View className="flex flex-row mt-1 pl-8 space-x-1">
                            <TouchableOpacity className="w-[100px] h-[50px] flex justify-center items-center rounded-2xl  bg-blue-300"><Text className="w-fit h-fit text-white font-bold text-md  ">1.33 ETH</Text></TouchableOpacity> 
                            <TouchableOpacity className="w-[100px] h-[50px] flex justify-center items-center rounded-2xl border border-gray-400 border-opacity-5"><Text className="w-fit h-fit text-slate-600 font-bold text-md  ">1234.33</Text></TouchableOpacity> 
                        </View>



                        <View className="w-full h-fit  flex flex-row my-5">
                            <View className="w-1/2 h-fit pl-6 flex flex-row ">
                                    <View className="h-fit "><Image source={{uri:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/297508141425045.6253fbcc22049.jpeg"}}  className="h-14 w-14 rounded-full"/></View>
                                <View className="flex flex-col">
                                    <View className="w-full ml-1 pt-1">
                                        <Text className="text-gray-300 text-sm capitalize font-semibold">creator</Text>
                                        <Text className="font-bold text-sm">Floyd miles</Text>
                                    </View>
                                    <View className=""></View>
                                    
                               </View>
                            </View>
                            <View className="w-1/2 h-fit  flex flex-row ">
                                    <View className="h-fit "><Image source={{uri:"https://i.seadn.io/gcs/files/f3b5c3337e22bfc98f60d63114a88938.png?auto=format&w=1080"}}  className="h-14 w-14 rounded-full"/></View>
                               <View className="flex flex-col">
                                    <View className="w-full ml-1 pt-1">
                                        <Text className="text-gray-300 text-sm capitalize font-semibold">owner</Text>
                                        <Text className="font-bold text-sm">Floyd miles</Text>
                                    </View>
                                    <View className=""></View>

                               </View>
                            </View>
                            
                        </View>

                            <View className="w-full pl-6 ">
                                <Text className="font-bold text-normal text-gray-400 capitalize">Highest bid by <Text className="text-gray-700">@uchennamike</Text></Text>
                        </View>
                        <Animatable.View animation="bounce" iterationDelay={4000} easing="ease-out" iterationCount="infinite" className="w-fit h-fit flex justify-center items-center pt-8">
                            <TouchableOpacity className="w-[340px] h-14 bg-slate-600 rounded-3xl flex justify-center items-center">
                                 <Text className="text-yellow-50 w-fit h-fit text-xl  ">Place a Bid</Text>           
                           </TouchableOpacity>


                        </Animatable.View>
                </View>
                    
               </View>
             </ScrollView >
           <Stack.Screen options={{headerShown:false}}></Stack.Screen>
           </SafeAreaView>

  )
}

export default userDetails