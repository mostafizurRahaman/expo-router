import { Link, router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
export default function Home() {
   return (
      <View style={styles.container}>
         <Text style={styles.homeText}>Home</Text>
         <Link href={"/profile"}>
            <Text style={styles.profiletext}>Go to Profile</Text>
         </Link>
         <Link href={"/about"}>
            <Text style={styles.profiletext}>Go to about</Text>
         </Link>
         <Link href={"/products"}>
            <Text style={styles.profiletext}>Product</Text>
         </Link>
         {/* <Link href={"/missing-page"}>
            <Text style={styles.profiletext}>Missing Page</Text>
         </Link> */}
         <Link href={"./login"} asChild>
            <Pressable style={styles.button}>
               <Text style={styles.buttonText}>Login</Text>
            </Pressable>
         </Link>
         <Link href={"/register"}>
            <Text style={styles.profiletext}>register</Text>
         </Link>
         <Link href={"/forgot-password"}>
            <Text style={styles.profiletext}>forgot-password</Text>
         </Link>

         {/*  Router  */}
         <Text
            style={{
               fontSize: 16,
            }}
            onPress={() => router.push("/profile")}
         >
            Replace and Go Profile
         </Text>
         <Text
            style={{
               fontSize: 16,
            }}
            onPress={() => router.push("/profile")}
         >
            Push to profile
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
   },
   homeText: {
      fontSize: 80,
      fontWeight: "bold",
      color: "#000",
   },
   profiletext: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#e92124",
   },
   aboutText: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#e92124",
   },
   button: {
      paddingHorizontal: 30,
      paddingVertical: 10,
      backgroundColor: "#e92124",

      borderRadius: 5,
   },
   buttonText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
   },
});
