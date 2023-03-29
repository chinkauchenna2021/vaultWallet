import  React , {useState} from 'react'
import { Alert, Button, StyleSheet, Text, View , Image , SafeAreaView, Pressable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import displayScreen from '../assets/displayScreen.png';
import vaultimage from "../assets/vaultimage.png";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Link } from 'expo-router';
import * as Animatable from 'react-native-animatable';

export default function Page() {
  const [show, setShow] = useState(false);
  // const showClicker = () => {
  //    Alert.alert(
  //     "Alert Display",
  //     "you just clicked this button",
  //     [
  //       {
  //         text: "Ask me later",
  //         onPress: () => console.log("Ask me later pressed")
  //       },
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel Pressed"),
  //         style: "cancel"
  //       },
  //       { text: "OK", onPress: () => console.log("OK Pressed") }
  //     ]
  //   );
  // };

  
  return (
    <SafeAreaView className="flex flex-1  flex-col items-center bg-[#e28743]">
      <View className="h-4/5 flex flex-col justify-center">
        <View className=" rounded-full flex justify-center items-center mb-2">
          <Image source={vaultimage} className="shadow-sm shadow-white h-40 w-40  object-cover rounded-full" />
          {/* <Icon name='wallet' size={120} color={"white"} /> */}
        </View>
        <View className=" flex items-center flex-col space-y-2">
          <Text className="capitalize text-2xl mt-2 font-thin">welcome to</Text>
          <Text className="text-white font-bold text-4xl capitalize">Vault wallet</Text>
        </View>
      </View>
      <View className="w-4/5 ">
        <Link href={{ pathname:"/termsandcondition"}}  className=" bg-white h-14 text-center pt-3 rounded-3xl">
          <Animatable.Text animation="pulse" easing="ease-out"  iterationCount="infinite"  className="text-slate-600 font-bold text-lg capitalize">create wallet</Animatable.Text>
        </Link>
        <View className="flex justify-center items-center space-x-1">
          <Text className="text-md my-3 text-white font-thin">Already have an Account?<Text className="text-white font-bold flex justify-center items-center cursor-pointer" >  Import Wallet</Text></Text>  
        </View>
      </View>
    </SafeAreaView>
  );
}