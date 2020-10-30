import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { useFetch } from "./useFetch";

function TestList(props) {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  return (
    <View style={styles.container}>
      <Button
        title="New Fact"
        onPress={() => setCount(Math.floor(Math.random() * 100))}
      />

      <View style={styles.fact}>
        <Text style={styles.txt}>{loading ? "Loading..." : data}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  txt: {
    fontSize: 30,
  },
  textInput: {
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
  },
  fact: {
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 10,
    padding: 10,
    borderRadius: 2,
  },
});
export default TestList;
