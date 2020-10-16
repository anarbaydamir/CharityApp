import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.loginText}>Qeydiyyatdan Keç</Text>
                </View>
                <View>
                    <Text style={styles.pleaseText}>Hesabınız yoxdursa qeydiyyatdan keçin.</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex:0.1,
        marginTop:'10%',
        marginBottom:30
    },
    image: {
        margin: 8,
        color:'#A8ADB4'
    },
    loginText: {
        fontSize: 22,
        color: '#3e4a59',
        fontWeight: 'bold',
        margin: 8
    },
    pleaseText: {
        fontSize: 13,
        marginLeft: 8,
        color: '#8b959a'
    }
})