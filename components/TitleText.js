import React from "react";
import { StyleSheet, Text } from "react-native";

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.headerTitle, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "open-sans-bold",
  },
});

export default TitleText;
