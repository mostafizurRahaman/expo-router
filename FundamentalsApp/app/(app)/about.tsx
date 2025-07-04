import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function About() {
   return (
      <View style={styles.container}>
         <Text style={styles.homeText}>About</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
   },
   homeText: {
      fontSize: 80,
      fontWeight: "bold",
      color: "#000",
   },
});
