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
import { house2,white2,arrow3,bed,bathroom } from "../utils/images";
export default function Head() {
  return (
    <>
      <View>
        <Image
          source={require("../assets/house2.jpg")}
          style={styles.imgManage}
        />
        <View style={styles.handleView}>
          <TouchableOpacity style={styles.buttonManage}>
            <Image
              source={require("../assets/white2.png")}
              style={styles.  handleImgStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonManageViewStyle}>
            <Image
              source={require("../assets/arrow3.png")}
              style={styles.  handleImgStyleView}
            />
          </TouchableOpacity>
        </View>

        <View style={{ top: -150, left: 20 }}>
          <Text style={{ fontSize: 20, color: "rgba(255, 255, 255, 1)" }}>
            Dreamsville House
          </Text>
          <Text style={{ fontSize: 12, color: "rgba(215, 215, 215, 1)" }}>
            JL Sultan Iskandar Muda, Jakarta selatan
          </Text>
        </View>

        <View style={styles.handleViewStyle}>
        <TouchableOpacity style={styles.  buttonManageStyle}>

          <Image
            source={require("../assets/bed.png")}
            style={styles.  handleImg}
          />
                    </TouchableOpacity>


          <Text style={styles.labelStyle}>6 Bedroom</Text>
          <TouchableOpacity style={styles.  buttonManageStyle}>

          <Image
            source={require("../assets/bathroom.png")}
            style={styles.  handleImgStyle}
          />
          </TouchableOpacity>

          <Text style={styles.labelStyle}>4 Bathroom</Text>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  handleView: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "100%",
    maxWidth:340,
  
    
  },
  handleViewStyle: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "85%",
    top:-130,
    left:20

  },
  buttonManage: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    color: "white",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: -280,
    left:20
  },
  buttonManageViewStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.24)",
    color: "white",
    width: 35,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: -280,
    right:20
  },
  buttonManageStyle: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    width: 28,
    height: 28,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
   
  },
  imgManage: {
    height: 300,
    width: "95%",
    // maxWidth: 320,
    borderRadius: 20,
    marginRight: 25,
  },
  handleImg: {
    height: 30,
    width: 20,
    top: -7.5,
    right: 0,
  },
  handleImgStyle: {
    height: 18,
    width: 18,
    right:2
  },
  handleImgStyleView: {
    height: 18,
    width: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    height: 10,
    width: 10,
    top: 10,
    left: 15,
    marginRight: 40,
  },
  labelStyle: {
    color: "white",
    lineHeight: 20,
    fontSize: 12,
    fontWeight: "400",
    right:40,
    top:3
  },
});
