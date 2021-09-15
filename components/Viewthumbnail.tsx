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
import { Props } from "../interface/interface";
import { house2 ,house3} from "../utils/images";
export default function Viewthumbnail(prop: { navigation: { navigate: (arg0: string) => void; }; } ) {
  return (
    <>
      <ScrollView
        horizontal={true}
        style={{ marginTop: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Image
            source={house3}
            style={styles.imgManage}
            
          />
          <TouchableOpacity style={styles.buttonManage} >
          <Image
            source={require("../assets/pin.png")}
            style={styles.imgManageView}
            
          />
            <Text style={{ fontSize: 12,color:"white",right:5}}  >1.8 km </Text>
          </TouchableOpacity>
          <View style={{ top: -83, left: 20 }}>
            <Text style={{ fontSize: 16, color: "rgba(255, 255, 255, 1)" }}  
                        onPress={()=> prop.navigation.navigate('Details')}

            >
              Dreamsville House
            </Text>
            <Text style={{ fontSize: 12, color: "rgba(215, 215, 215, 1)" }}>
              Ji Sultan Iskandar Muda
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require("../assets/house2.jpg")}
            style={styles.imgManage}

          />
          <TouchableOpacity style={styles.buttonManage}>
          <Image
            source={require("../assets/pin.png")}
            style={styles.imgManageView}
            
          />
            <Text style={{ fontSize: 12,color:"white",right:5}}>1.8 km </Text>
          </TouchableOpacity>
          <View style={{ top: -83, left: 20 }}>
            <Text style={{ fontSize: 16, color: "rgba(255, 255, 255, 1)" }}
              onPress={()=> prop.navigation.navigate('Scheduler')}

            >
              Ascot House
            </Text>
            <Text style={{ fontSize: 12, color: "rgba(215, 215, 215, 1)" }}>
              Ji Cilandak Iskandar Muda
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  buttonManage: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    color: "white",
    width: 73,
    height: 24,
    justifyContent:"space-between",
    alignItems:"center",
    borderRadius: 20,
    top: -260,
    left: 120,
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap"
    
  },
  imgManage: {
    height: 280,
    width: 205,
    borderRadius: 20,
    marginRight: 25,
  },
  imgManageView:{
    height: 10,
    width: 7,
left:15,
marginTop:13
  },
  img:{
    height: 10,
    width: 10,
    top: 10,
    left: 15,
    marginRight: 40,
  },
});
