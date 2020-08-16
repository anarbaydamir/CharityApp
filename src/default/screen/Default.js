import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Header from '../component/Header'
import Background from '../component/Background'
import SocialMedia from '../component/SocialMedia'
import EmailLogin from '../component/EmailLogin'

export default class Default extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Background/>
                <SocialMedia/>
                <EmailLogin/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:6
    }
})
