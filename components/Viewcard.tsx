import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { bed,bathroom,house,house2,house3 } from "../utils/images";
export default function Viewcard() {
return (
<>
<View style={ styles.handleview}>
        <View>
        <Image source={require('../assets/house2.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> Orchad House</Text>
          <Text style={styles.textStyle}>Rp 2,500,000,000 / Year</Text>
          <View style={styles.handleviewStyle}>
          <Image source={require('../assets/bed.png')} style={styles.handleimgStyle} />

          <Text style={styles.labelStyle} >6 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleImgStyle} />

          <Text style={styles.labelStyle} >4 Bathroom</Text>
          </View>
        </View>


      </View>
      <View style={ styles.handleview}>
      <View>
        <Image source={require('../assets/house.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> The Hollies House</Text>
          <Text style={styles.textStyle}>Rp 2,000,000,000 / Year</Text>
          <View style={styles. handleviewStyle}>
          <Image source={require('../assets/bed.png')} style={styles.handleimgStyle} />

          <Text style={styles.labelStyle} >5 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleImgStyle} />

          <Text style={styles.labelStyle} >2 Bathroom</Text>
          </View>
        </View>
        </View>
        <View style={ styles.handleViewStyle}>
      <View>
        <Image source={require('../assets/house3.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> Ascot House</Text>
          <Text style={styles.textStyle}>Rp 3,500,000,000 / Year</Text>
          <View style={styles.handleviewStyle}>
          <Image source={require('../assets/bed.png')} style={styles.handleimgStyle} />

          <Text style={styles.labelStyle} >8 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleImgStyle} />

          <Text style={styles.labelStyle} >5 Bathroom</Text>
          </View>
        </View>
        </View>
</>)}
const styles= StyleSheet.create({
    handleview:{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"nowrap",
        flexDirection:"row",
        width:"90%",
        marginTop:20
    },
    handleviewStyle:{
        display:"flex",justifyContent:"space-between",flexWrap:"nowrap",flexDirection:"row",width:"75%"
    },
    handleViewStyle:{
        display:"flex",
        justifyContent:"space-between",
        flexWrap:"nowrap",
        flexDirection:"row",
        width:"90%",
        marginTop:20,
        marginBottom:60
    },
    
    handleimg:{
        height: 70,
        width: 70,
        borderRadius:8
    },
    handleimgStyle:{
        height: 30,
        width: 20,
        top:-10,
        right:5
    },
    handleImgStyle:{
        height: 18,
        width: 18,
    },
    text:{
      color: "rgba(0, 0, 0, 1)",
      lineHeight:18.78,
     fontSize:16,
     fontWeight:"500",
     letterSpacing:0.1,
    },
    textStyle:{
    color:"rgba(10, 142, 217, 1)",
    lineHeight:20,
    fontSize:12,
    fontWeight:"400",
    },
    labelStyle:{
        color:"rgba(133, 133, 133, 1)",
        lineHeight:20,
        fontSize:12,
        fontWeight:"400",
    }
})