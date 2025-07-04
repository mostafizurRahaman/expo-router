import { Slot } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DiscountProductLayout() {
   return (
      <View style={styles.container}>
         <View
            style={{
               backgroundColor: "red",
               width: "100%",
               padding: 20,
               borderRadius: 10,
            }}
         >
            <Text style={styles.text}>Featured Products</Text>
         </View>
         <Slot />
         <View
            style={{
               backgroundColor: "red",
               width: "100%",
               padding: 20,
               borderRadius: 10,
            }}
         >
            <Text style={styles.text}>Discount Product Layout</Text>
         </View>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,

      justifyContent: "center",
      gap: 20,
      padding: 20,
      backgroundColor: "cyan",
      width: "100%",
   },
   text: {
      fontSize: 20,
      color: "white",
      textAlign: "center",
   },
});
