import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen({ navigation }: any) {
  const handleClearStorage = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate("Root");
      alert("Cleared!");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.ButtonContainer}>
        <Pressable
          style={{ borderWidth: 1, padding: 20 }}
          onPress={handleClearStorage}
        >
          <Text style={[styles.title]}>Clear Storage</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  ButtonContainer: {
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",

    // backgroundColor: "blue",
  },
});
