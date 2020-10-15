import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TextInput } from 'react-native'

export default class EmailLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Email və ya Mobil Nömrə</Text>
                    </View>
                    <View>
                        <TextInput style={styles.inputStyle} keyboardType='email-address' />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.textView}>
                        <Text style={styles.textStyle}>Şifrə</Text>
                    </View>
                    <View>
                        <TextInput style={styles.inputStyle} secureTextEntry={true} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 23,
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom:10
    },
    textView: {
        marginBottom: 10
    },
    textStyle: {
        fontSize: 13,
        lineHeight: 16,
        color: '#8b959a',
        marginLeft: '3%'
    },
    inputStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#8b959a',
        color: 'black',
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '1%',
        height: 45,
        paddingLeft: 10
    }
})