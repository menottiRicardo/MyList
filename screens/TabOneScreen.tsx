import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";
import { Pressable, RefreshControl, ScrollView, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
  route,
}: RootTabScreenProps<"TabOne">) {
  const [storedData, setStoredData] = useState<any[]>();
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    const data: any = [];
    try {
      const values = await AsyncStorage.multiGet([
        "copa",
        "restfully",
        "palco",
        "control_risks",
      ]);

      console.log("values", values);

      if (values !== null || values !== undefined) {
        values.map((value) => {
          if (value[1] !== null) {
            const val = JSON.parse(value[1] as any);
            data.push(...val);
          }
        });
      }
      console.log("data", data);
      setStoredData(data);
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    getData();
  }, [route.key, refreshing]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.container}
    >
      <View style={{ flex: 1, paddingTop: 10 }}>
        <Text style={styles.title}>
          You Have {storedData?.length} Remaining Tasks
        </Text>
      </View>

      <View style={{ flex: 5, width: "90%" }}>
        {storedData &&
          storedData.map((data: any) => (
            <Pressable>
              <View key={data.name} style={styles.taskContainer}>
                <Text style={styles.categoryTitle}>
                  {data.category} - {data?.createdAt}
                </Text>
                <View
                  style={styles.separator}
                  lightColor="#eee"
                  darkColor="rgba(255,255,255,0.1)"
                />
                <Text style={styles.title}>{data.name}</Text>
              </View>
            </Pressable>
          ))}
      </View>
    </ScrollView>
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
    marginVertical: 5,
    height: 1,
    width: "80%",
  },
  categoryTitle: {
    fontSize: 16,
  },
  taskContainer: {
    marginBottom: 20,
  },
});
