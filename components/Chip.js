import { style, width } from "dom-helpers";
import * as React from "react";
import { useState } from "react";
import Buttondata from "./data";
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
export default function Chip() {
  return (
    <ScrollView
      style={{ maxHeight: 50, marginTop: 25 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      {Buttondata.map(({ data }, index) => {
        return (
          <TouchableOpacity style={styles.button} key={index}>
            <Text style={{ color: "white", fontSize: 10 }}> {data} </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 59,
    height: 35,
    backgroundColor: "#0CAFFF",
    borderRadius: 12,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
