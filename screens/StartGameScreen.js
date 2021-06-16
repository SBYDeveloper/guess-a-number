import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card'
import Color from '../constants/colors'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput placeholder="here"/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={Color.accent} title="Reset" onPress={() => {}}/>
                    </View>
                    <View style={styles.button}>
                        <Button color={Color.primary} title="Confirm" onPress={() => {}}/>
                    </View>
                </View>
            </Card>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: '80%',
        maxWidth: '80%',
        alignItems: 'center'
    },
    button: {
        width: '40%',
        borderRadius: 6,
        borderColor: Color.grey,
        borderWidth: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default StartGameScreen;