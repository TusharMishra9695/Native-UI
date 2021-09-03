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
export default function Viewcard() {
return (
<>
<View style={ styles.handleview}>
        <View>
        <Image source={require('../assets/house2.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> Orchad House</Text>
          <Text style={styles.text2}>Rp 2,500,000,000 / Year</Text>
          <View style={styles.handleview2}>
          <Image source={require('../assets/bed.png')} style={styles.handleimg2} />

          <Text style={styles.text3} >6 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleimg3} />

          <Text style={styles.text3} >4 Bathroom</Text>
          </View>
        </View>


      </View>
      <View style={ styles.handleview}>
      <View>
        <Image source={require('../assets/house.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> The Hollies House</Text>
          <Text style={styles.text2}>Rp 2,000,000,000 / Year</Text>
          <View style={styles.handleview2}>
          <Image source={require('../assets/bed.png')} style={styles.handleimg2} />

          <Text style={styles.text3} >5 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleimg3} />

          <Text style={styles.text3} >2 Bathroom</Text>
          </View>
        </View>
        </View>
        <View style={ styles.handleview3}>
      <View>
        <Image source={require('../assets/house3.jpg')} style={styles.handleimg} />
        </View>
        <View style={{marginLeft:20,display:"flex",flexDirection:"column"}}>
          <Text style={styles.text}> Ascot House</Text>
          <Text style={styles.text2}>Rp 3,500,000,000 / Year</Text>
          <View style={styles.handleview2}>
          <Image source={require('../assets/bed.png')} style={styles.handleimg2} />

          <Text style={styles.text3} >8 Bedroom</Text>
          <Image source={require('../assets/bathroom.png')} style={styles.handleimg3} />

          <Text style={styles.text3} >5 Bathroom</Text>
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
    handleview2:{
        display:"flex",justifyContent:"space-between",flexWrap:"nowrap",flexDirection:"row",width:"75%"
    },
    handleview3:{
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
    handleimg2:{
        height: 30,
        width: 20,
        top:-10,
        right:5
    },
    handleimg3:{
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
    text2:{
    color:"rgba(10, 142, 217, 1)",
    lineHeight:20,
    fontSize:12,
    fontWeight:"400",
    },
    text3:{
        color:"rgba(133, 133, 133, 1)",
        lineHeight:20,
        fontSize:12,
        fontWeight:"400",
    }
})