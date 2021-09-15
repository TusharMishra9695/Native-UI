
import React from "react";
import { ScrollView,Text,StyleSheet} from "react-native";
import Scheduler from "../components/Scheduler";
export default function SchedulerScreen({navigation}) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <Scheduler navigation={navigation} />
      </ScrollView>
    );
  }