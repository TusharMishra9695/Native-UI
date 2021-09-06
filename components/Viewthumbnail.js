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
export default function Viewthumbnail({ navigation }) {
  return (
    <>
      <ScrollView horizontal={true} style={{ marginTop: 20 }} showsHorizontalScrollIndicator={false}>
        <View>
          <Image
            source={require("../assets/house2.jpg")}
            style={styles.imgmanage}
          />

          <TouchableOpacity style={styles.buttonmanage} 
       
          >
            <Text style={{ fontSize: 12 }}  
             >1.8 km </Text>
          </TouchableOpacity>
          <View style={{ top: -100, left: 20 }}>
            <Text style={{ fontSize: 17, color: "rgba(255, 255, 255, 1)" }}>
              Dreamsville House
            </Text>
            <Text style={{ fontSize: 14, color: "rgba(215, 215, 215, 1)" }}>
              Ji Sultan Iskandar Muda
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require("../assets/house3.jpg")}
            style={styles.imgmanage}
          />
          <TouchableOpacity style={styles.buttonmanage}>
            <Text style={{ fontSize: 12 }}>1.8 km </Text>
          </TouchableOpacity>
          <View style={{ top: -100, left: 20 }}>
            <Text style={{ fontSize: 17, color: "rgba(255, 255, 255, 1)" }}>
              Ascot House
            </Text>
            <Text style={{ fontSize: 14, color: "rgba(215, 215, 215, 1)" }}>
              Ji Cilandak Iskandar Muda
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  buttonmanage: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    color: "white",
    width: 69,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: -255,
    left: 120,
  },
  imgmanage: {
    height: 280,
    width: 205,
    borderRadius: 20,
    marginRight: 25,
  },
  img: {
    height: 10,
    width: 10,
    top: 10,
    left: 15,
    marginRight: 40,
  },
});
