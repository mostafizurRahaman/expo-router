import { Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
   return (
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }}>
         <View
            style={{
               backgroundColor: "blue",
            }}
         >
            <Text
               style={{
                  fontSize: 30,

                  color: "white",
                  textAlign: "center",
                  padding: 10,
               }}
            >
               Our Fundamental App
            </Text>
         </View>
         <Slot />

         <View
            style={{
               backgroundColor: "orange",
            }}
         >
            <Text
               style={{
                  fontSize: 30,

                  color: "white",
                  textAlign: "center",
                  padding: 10,
               }}
            >
               @mostafizur
            </Text>
         </View>
      </SafeAreaView>
   );
}
