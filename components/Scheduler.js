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
  // const [texthandle, setTexthandle] = useState(true); 
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(0);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("time");
  // const [show, setShow] = useState(false);
const [on,setOn]=useState({
fromValue:"enter"
})
  const [showPicker, setShowPicker] = useState({
    visible: false,
    slot: "MON",
    slotType: "from" || "to"
  });

  const updateValue = (key, data, day) => {                                                                                    
    const slots = { ...weekSlots };
     const currentSlot = slots[day];
    currentSlot[key] = data;
    slots[day] = currentSlot;
    setWeekSlots(slots);
// console.log(currentSlot)
// console.log(day);
// console.log(showPicker)


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

const onChange = (event, selectedDate) => {
  // alert("call")
  const currentDate = selectedDate || date;
  setShowPicker(Platform.OS === "ios");
  setDate(currentDate);
  let tempDate = new Date(currentDate);
  let  fTime= tempDate.getHours() + ":" + tempDate.getMinutes() ;
  // console.log(fTime)
  // setOn({handle:true,set:fTime})
  // console.log(on)
  //      updateValue(showPicker.slotType, on.set, showPicker.slot);
  //      setShowPicker({
  //       visible: false,
  //       slot: null,
  //       slotType: "from" || "to"
  //     })
  //     setOn({set:"null"})



//on
      let startTime,endTime;
        
      // here there is a boolean state which specify the slotType i.e
      // if  boolean state(text) is true then slotType  is from else   slotType is to .
    if(text === true)
     {
       let   from = fTime
        // console.log(String(from))
          // console.log(from)
       startTime = moment(from,"hh:mm")
       console.log(on)

       setOn({
         fromValue:startTime
       })
       console.log(on.fromValue)

       updateValue(showPicker.slotType, from, showPicker.slot);
       setText(false)
       setShowPicker({
        visible: false,
        slot: null,
        slotType: "from" || "to"
      })
    // alert(text)              
  }
  // here we are applying our logic for validation of time and for next page if time entered correctly 
  //  then it will pass the value in function for  state  being update for next page
  else{
    
       let to = fTime 
  
      // endTime = moment(to,"hh:mm" )
  // console.log(moment("13:00","hh:mm").isBefore(moment(to,"hh:mm")))
    if((on.fromValue).isBefore(moment(to,"hh:mm")) )

    {
      updateValue(showPicker.slotType,to, showPicker.slot)
    }else{

      alert( "Please fill time correctly")
              setCount2(count2-1)    
     }

    setText(true)
    // alert(text)
  } 
};
//move
const showMode = (currentMode) => {
  // setShow(true);
  // setMode(currentMode);

};

const showTimepicker = () => {
  // showMode("time");
};

  const SchedulerTime = (prop) => {
    return (
      <>
        {Object.keys(weekSlots).map((day) => {
          const { from, to, isEnabled } = weekSlots[day];
          
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
                    onPress={() =>
                      setShowPicker({ visible: true, slot: day, slotType: "from" })      
                    }
                      // onPress={showTimepicker}
                      style={styles.button}
                    >
                      <Text>{from}{ from  < '12:00' ? 'AM' : from < '1:00'  ? 'PM': from === null ? null :'AM' }</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      // onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                      <Text>{from}{ from  < '12:00' ? 'AM' : from < '1:00'  ? 'PM': from === null ?null : 'AM' }</Text>
                    </TouchableOpacity>
                  )}

                  <Text style={styles.labelStyle}>to</Text>
                  {isEnabled ? (
                    <TouchableOpacity
                      // onPress={showTimepicker}
                      onPress={() =>
                        setShowPicker({ visible: true, slot: day, slotType: "to" })
                      }
                      style={styles.button}
                    >
                      <Text>{to} { to  < '12:00' ? 'AM' : to < '1:00'  ? 'PM': to === null ? null :'AM' }</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      // onPress={showTimepicker}
                      style={styles.button}
                      disabled
                    >
                     <Text>{to} { to  < '12:00' ? 'AM' : to < '1:00'  ? 'PM': to === null ? null :'AM' }</Text>
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
                      {showPicker.visible && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={new Date()}          
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                      
                    />
         )}
     
        { ((count*2)   === (count2) ) || ((count*3)   === (count2) ) || ((count*4)   === (count2) ) || count ===0  ?
        <TouchableOpacity style={styles.nextButton}>
          
            <Text
              style={styles.textStyle}
              onPress={() => prop.navigation.navigate("ScheduleTable")}
            >
              Next
            </Text>
          </TouchableOpacity> :   <TouchableOpacity style={styles.nextButton} 
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
