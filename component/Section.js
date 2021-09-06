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

export default function Section() {
    return (
      <>
      <View style={{marginTop:-95}}>
      <Text style={styles.textmanage}>Description</Text>
      <View style={styles.handleview}>
      <Text style={styles.textmanage2}>
The 3 level house that has a modern design, has a large pool and a garage that fits up to four cars...<Text style={{color:"#0CAFFF"}}>Show More </Text>

      </Text>
      </View>
      <View style={styles.handleview2}>
      <Avatar.Image size={40} source={require('../assets/avat.jpg')} />
      <View style={{right:40}}>
          <Text style={styles.textmanage3} >Garry Allen</Text>
          <Text style={styles.textmanage4}>Owner</Text>
      </View>
      <TouchableOpacity style={styles.buttonmanage2}>

<Image
  source={require("../assets/call3.png")}
  style={styles.handleimg2}
/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmanage3}>

<Image
  source={require("../assets/msg.png")}
  style={styles.handleimg2}
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
    textmanage2:{
        fontSize:12.5,
        fontWeight:"400",
        color:"grey",
        lineHeight:18
    },
    textmanage3:{
        fontSize:16,
        fontWeight:"500",
        color:"rgba(0,0,0,1)",
        lineHeight:22
    },
    textmanage4:{
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
    handleview2:{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "nowrap",
      flexDirection: "row",
      width: "100%",
      maxWidth:340,
      marginTop:20
    },
    buttonmanage2: {
        backgroundColor: "rgba(10,142,217,0.5)",
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        left:40,
        top:5
      },
      buttonmanage3: {
        top:5,
        backgroundColor: "rgba(10,142,217,0.5)",
        width: 28,
        height: 28,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
       
      },
      handleimg2: {
        height: 16,
        width: 16,
        alignItems: "center",
        justifyContent: "center",
      },
})