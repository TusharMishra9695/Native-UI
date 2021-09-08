import { style } from "dom-helpers";
import * as React from "react";

import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
} from "react-native";

export default function Header() {
  const [selectedLocation, setSelectedLocation] = useState("Jakarta");

  const [locations] = useState(
    [
      "Jakarta",
      "Kanpur",
      "Zirakpur",
      "Lucknow",
      "Ghaziabad",
      "Gurugram",
      "Delhi",
    ].sort()
  );
  return (
    <View >
      <Text style={styles.textStyle}>Location</Text>
      <View style={styles.manage}>
        <Picker
          style={{ width: 118 }}
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => setSelectedLocation(itemValue)}
        >
          {locations.map((l, i) => (
            <Picker.Item label={l} value={l} key={i} />
          ))}
        </Picker>
        <Image source={require("../assets/bell.jpg")} style={styles.img} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    top: 100,
    left: 10,
  },
  textStyle: {
    fontSize: 12,
    color: "grey",
  },
  manage: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  img: {
    height: 25,
    width: 25,
    marginRight: 40,
  },
});
