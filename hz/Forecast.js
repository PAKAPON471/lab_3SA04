import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function Forecast({main, description, temp}) {
    return (
        <View>
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
    mainStyle: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'

    },
    descriptionStyle: {
        fontSize: 20,
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
        fontSize: 30,
    },
    celciusText: {
        color: 'white',
        fontSize: 20,
        paddingTop: 10
    }
});