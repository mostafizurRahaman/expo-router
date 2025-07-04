import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Register() {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Register</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "cyan",
      padding: 20,
   },
   text: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
   },
});
