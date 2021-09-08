import { StylesContext } from "@material-ui/styles";
import { width } from "dom-helpers";
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
import { house3,map2 } from "../utils/images";
export default function Viewgallery() {
  return (
    <>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.textgallery}>Gallery</Text>
        <View style={styles.manageview}>
          <Image
            // source={{house3 }}
            source={require("../assets/house3.jpg")}

            style={styles.handleimg}
          />
          <Image
            source={require("../assets/house3.jpg")}
            style={styles.handleimg}
          />
          <Image
            source={require("../assets/house3.jpg")}
            style={styles.handleimg}
          />
          <Image
            source={require("../assets/house3.jpg")}
            style={styles.handleimg}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../assets/map2.jpg")}
            style={styles.handleimgStyle}
          />
        </View>
        <View style={styles.manageview}>
          <View>
            <Text style={styles.textgalleryStyle}>Price</Text>
            <Text style={styles.labelgalleryStyle}>Rp 2,500,000,000 / Year</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontSize: 16 }}>Rent Now </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "100%",
    maxWidth: 122,
    height: 45,
    backgroundColor: "#0CAFFF",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  manageview: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
    marginTop: 15,
    width: "100%",
    maxWidth: 350,
  },
  textgallery: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  textgalleryStyle: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgba(133, 133, 133, 1)",
  },
  labelgalleryStyle: {
    fontSize: 16,
    fontWeight: "500",
    color: "rgba(0, 0, 0, 1)",
  },
  handleimg: {
    height: 71,
    width: "100%",
    maxWidth: 71,
    borderRadius: 10,
  },
  handleimgStyle: {
    height: 70,
    width: "100%",
    maxWidth: 350,
    borderRadius: 10,
  },
});
