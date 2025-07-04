import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CatchAllSegment() {
   const { rest } = useLocalSearchParams<{ rest: string[] }>();
   return (
      <View style={styles.container}>
         <Text>CatchAllSegment</Text>
         <Text style={styles.text}>
            {rest ? `Rest params: ${rest.join(", ")}` : "No rest params"}{" "}
         </Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      padding: 20,
   },
   text: {
      fontSize: 20,
      color: "black",
   },
});
