import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPassword() {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Forgot Password</Text>
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
