// import React, {useState} from 'react';
// import {View, Button, Platform,TextInput,Switch,ScrollView,StyleSheet,Text,TouchableOpacity} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export const App = (prop) => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);
//   const [text,setText] = useState('');
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);


//   let tempDate = new Date (currentDate);
//   // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//   let fTime =  tempDate.getHours() + ':' + tempDate.getMinutes() + ' AM';
//   setText( fTime)
//   // fDate + '\n' +
//   // console.log(fDate + ' ( ' + fTime + ')')
// };
 
//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   // const showDatepicker = () => {
//   //   showMode('date');
//   // };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   // second timer
//   const [dat, setDat] = useState(new Date(1598051730000));
//   const [mod, setMod] = useState('date');
//   const [sho, setSho] = useState(false);
//   const [tex,setTex] = useState('');

//   const onChanges = (event, selectedDate) => {
//     const currentDat = selectedDate || date;
//     setSho(Platform.OS === 'ios');
//     setDat(currentDat);


//   let tempDat = new Date (currentDat);
//   // let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
//   let fTime =  tempDat.getHours() + ':' + tempDat.getMinutes() + ' PM';
//   setTex( fTime)
//   // fDate + '\n' +
//   // console.log(fDate + ' ( ' + fTime + ')')
// };
 
//   const showMod = (currentMod) => {
//     setSho(true);
//     setMod(currentMod);
//   };

//   // const showDatepicker = () => {
//   //   showMode('date');
//   // };

//   const showTimepicke = () => {
//     showMod('time');
//   };

//   return (<>
//         <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={{marginBottom:20}}
//       >
//     <View style={styles.handleView} >
//       <Text style={styles.labelStyle}>{prop.data}</Text>
//     {isEnabled ?  <TouchableOpacity onPress={showTimepicker} style={styles.button}  >
//           <Text>{text} </Text>  
//            </TouchableOpacity> :  <TouchableOpacity onPress={showTimepicker} style={styles.button} disabled  >
//           <Text>{text} </Text>  
//            </TouchableOpacity>
// }
//       <Text style={styles.labelStyle}>to</Text>
//     {isEnabled ?  <TouchableOpacity onPress={showTimepicke} style={styles.button}  >
//           <Text>{tex}</Text>  
//            </TouchableOpacity> :<TouchableOpacity onPress={showTimepicke} style={styles.button}  disabled>
//           <Text>{tex}</Text>  
//            </TouchableOpacity>
// }
//       <Switch
//         trackColor={{ false: "black", true: "red" }}
//         thumbColor={isEnabled ? "white" : "white"}
//         ios_backgroundColor="#3e3e3e"
//         onValueChange={toggleSwitch}
//         value={isEnabled}
//       />
//       <Text>{isEnabled ? "ON" :"OFF"}</Text>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//           {sho && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={dat}
//           mode={mod}
//           is24Hour={true}
//           display="default"
//           onChange={onChanges}
//         />
//       )}
//     </View>
//     </ScrollView>
// </>  );
// };
// const styles = StyleSheet.create({
//   handleView:{
//     display:"flex",
//     flexWrap:"wrap",
//     flexDirection:"row",
//     justifyContent:"space-around",
//     alignItems:"center",
//     width:"100%",
//     maxWidth:340
//   },
//   button:{
//     width:85,
//     borderWidth:1,
//     height:30,
//     borderColor:"lightgrey",
//     borderRadius:10,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   labelStyle:{
//     color:"grey"
//   }
// })