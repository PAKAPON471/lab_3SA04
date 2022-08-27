import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function Forecast({main, description, temp}) {
    return (
        <View style={styles.bodyView}>
            <Text style={styles.mainStyle}>{main}</Text>
            <Text style={styles.descriptionStyle}>{description}</Text>
            <View style={styles.tempViewStyle}>
                <Text style={styles.tempText}>{temp}</Text>
                <Text style={styles.celciusText}> °C</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bodyView: {
        paddingTop: 60
    },
    mainStyle: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center'

    },
    descriptionStyle: {
        fontSize: 30,
        color: 'white',
        margin: 30,
        textAlign: 'center'
    },
    tempViewStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center'
    },
    tempText: {
        color: 'white',
        fontSize: 40,
    },
    celciusText: {
        color: 'white',
        fontSize: 26,
        paddingTop: 10
    }
});