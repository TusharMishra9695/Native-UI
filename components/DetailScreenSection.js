import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from 'react-native-paper';
import { avatar,call3,msg } from "../utils/images";
export default function Section() {
    return (
      <>
      <View style={{marginTop:-95}}>
      <Text style={styles.textmanage}>Description</Text>
      <View style={styles.handleview}>
      <Text style={styles.textmanageStyle}>
The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...<Text style={{color:"#0CAFFF"}}>Show More </Text>

      </Text>
      </View>
      <View style={styles.handleviewStyle}>
      <Avatar.Image size={40} source={require('../assets/avat.jpg')} />
      <View style={{right:40}}>
          <Text style={styles.textmanageStyleView} >Garry Allen</Text>
          <Text style={styles.labelmanageStyle}>Owner</Text>
      </View>
      <TouchableOpacity style={styles.buttonManage}>

<Image
  source={require("../assets/call3.png")}
  style={styles.handleimgStyle}
/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmanageStyle}>

<Image
  source={require("../assets/msg.png")}
  style={styles.handleimgStyle}
/>
          </TouchableOpacity>
      </View>
      </View>
      </>
      )}
const styles = StyleSheet.create({
    textmanage:{
        fontSize:16,
        fontWeight:"500",
        color:"rgba(0, 0, 0, 1)",
    },
    textmanageStyle:{
        fontSize:12.5,
        fontWeight:"400",
        color:"grey",
        lineHeight:18
    },
    textmanageStyleView:{
        fontSize:16,
        fontWeight:"500",
        color:"rgba(0,0,0,1)",
        lineHeight:22
    },
    labelmanageStyle:{
        fontSize:12,
        fontWeight:"400",
        color:"rgba(133,133,133,1)",
        lineHeight:15
    },
    handleview:{
        width:"100%",
        maxWidth:350,
        marginTop:15
    },
    handleviewStyle:{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      flexDirection: "row",
      width: "100%",
      maxWidth:340,
      marginTop:20
    },
    buttonManage: {
        backgroundColor: "rgba(10,142,217,0.5)",
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        left:40,
        top:5
      },
      buttonmanageStyle: {
        top:5,
        backgroundColor: "rgba(10,142,217,0.5)",
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
       
      },
      handleimgStyle: {
        height: 16,
        width: 16,
        alignItems: "center",
        justifyContent: "center",
      },
})