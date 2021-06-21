import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../constants/colors";
import TitleText from "./TitleText"

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: Color.white,
    fontSize: 18
  },
});

export default Header;
