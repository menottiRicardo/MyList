import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Platform, Pressable, StyleSheet } from "react-native";
import Category from "../../components/Category";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function SelectCategory() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Category name="Work"/>
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

      <Pressable onPress={() => navigation.navigate("todoDetails")}>
        <Text style={styles.title}>Next</Text>
      </Pressable>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
