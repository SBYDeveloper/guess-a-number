import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Color from '../constants/colors'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: Color.black,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: Color.white,
        elevation: 5,
        padding: 20,
        borderRadius: 10
    }
});

export default Card