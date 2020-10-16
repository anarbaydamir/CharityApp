import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.buttonText}>Hesabıma daxil ol</Text>
                </TouchableOpacity>
                <View style={styles.textView}>
                    <Text style={styles.haveText}>Hesabınız yoxdur? </Text><Text style={styles.registerText}>Qeydiyyatdan keç</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10
    },
    buttonView: {
        width: '100%',
        backgroundColor: '#0857ab',
        width: '94%',
        height: 40,
        margin: '3%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    buttonStyle: {
        backgroundColor: '#0857ab'
    },
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: '3%'
    },
    haveText: {
        fontSize: 13,
        lineHeight: 14,
        color: '#8b959a'
    },
    registerText: {
        fontSize: 13,
        lineHeight: 14,
        color: '#0857ab',
        fontWeight: '500'
    }
})