import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Login() {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>Login</Text>

         {/*  Router  */}
         <Text
            style={{
               fontSize: 25,
            }}
            onPress={() => router.push("/profile")}
         >
            Replace and Go Profile
         </Text>
         <Text
            style={{
               fontSize: 25,
               color: "red",
            }}
            onPress={() => router.replace("/profile")}
         >
            Push to profile
         </Text>
         <Text
            style={{
               fontSize: 25,
               color: "red",
            }}
            onPress={() => router.back()}
         >
            Back to Home
         </Text>
         <Text
            style={{
               fontSize: 25,
               color: "red",
            }}
            onPress={() => {
               if (router.canGoBack()) {
                  router.back();
               }
            }}
         >
            Can Go Back
         </Text>
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
      gap: 20,
   },
   text: {
      fontSize: 20,
      color: "black",
      textAlign: "center",
   },
});
