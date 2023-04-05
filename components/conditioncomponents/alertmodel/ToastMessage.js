import { View, Text , ToastAndroid} from 'react-native'
import React from 'react'
import Toast from 'react-native-simple-toast';


export const Toasts = ({ title, duration, position = null, styles = null }) => {
    if (position == null && styles == null) {
        Toast.show('This is a long toast.', Toast.LONG);
        
    } else if (position != null && style == null) {
      Toast.showWithGravity('This is a long toast at the top.', Toast.LONG, Toast.TOP);  
    } else {
       Toast.show('This is a styled toast on iOS.', Toast.LONG, { backgroundColor: 'blue' });   

    }
}
