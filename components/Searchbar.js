import { style, width } from "dom-helpers";
import * as React from "react";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
export default function Search() {
  return (
    <View>
      <View style={styles.manage2}>
        <Image source={require("../assets/search.jpg")} style={styles.img} />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Search address, or near you"
          placeholderTextColor="#858585"
          autoCapitalize="none"
        ></TextInput>
        <TouchableOpacity style={styles.button}>
          <Image source={require("../assets/sort.png")} style={styles.img2} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: "#7a42f4",
    marginRight: 100,
    marginLeft:-10
  },
  manage2: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    backgroundColor: "rgba(247, 247, 247, 1)",
    flexDirection: "row",
    width: "70%",
  },
  img: {
    height: 25,
    width: 25,
    top: 10,
    left: 15,
    marginRight: 40,
  },
  img2: {
    height: 25,
    width: 25,
    marginRight: 40,
    left: 5,
  },
  button: {
    backgroundColor: "rgba(160, 218, 251, 1)",
    padding: 10,
    width: "23%",
    right: 55,
    height: 45,
    borderRadius: 10,
  },
});
