import { Stack } from "expo-router";
import { View } from "react-native";


export default () => {
    return (
        < Stack >
            <Stack.Screen name="termsandcondition" options={{headerTitle:"Terms and Conditions"}} >
            </Stack.Screen>
             <Stack.Screen name="recoveryPhrase" options={{headerTitle:""}} >
            </Stack.Screen>
            <Stack.Screen name="verifyPhrase" options={{headerTitle:""}} >
            </Stack.Screen>
            <Stack.Screen name="index" options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name="usersAccount" options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name="userDetails" options={{ headerShown: false }}></Stack.Screen>
        </Stack>             
    );
}