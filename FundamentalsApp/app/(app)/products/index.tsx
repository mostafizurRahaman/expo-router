import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ProductList() {
   return (
      <View
         style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
         }}
      >
         <Text>ProductList</Text>
         {/*  Relative Navigation  */}
         <Link href="./1" relativeToDirectory>
            <Text style={{ fontSize: 20, color: "blue" }}>Product 1</Text>
         </Link>
         <Link
            href={{
               pathname: "/products/[id]",
               params: { id: "2" }, // This will navigate to /products/1
            }}
         >
            <Text style={{ fontSize: 20, color: "blue" }}>Product 2</Text>
         </Link>
         <Link href={{ pathname: "/products/[id]", params: { id: "3" } }}>
            <Text style={{ fontSize: 20, color: "blue" }}>Product 3</Text>
         </Link>
         <Link
            href={{
               pathname: "/products/[id]",
               params: { id: "4" }, // This will navigate to /products/1
            }}
         >
            <Text style={{ fontSize: 20, color: "blue" }}>Product 4</Text>
         </Link>

         <Link href="/products/best-sellers/mouse/1">
            <Text style={{ fontSize: 20, color: "blue" }}>best seller</Text>
         </Link>
         <Link href="/products/favorite/mouse/1">
            <Text style={{ fontSize: 20, color: "blue" }}>fovorite</Text>
         </Link>
         <Link href="/products/mouse/1">
            <Text style={{ fontSize: 20, color: "blue" }}>from search</Text>
         </Link>
         <Link
            href={{
               pathname: "/products/[id]",
               params: { id: "mouse" }, // ✅ use param-based routing
            }}
         >
            <Text style={{ fontSize: 20, color: "blue" }}>Direct Product</Text>
         </Link>
      </View>
   );
}

const styles = StyleSheet.create({});
