import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text,  Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer'
import Card from '../components/Card';

const GameOverScreen = props => {

    return (
        <View style={styles.screen}>
            <Text>The Game is Over</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    )

}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});
export default GameOverScreen