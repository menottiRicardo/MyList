import React from "react";
import { Text, View } from "./Themed";
import { Platform, Pressable, StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
const Category = ({ name }: { name: string }) => {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        { borderColor: colorScheme === "dark" ? "white" : "black" },
      ]}
    >
      <Text style={styles.title}>{name}</Text>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    flex: 1,
    minWidth: 60,
    minHeight: 60,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
