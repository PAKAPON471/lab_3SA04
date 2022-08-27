import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Pattalung', code: '93000' },
    { place: 'Pattanee', code: '94000' },
    { place: 'Pattaya', code: '20150' },
    { place: 'Nacornnayok', code: '26000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style = {style.zipItem}>
            <Text style = {style.zipPlace}>{place}</Text>
            <Text style = {style.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const style = StyleSheet.create ({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 25,
    },
    zipPlace: {
        flex: 1,
        fontSize: 15
        
    },
    zipCode: {
        flex: 1,
        fontSize: 15,
        paddingLeft: 100
    }
});