
// import React,{useState} from "react"
// import {View, Button, Platform,TextInput,Switch,ScrollView,StyleSheet,Text,TouchableOpacity, Alert,CheckBox} from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import moment from "moment";
// import weekSlotsData from "../utils/SchedulerData";
// export default function Scheduler(prop) {
//   const [weekSlots, setWeekSlots] = useState(weekSlotsData());

//   const updateValue = (key, data, day) => {
//     const slots = { ...weekSlots };
//     const currentSlot = slots[day];
//     currentSlot[key] = data;
//     slots[day] = currentSlot;
//     setWeekSlots(slots);
//     console.log(key);
//     console.log(data);
//     console.log(day);
//   };

  
//   const SchedulerTime = (prop) => {
//     return (<>
// {Object.keys(weekSlots).map((day) => {
//         const { from, to, isEnabled } = weekSlots[day];
// // const [name, setIsEnabled] = useState(false);
// //  console.log(name)
// //  const toggleSwitch = () => updateValue(!isEnabled);

//    const [date, setDate] = useState(new Date(1598051730000));
//    const [mode, setMode] = useState('date');
//    const [show, setShow] = useState(false);
//    const [text,setText] = useState('');
//    const onChange = (event, selectedDate) => {
//      const currentDate = selectedDate || date;
//      setShow(Platform.OS === 'ios');
//      setDate(currentDate); 
//    let tempDate = new Date (currentDate);
//    // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//    let fTime =  tempDate.getHours() + ':' + tempDate.getMinutes() ;
//    setText( fTime)

//  };
  
//    const showMode = (currentMode) => {
//      setShow(true);
//      setMode(currentMode);
//    };
 

//    const showTimepicker = () => {
//      showMode('time');
//    };

//  // second timer
//  const [dat, setDat] = useState(new Date(1598051730000));
//  const [mod, setMod] = useState('date');
//  const [sho, setSho] = useState(false);
//  const [tex,setTex] = useState('');

//  const onChanges = (event, selectedDate) => {
//    const currentDat = selectedDate || date;
//    setSho(Platform.OS === 'ios');
//    setDat(currentDat);


//  let tempDat = new Date (currentDat);
//  let fTime =  tempDat.getHours() + ':' + tempDat.getMinutes() ;
//  setTex( fTime)
//  // fDate + '\n' +
//  // console.log(fDate + ' ( ' + fTime + ')')
//  let text = moment(text,'HH:mm')
//  let  tex = moment(tex,'HH:mm')
// if(moment(tex).isBefore(text)){
//   return null;
// }
// else return console.log(tex.isBefore(text))
// };


//  const showMod = (currentMod) => {
//    setSho(true);
//    setMod(currentMod);
//  };

//  const showDatepicker = () => {
//    showMode('date');
//  };

//  const showTimepicke = () => {
//    showMod('time');
//  };

//         return(
//           <>
          
//  <ScrollView
//           showsVerticalScrollIndicator={false}
//           style={{marginBottom:20}}
//           key={day}
//         >
//       <View style={styles.handleView} >
//         <Text style={styles.labelStyle}         
//             // onPress={click} 
// >{day}</Text>
//       {isEnabled ?  <TouchableOpacity onPress={showTimepicker} style={styles.button}  >
//             <Text>{text} </Text>  
//              </TouchableOpacity>  :  <TouchableOpacity onPress={showTimepicker} style={styles.button} disabled  >
//             <Text>{text} </Text>  
//              </TouchableOpacity>
//   }
//         <Text style={styles.labelStyle}>to</Text>
//       {isEnabled ?  <TouchableOpacity onPress={showTimepicke} style={styles.button}  >
        
//             <Text>{tex}</Text>  
//              </TouchableOpacity> :<TouchableOpacity onPress={showTimepicke} style={styles.button}  disabled>
//             <Text>{tex}</Text>  
//              </TouchableOpacity>
//   }
//         <CheckBox
//           trackColor={{ false: "black", true: "red" }}
//           thumbColor={isEnabled ? "white" : "white"}
//           ios_backgroundColor="#3e3e3e"
//           onChange={() => updateValue(!isEnabled,day)}
//           value={isEnabled}
//         />
//         <Text>{isEnabled ? "OPEN"  :"CLOSED"}</Text>
//         {show && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode={mode}
//             is24Hour={true}
//             display="default"
//             onChange={onChange}
//           />
//         )}
//             {sho && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={dat}
//             mode={mod}
//             is24Hour={true}
//             display="default"
//             onChange={onChanges}
//           />
//         )}
//       </View>
//       {/* {isEnabled === true  ?
//         <TouchableOpacity style={styles.nextButton}>
//               <Text style={styles.textStyle} 
//               onPress={()=> prop.navigation.navigate('ScheduleTable')}

//               >Next</Text>
//           </TouchableOpacity> : null
// } */}
//       </ScrollView>
//                 </>
//         )
//       })}
        
//   </>  );
//   };
  
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{
//           paddingTop: 30,
//           paddingLeft:20,
//           backgroundColor:"#FFFACD",
//           marginTop:50
//         }}
//       >
//             <Text style={styles.handleText}>SCHEDULE</Text>

//           <SchedulerTime  />   
//        {/* {name === true|| name === f ?
//         <TouchableOpacity style={styles.nextButton}>
//               <Text style={styles.textStyle} 
//               onPress={()=> prop.navigation.navigate('ScheduleTable')}

//               >Next</Text>
//           </TouchableOpacity> :  <TouchableOpacity style={styles.nextButton}>
//               <Text style={styles.textStyle} 

//               >Press Day</Text>
//           </TouchableOpacity> 
// } */}
//       </ScrollView>
//     );
//   }
//   const styles = StyleSheet.create({
//     handleText:{
//       fontSize:22,
//       fontWeight:"900",
//     marginBottom:30
//     },
//     nextButton:{
//         width:90,
//         height:40,
//         backgroundColor:"red",
//         borderRadius:20,
//         justifyContent:"center",
//         alignItems:"center",
//         left:240,
//         marginBottom:10
//     },
//     textStyle:{
//         fontSize:20,
//         color:"white",
//     },
//     handleView:{
//       display:"flex",
//       flexWrap:"wrap",
//       flexDirection:"row",
//       justifyContent:"space-around",
//       alignItems:"center",
//       width:"100%",
//       maxWidth:340
//     },
//     button:{
//       width:85,
//       borderWidth:1,
//       height:30,
//       borderColor:"lightgrey",
//       borderRadius:10,
//       justifyContent:"center",
//       alignItems:"center"
//     },
//     labelStyle:{
//       color:"grey"
//     }
//   })