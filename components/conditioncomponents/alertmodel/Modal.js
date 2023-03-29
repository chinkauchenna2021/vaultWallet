import { View, Text, Pressable , TouchableOpacity , StyleSheet , Image } from 'react-native'
import React , {useState} from 'react';
import { Link } from 'expo-router';
import Icon from 'react-native-vector-icons/AntDesign';

const Modal = ({ title, message, imageURL , displayModal}) => {
    const [isShown, setIsShown] = useState(displayModal);
  return (
    <Pressable onPress={()=>setIsShown(false)} style={styles.background}  className={`flex flex-1 absolute w-full h-full z-10 ${isShown? ``: `hidden`} `}>
     <View className="flex flex-1 justify-center items-center relative">
              <View className="w-4/5 h-auto bg-white z-50 rounded-lg shadow shadow-2xl ">
                  <View className="w-auto flex justify-end  items-end relative"><Text className="min-w-0 p-1"><Icon name="closecircle" color={"#e28743"} size={22} /></Text></View>
               
                  {title && <View className="border-b border-b-slate-300 flex justify-center items-center ">
                     <Text className="mb-2 text-lg font-medium">{ title}</Text> 
                  </View>} 
                  {(imageURL) ? 
                      <View className="min-h-[100] flex flex-col h-auto justify-center items-center">
                     
                        <View className="border my-3 rounded-lg">
                           <Image source={imageURL} className="object-cover h-32 w-32 " />
                        </View>
                   <Text className="w-2/3 flex text-lg  text-center py-5  text-md font-semibold text-slate-700 opacity-60">{message}</Text>
                  </View>
                      : ""}   

                  <View className=" border-t-2 border-t-slate-200 py-3">
                      <View className="min-h-[60] ">
                           <TouchableOpacity><Text className="m-auto text-white text-base text-center pt-2 rounded-md font-bold bg-[#e28743] h-10 w-5/6 ">Close</Text></TouchableOpacity>
                       </View>

                  </View>
            </View>
      </View>
    </Pressable>
  )
}


export default Modal

const styles = StyleSheet.create({
    background: {
        backgroundColor: "rgba(0,0,0,0.4)"
     }
})
