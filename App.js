import React from "react";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, View, Text, StyleSheet ,Image} from "react-native";
import Header from "./components/Header";
import Search from "./components/Searchbar";
import Chip from "./components/Chip";
import Viewthumbnail from "./components/Viewthumbnail";
import Viewcard from "./components/Viewcard";
import Detail from "./Detail";

const Stack =createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
         <Stack.Screen name="Details" component={DetailsScreen} ></Stack.Screen>

        </Stack.Navigator>
</NavigationContainer>
  );
}
function DetailsScreen() {
  return (
   <Detail />
  );
}
function HomeScreen({ navigation }){
  return(
    <ScrollView
    showsVerticalScrollIndicator={false}
    style={{
      left: 20,
      marginTop:20
    }}
  >

          <Header />
      <Search />
      <Chip />
      <View style={styles.handle}>
        <Text style={{ fontSize: 18 }}       
         onPress={() => navigation.navigate('Details')}>Near from you</Text>
        <Text style={styles.text}>See more</Text>
      </View>
      <Viewthumbnail />
      <View style={styles.handle2}>
        <Text style={{ fontSize: 18 }}>Best for you</Text>
        <Text style={styles.text}>See more</Text>
      </View>
      <Viewcard />
 
        </ScrollView>
  )
}

const styles = StyleSheet.create({
  handle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 20,
  },
  handle2: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "90%",
    marginTop: -45,
  },
  text: {
    fontSize: 14,
    color: "rgba(133, 133, 133, 1)",
  },
  handleview:{
    display:"flex",
    justifyContent:"space-between",
    flexWrap:"nowrap",
    flexDirection:"row",
    width:"90%",
    marginTop:20
},
handleview2:{
    display:"flex",justifyContent:"space-between",flexWrap:"nowrap",flexDirection:"row",width:"75%"
},
handleimg:{
    height: 70,
    width: 70,
    borderRadius:8
},
handleimg2:{
    height: 30,
    width: 20,
    top:-10,
    right:5
},
handleimg3:{
    height: 18,
    width: 18,
},
text:{
  color: "rgba(0, 0, 0, 1)",
  lineHeight:18.78,
 fontSize:16,
 fontWeight:"500",
 letterSpacing:0.1,
},
text2:{
color:"rgba(10, 142, 217, 1)",
lineHeight:20,
fontSize:12,
fontWeight:"400",
},
text3:{
    color:"rgba(133, 133, 133, 1)",
    lineHeight:20,
    fontSize:12,
    fontWeight:"400",
}
});

