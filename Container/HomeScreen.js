import React from "react";
import Header from '../components/Header';
import Search from "../components/Searchbar";
import Chip from "../components/Chip";
import Viewthumbnail from "../components/Viewthumbnail";
import Viewcard from "../components/Viewcard";
import { ScrollView, View, Text, StyleSheet } from "react-native";


export default function HomeScreen({ navigation }){
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
        <View style={styles.handleView}>
          <Text style={{ fontSize: 18 }}       
           onPress={() => navigation.navigate('Details')}>Near from you</Text>
          <Text style={styles.labelStyle}>See more</Text>
        </View>
        <Viewthumbnail />
        <View style={styles.handleViewStyle}>
          <Text style={{ fontSize: 18 }}>Best for you</Text>
          <Text style={styles.labelStyle}>See more</Text>
        </View>
        <Viewcard />
   
          </ScrollView>
    )
  }
  const styles = StyleSheet.create({
    handleView: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "90%",
      marginTop: 27,
    },
    handleViewStyle: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      width: "90%",
      marginTop: -45,
    },
    labelStyle: {
      fontSize: 14,
      color: "rgba(133, 133, 133, 1)",
    },

  });
  
  