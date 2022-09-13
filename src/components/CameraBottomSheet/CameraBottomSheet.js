import React, { useEffect, useState,useRef } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo'
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const CamerBottomSheet = (props) => {
    return(
  <RBSheet
        ref={props.refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: "grey"
          },
          container: {
         borderTopLeftRadius:wp(5),
         borderTopRightRadius:wp(5),
            height: hp(33)
        }
        }}
      >
     <View style={{flexDirection:'row', justifyContent:"space-between",
     marginVertical:10, marginHorizontal:15
    }}>
     <Text style={styles.maintext}>CHOOSE OPTIONS</Text>
     <Entypo name="cross" size={20} color={"black"}  
     onPress={() =>  props.refRBSheet.current.close()}/>
     </View>   
     <View style={{marginVertical:10,marginHorizontal:20}}>
</View>
          <View style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}>
            <TouchableOpacity onPress={props.takePhotoFromCamera}>
          <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Ionicons name="camera" size={20} color={"white"} />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
      <Text style={styles.Subscriptiontext}>Camera</Text>
          </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={props.choosePhotoFromLibrary}>
      <View style={styles.modaltextview}>
          <View style={{ justifyContent:'space-around',margin:15}}>
          <Ionicons name="images" size={20} color={"white"} />
          </View>
          <View style={{ justifyContent:'space-between',margin:15}}>
    
      <Text style={styles.Subscriptiontext}>{props.title}</Text>
          </View>
      </View>
      </TouchableOpacity>
          </View>
      </RBSheet>
    )
};

export default CamerBottomSheet;