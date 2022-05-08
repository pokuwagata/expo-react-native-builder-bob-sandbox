import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { NativeModules, StyleSheet, Text, View } from "react-native";
import { multiply } from "react-native-awesome-module";
import "expo-dev-client";

export default function App() {
  // const { AwesomeModule } = NativeModules;
  const [result, setResult] = useState<number | undefined>();

  useEffect(() => {
    // AwesomeModule.multiply(3, 7).then(setResult);
    multiply(4, 7).then(setResult);
  }, []);
  // useEffect(() => {
  //   (async () => {
  //     const ans = await multiply(2, 2);
  //     // console.log(1);
  //   })();
  // }, []);
  return (
    <View style={styles.container}>
      <Text>{result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
