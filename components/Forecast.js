import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


export default function Forecast(props) {
    return (
        <View >
            <Text style={styles.mainStyle}>{props.main}</Text>
            <Text style={styles.descriptionStyle}>{props.description}</Text>
            <View>
                <Text style={styles.tempStyle}>{props.temp} °C</Text>
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
    tempStyle: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
    },

});