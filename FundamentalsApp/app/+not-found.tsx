import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function NotFound() {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>NotFound</Text>
         <Link href={"/"}>
            <Text style={styles.text}>Go to Home</Text>
         </Link>
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
