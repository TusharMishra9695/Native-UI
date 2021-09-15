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
  const [texthandle, setTexthandle] = useState(true); 
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
   

    // Here function accept the value which are passed in logic of next page and accordingly accept update
    // the state of count for next page logic which are applied in next page button
    if(key === "isEnabled" && data === true ){
      setCount(count+1)
    }
    else if(key === "isEnabled" && data === false ){
      setCount(count-1)
      if(text === true){
      let from = null
      updateValue("from",from,day)
      let to = null
      updateValue("to",to,day)
      }
    }
     else if( ((key === "from" && data !==null  ) ||  (key === "to" && data !=null  )) ){
       
      setCount2(count2+1)
       
    }     else if( ((key === "from" && data ===null  ) ||  (key === "to" && data ===null  )) ){
       
      setCount2(count2-1)
       
    }

  };

  // Functions and state is declared inside the map because in the onchange function if we declare it outside  the map then 'day' is not accessable 
  // due to which we declare it inside map 

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
          const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            setShow(Platform.OS === "ios");
            setDate(currentDate);
            let tempDate = new Date(currentDate);
             let fTime= tempDate.getHours() + ":" + tempDate.getMinutes() ;
                let startTime,endTime,startTime2,endTime2;      
                // here there is a boolean state which specify the slotType i.e
                // if  boolean state(text) is true then slotType  is from else   slotType is to . 
              if(text === true)
               {
                let from = fTime
                 startTime = moment(from,"HH:mm")
                 startTime2 = moment(from, "hh:mm")

                updateValue("from",from,day)                
                setText(false)
              // alert(text)
            }
            // here we are applying our logic for validation of time and for next page if time entered correctly 
            //  then it will pass the value in function for  state  being update for next page
            else{
              
              let to = fTime 
               endTime = moment(to,"HH:mm" )
               endTime2 = moment(to,"hh:mm" )
              {
                moment( endTime2).isAfter(startTime2) ||  moment( startTime2).isAfter(endTime2)  ?
                updateValue("to",to,day)     
                : (  alert( "Please fill time correctly"),
                        setCount2(count2-1))
          
               }
              
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
          // alert(data)
// {
//   data != true ?  updateValue("from",from,day)  : null
// }

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
                    
                  >
                    {day}
                  </Text>
                  {isEnabled ? (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                    >
                      <Text>{from}{from ? 'AM' :null}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                      <Text>{from}{from ? 'AM' :null}</Text>
                    </TouchableOpacity>
                  )}
               
                  <Text style={styles.labelStyle}>to</Text>
                  {isEnabled ? (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                    >
                      <Text>{to} {to ? 'PM' :null}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                      <Text>{to} {to ? 'PM' :null}</Text>
                    </TouchableOpacity>
                  )}
                  <Switch
                    trackColor={{ false: "black", true: "red" }}
                    thumbColor={isEnabled ? "white" : "white"}
                    ios_backgroundColor="#3e3e3e"
                    onChange={() => updateValue("isEnabled",!isEnabled, day)}
                    value={isEnabled}
                  />
                  <Text>{isEnabled ? "OPEN" : "CLOSED"}</Text>
        {/* <Text>{count}</Text>
        <Text>{count2}</Text> */}

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
        {/* <Text>{count2}</Text> */}
        {/* here we select the two state i.e count and count2 and the intention is if all the buttons are closed and also count is equal to zero then go for next page 
        or if count is multiple of 2 which is equal to count 2 the go for next page and multiple of 2 is applied because there are seven switch and
         forteen input field for date time picker  so everything is in multiple of two .
           */}
        { ((count*2)   === (count2) ) || ((count*4)   === (count2) ) || count ===0  ?
        <TouchableOpacity style={styles.nextButton}>
            <Text
              style={styles.textStyle}
              onPress={() => prop.navigation.navigate("ScheduleTable")}
            >
              Next
            </Text>
          </TouchableOpacity> :       <TouchableOpacity style={styles.nextButton} 
          onPress={() => alert("Please select time for all open slots ")
        
        }
          >
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
