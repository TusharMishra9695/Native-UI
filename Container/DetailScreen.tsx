
import React from "react";
import { ScrollView} from "react-native";
import Head from "../components/DetailScreenHead";
import Section from "../components/DetailScreenSection";
import Viewgallery from "../components/DetailScreenViewgallery";
export default function DetailScreen() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          left: 10,
          marginTop: 20,
      
        }}
      >
    <Head />
    <Section />
    <Viewgallery />
      </ScrollView>
    );
  }