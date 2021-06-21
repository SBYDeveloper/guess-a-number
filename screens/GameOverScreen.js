import React from "react";
import { StyleSheet, View, Dimensions, Image, Text } from "react-native";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          style={styles.image}
          resizeMode="cover"
          source={require("../assets/success.png")}
          // source={{uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'}}
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.resultsText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: Dimensions.get('window').width - (Dimensions.get('window').width * 0.3),
    maxWidth: '80%',
    minWidth: 300,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.black,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultsContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultsText: {
    textAlign: "center",
    fontSize: 20,
  },
  highlight: {
    color: Colors.accent,
    fontFamily: "open-sans-bold",
  },
});
export default GameOverScreen;
