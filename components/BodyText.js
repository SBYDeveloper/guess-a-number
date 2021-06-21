import React from "react";
import { StyleSheet, Text } from "react-native";

const BodyText = (props) => {
  return <Text style={styles.headerTitle}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
