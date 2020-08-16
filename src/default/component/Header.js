import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> Xoş gəlmisiniz </Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontSize:20,
        color:'#3b3b3b',
        fontWeight:'bold'
    }
})