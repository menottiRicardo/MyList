import React, { useState } from "react";
import { Text, View } from "../../components/Themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import useColorScheme from "../../hooks/useColorScheme";
const FillDetails = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const [details, setDetails] = useState<string | undefined>(undefined);
  const colorScheme = useColorScheme();
  const { categoryId, categoryName } = route.params;
  const handleSave = async () => {
    try {
      // get old value
      const rawOldValue = await AsyncStorage.getItem(categoryId);
      const today = new Date();
      if (rawOldValue !== null) {
        // value previously stored
        const oldValue = JSON.parse(rawOldValue);

        const newValue = JSON.stringify([
          ...oldValue,
          {
            name: details,
            category: categoryName,
            createdAt: today.toDateString(),
          },
        ]);
        await AsyncStorage.setItem(categoryId, newValue);
        navigation.navigate("Root");
      } else {
        // if dont have data
        const newValue = JSON.stringify([
          {
            name: details,
            category: categoryName,
            createdAt: today.toDateString(),
          },
        ]);
        await AsyncStorage.setItem(categoryId, newValue);
        navigation.navigate("Root");
      }

      alert("saved!");
    } catch (e) {
      // saving error
      alert("try again");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View
          style={[{ justifyContent: "center", alignItems: "center", flex: 1 }]}
        >
          <View
            style={[
              styles.inputContainer,
              { borderColor: colorScheme === "dark" ? "white" : "black" },
            ]}
          >
            <TextInput
              style={[
                styles.textInput,
                { color: colorScheme === "dark" ? "white" : "black" },
              ]}
              value={details}
              onChangeText={(e) => setDetails(e)}
              placeholder="Task's name"
              placeholderTextColor={"#282828"}
            />
          </View>
        </View>

        <View style={styles.ButtonContainer}>
          <Pressable
            style={{ borderWidth: 1, padding: 20 }}
            onPress={handleSave}
          >
            <Text
              style={[
                styles.title,
                { color: details !== undefined ? "white" : "#282828" },
              ]}
            >
              Save
            </Text>
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 30,
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
    paddingLeft: 3,
    height: 50,
    justifyContent: "center",
    marginBottom: 20,
    width: "90%",
  },
  textInput: {
    flex: 1,
    fontSize: 25,
  },
  ButtonContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",

    // backgroundColor: "blue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleInput: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default FillDetails;
