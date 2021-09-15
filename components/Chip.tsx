import { style, width } from "dom-helpers";
import * as React from "react";
import { useState } from "react";
import Buttondata from "../utils/data";
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
      style={{ maxHeight: 50, marginTop: 20 }}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
    >
      {Buttondata.map(({ data,value },index ) => {
        return (<View key={index}>
        { value === true ? (
          <TouchableOpacity style={styles.button} >
            <Text style={{ color: "white", fontSize: 12,fontWeight:"500",lineHeight:14 }}> {data} </Text>
          </TouchableOpacity>) : (<TouchableOpacity style={styles.buttonView} >
            <Text style={{ color: "rgba(133, 133, 133, 1)", fontSize: 12,fontWeight:"500",lineHeight:14 }}> {data} </Text>
          </TouchableOpacity>)
      }
        </View>);
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  button: {
    minWidth:70,
    height: 34,
    backgroundColor: "#0CAFFF",
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    minWidth:70,
    height: 34,
    backgroundColor: "rgba(247, 247, 247, 1)",
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
