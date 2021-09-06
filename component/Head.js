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
export default function Head() {
  return (
    <>
      <View>
        <Image
          source={require("../assets/house2.jpg")}
          style={styles.imgmanage}
        />
        <View style={styles.handleview}>
          <TouchableOpacity style={styles.buttonmanage}>
            <Image
              source={require("../assets/white2.png")}
              style={styles.handleimg3}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonmanage}>
            <Image
              source={require("../assets/arrow3.png")}
              style={styles.handleimg3}
            />
          </TouchableOpacity>
        </View>

        <View style={{ top: -165, left: 20 }}>
          <Text style={{ fontSize: 22, color: "rgba(255, 255, 255, 1)" }}>
            Dreamsville House
          </Text>
          <Text style={{ fontSize: 13, color: "rgba(215, 215, 215, 1)" }}>
            JL Sultan Iskandar Muda, Jakarta selatan
          </Text>
        </View>

        <View style={styles.handleview2}>
        <TouchableOpacity style={styles.buttonmanage2}>

          <Image
            source={require("../assets/bed.png")}
            style={styles.handleimg2}
          />
                    </TouchableOpacity>


          <Text style={styles.text3}>6 Bedroom</Text>
          <TouchableOpacity style={styles.buttonmanage2}>

          <Image
            source={require("../assets/bathroom.png")}
            style={styles.handleimg3}
          />
          </TouchableOpacity>

          <Text style={styles.text3}>4 Bathroom</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  handleview: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "80%",
    left: 20,
    
  },
  handleview2: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "85%",
    top:-140,
    left:20

  },
  buttonmanage: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    color: "white",
    width: 37,
    height: 37,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: -270,
  },
  buttonmanage2: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
   
  },
  imgmanage: {
    height: 300,
    width: "95%",
    // maxWidth: 320,
    borderRadius: 20,
    marginRight: 25,
  },
  handleimg2: {
    height: 30,
    width: 20,
    top: -10,
    right: 0,
  },
  handleimg3: {
    height: 18,
    width: 18,
  },
  img: {
    height: 10,
    width: 10,
    top: 10,
    left: 15,
    marginRight: 40,
  },
  text3: {
    color: "white",
    lineHeight: 20,
    fontSize: 12,
    fontWeight: "400",
    right:40,
    top:3
  },
});
