import React, { Component } from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Header from '../component/Header'
import SocialMedia from '../component/SocialMedia'
import EmailLogin from '../component/EmailLogin'
import LoginButton from '../component/LoginButton'

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Header />
                    <SocialMedia />
                    <EmailLogin />
                    <LoginButton />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 12,
        marginTop: '10%'
    }
})