import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=d085bf435e53d69abf85f14d5ec2989e`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
    
    return (
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <Text style={styles.zip}>   Zip code is {props.zipCode}.</Text>
            <Forecast {...forecastInfo}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    zip: {
        margin: 20,
        fontSize: 20,
        color: 'white',
        borderWidth: 5,
        borderRadius: 10,
        backgroundColor: 'green'
    }
});
   