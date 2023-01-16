import React from "react";
import { Text, View } from "./Themed";
import { Platform, Pressable, StyleSheet } from "react-native";
import useColorScheme from "../hooks/useColorScheme";
import { CategoryType } from "../screens/AddNew/SelectCategory";
const Category = ({
  name,
  handleSelectCategory,
  id,
  selected,
}: {
  name: string;
  handleSelectCategory: (item: CategoryType) => void;
  id: string;
  selected: CategoryType | undefined;
}) => {
  const colorScheme = useColorScheme();
  return (
    <Pressable
      onPress={() => {
        handleSelectCategory({ name, key: id });
      }}
    >
      <View
        style={[
          styles.container,
          { borderColor: colorScheme === "dark" ? "white" : "black" },
        ]}
      >
        {selected?.key === id && <View style={styles.selected} />}

        <Text style={styles.title}>{name}</Text>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    margin: 8,
    paddingRight: 10,
    paddingLeft: 10,
    minHeight: 80,
    borderWidth: 1,
    borderRadius: 8,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    right: -1,
    width: 20,
    height: 20,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 3,
  },
});
