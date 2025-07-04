import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
   const { id } = useLocalSearchParams();
   const numberId = Number(id);
   console.table({
      id,
      type: typeof id,
      convertionType: typeof numberId,
   });
   return (
      <View
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
         }}
      >
         <Text style={styles.text}>ProductDetails - {id}</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      color: "blue",
   },
});
