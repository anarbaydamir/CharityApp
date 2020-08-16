import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class Background extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                 source={require('../../../assets/background.png')}></Image>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:3
    },
    image:{
        width:'100%',
        height:'100%'
    }
})
