import React from "react";
import { View, StyleSheet, Image } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [] }) {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <ImageInput imageUri={uri} onChangeImage={}/>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default ImageInputList;
