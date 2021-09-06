
import React from "react";
import { ScrollView} from "react-native";
import Head from "./component/Head";
import Section from "./component/Section";
import Viewgallery from "./component/Viewgallery";
export default function Detail() {
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