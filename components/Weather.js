import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.zip}>Zip code is {props.zipCode}.</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems:'center',
        width: '100%',
        height: '100%'
    },
    zip: {
        margin: 20,
        fontSize: 20,
        color: 'white',
    }
});
   