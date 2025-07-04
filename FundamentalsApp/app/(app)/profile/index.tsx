import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
   const isLoggedIn = false; // Simulating a logged-in state

   if (!isLoggedIn) {
      return <Redirect href="/login" />;
   }
   return (
      <View style={styles.container}>
         <Text style={styles.homeText}>Profile</Text>
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
