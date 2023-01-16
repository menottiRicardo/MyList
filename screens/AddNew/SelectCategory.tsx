import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Platform, Pressable, StyleSheet } from "react-native";
import Category from "../../components/Category";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export type CategoryType = { key: string; name: string };
const categories: CategoryType[] = [
  { key: "work", name: "work" },
  { key: "work1", name: "work" },
  { key: "wor2k", name: "work" },
  { key: "work3", name: "work" },
  { key: "work4", name: "work" },
  { key: "work5", name: "work" },
  { key: "work6", name: "work" },
  { key: "work7", name: "work" },
];
export default function SelectCategory({ navigation }: { navigation: any }) {
  const [selectedCategory, setSelectedCategory] = useState<
    CategoryType | undefined
  >(undefined);
 

  const handleSelectCategory = (item: CategoryType) => {
    setSelectedCategory(item);
  };

  const handleNext = () => {
    if (selectedCategory) {
      navigation.navigate("todoDetails", { categoryId: selectedCategory.key });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {categories.map((item) => (
          <Category
            name={item.name}
            key={item.key}
            handleSelectCategory={handleSelectCategory}
            id={item.key}
            selected={selectedCategory}
          />
        ))}
      </View>

      <View style={styles.ButtonContainer}>
        <Pressable onPress={handleNext} style={{ borderWidth: 1, padding: 20 }}>
          <Text
            style={[
              styles.title,
              { color: selectedCategory !== undefined ? "white" : "#282828" },
            ]}
          >
            Next
          </Text>
        </Pressable>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      {/* <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    // backgroundColor: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  ButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  listContainer: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "white",
    marginTop: 30,
    justifyContent: "space-between",
  },
});
