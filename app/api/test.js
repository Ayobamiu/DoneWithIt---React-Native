import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";

function TestList(props) {
  const [{ email, password }, setText] = useState({ email: "", password: "" });
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        onChangeText={(txt) =>
          setText((currentText) => ({
            ...currentText,
            email: txt,
          }))
        }
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        onChangeText={(txt) =>
          setText((currentText) => ({
            ...currentText,
            password: txt,
          }))
        }
      />

      <Text>email: {email}</Text>
      <Text>password: {password}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  txt: {
    fontSize: 40,
  },
  textInput: {
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
  },
});
export default TestList;
