import React, { useState } from "react";
import { ScrollView, Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { App } from "./Schedule";
import weekSlotsData from "../utils/SchedulerData";
export default function Tables() {
  const [weekSlots, setWeekSlots] = useState(weekSlotsData());

  return (
    <>
      {Object.keys(weekSlots).map((day) => {
        const { from, to } = weekSlots[day];
        return (
          <>
            <ScrollView
              showsVerticalScrollIndicator={false}
              // style={{
              //   paddingTop: 30,
              //   paddingLeft: 20,
              //   backgroundColor: "#FFFACD",
              //   marginTop: 50,
              //   marginBottom: 70,
              // }}
            >
              {/* <Text style={styles.handleText}>SCHEDULE TABLE</Text> */}
              <View>
                <Text>{day}</Text>
                <Text>
                  {from} to {to}
                </Text>
              </View>
            </ScrollView>
          </>
        );
      })}
    </>
  );
}
const styles = StyleSheet.create({
  handleText: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 30,
  },
  nextButton: {
    width: 90,
    height: 40,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    left: 200,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    color: "white",
  },
  handleView: {
    width: "100%",
    maxWidth: 300,
    height: 50,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
