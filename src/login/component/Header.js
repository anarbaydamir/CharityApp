import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={require('../../../assets/arrow.png')} />
                <View>
                    <Text style={styles.loginText}>Login Now</Text>
                </View>
                <View>
                    <Text style={styles.pleaseText}>Please login to continue using our app</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:'3%',
        marginBottom:'50%'
    },
    image: {
        margin: '3%',
        width: 19,
        height: 12
    },
    loginText: {
        fontSize: 22,
        color: '#3e4a59',
        fontWeight: 'bold',
        margin: '3%'
    },
    pleaseText: {
        fontSize: 13,
        marginLeft: '3%',
        color: '#8b959a'
    }
})