import { Slot } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function AuthLayout() {
   return (
      <View
         style={{
            flex: 1,

            gap: 40,
            width: "100%",
         }}
      >
         <Image
            style={{
               margin: "auto",
            }}
            blurRadius={1}
            source={require("@/assets/images/react-logo.png")}
         />
         <Slot />
      </View>
   );
}

const styles = StyleSheet.create({});
