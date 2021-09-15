import React, { useState } from "react";
import {
  View,
  Button,
  Platform,
  TextInput,
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
  CheckBox,
} from "react-native";  
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import weekSlotsData from "../utils/SchedulerData";
export default function Scheduler(prop) {
  const [weekSlots, setWeekSlots] = useState(weekSlotsData());
  const [text, setText] = useState(true); 
  const [count,setCount] = useState(0);

  const [count2,setCount2] = useState(0);

  // const updateValue = (key, data, day) => {                                                                                    
  //   const slots = { ...weekSlots };
  //   const currentSlot = slots[day];
  //   currentSlot[key] = data;
  //   slots[day] = currentSlot;
  //   setWeekSlots(slots);
  //   console.log(slots)
  //   console.log(currentSlot)
  //   console.log(key);
  //   console.log(data);
  //   console.log(day);
  // };
  const SchedulerTime = (prop) => {
    return (
      <>
        {Object.keys(weekSlots).map((day) => {
          const { from, to, isEnabled } = weekSlots[day];
          const updateValue = (key, data, day) => {                                                                                    
            const slots = { ...weekSlots };
             const currentSlot = slots[day];
            currentSlot[key] = data;
            slots[day] = currentSlot;
            setWeekSlots(slots);
    console.log(currentSlot)
    console.log(day);
    if(key === "isEnabled" && data === true ){
      setCount(count+1)
    }
    else if(key === "isEnabled" && data === false ){
      setCount(count-1)
    }
     else if(count ===7 && ((key === "from" && data !=null  ) ||  (key === "to" && data !=null  )) ){
      setCount2(count2+1)
    }
    else if(count !=7 && ((key === "from" && data ===null  ) ||  (key === "to" && data ===null  )))
    setCount2(count2-1)
  };
          const [date, setDate] = useState(new Date(1598051730000));
          const [mode, setMode] = useState("date");
          const [show, setShow] = useState(false);
          const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === "ios");
            setDate(currentDate);
            let tempDate = new Date(currentDate);
             let fTime= tempDate.getHours() + ":" + tempDate.getMinutes();
            if(text === true)
               {
                let from = fTime 
                updateValue("from",from,day)
                setText(false)
              // alert(text)
            }
            else{
              let to = fTime 
              updateValue("to",to,day)
              setText(true)
              // alert(text)

            } 
          };
          const showMode = (currentMode) => {
            setShow(true);
            setMode(currentMode);
          };

          const showTimepicker = () => {
            showMode("time");
          };

          let m = moment(from, "HH:mm");
          let m2 = moment(to, "HH:mm");

          return (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 20 }}
                key={day}
              >
                <View style={styles.handleView}>
                  <Text
                    style={styles.labelStyle}
                    // onPress={click}
                  >
                    {day}
                  </Text>
                  {isEnabled ? (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                    >
                      <Text>{from} </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                      <Text>{from} </Text>
                    </TouchableOpacity>
                  )}
                  {moment(m2).isAfter(from) ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      Please Fill in correct format
                    </Text>
                  ) : null}
                  <Text style={styles.labelStyle}>to</Text>
                  {isEnabled ? (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                    >
                      <Text>{to}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                      <Text>{to}</Text>
                    </TouchableOpacity>
                  )}
                  {moment(m).isBefore(to) ? (
                    <Text
                      style={{
                        fontSize: 16,
                        color: "white",
                        backgroundColor: "black",
                      }}
                    >
                      Please Fill in correct format
                    </Text>
                  ) : null}
                  <Switch
                    trackColor={{ false: "black", true: "red" }}
                    thumbColor={isEnabled ? "white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onChange={() => updateValue("isEnabled",!isEnabled, day)}
                    value={isEnabled}
                  />
                  <Text>{isEnabled ? "OPEN" : "CLOSED"}</Text>
        <Text>{count}</Text>
        <Text>{count2}</Text>

                  {show && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}          
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    />
         )}
     
                </View>
              </ScrollView>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          paddingTop: 30,
          paddingLeft: 20,
          backgroundColor: "#FFFACD",
          marginTop: 50,
        }}
      >
        <Text style={styles.handleText}>SCHEDULE</Text>
        <SchedulerTime />
        {(count === 7 && count2 === 14) ?
        <TouchableOpacity style={styles.nextButton}>
            <Text
              style={styles.textStyle}
              onPress={() => prop.navigation.navigate("ScheduleTable")}
            >
              Next
            </Text>
          </TouchableOpacity> :       <TouchableOpacity style={styles.nextButton} disabled>
            <Text
              style={styles.textStyle}
            >
              Next
            </Text>
          </TouchableOpacity> 
 }
      </ScrollView>
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
    left: 240,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 20,
    color: "white",
  },
  handleView: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    maxWidth: 340,
  },
  button: {
    width: 85,
    borderWidth: 1,
    height: 30,
    borderColor: "lightgrey",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyle: {
    color: "grey",
  },
});
