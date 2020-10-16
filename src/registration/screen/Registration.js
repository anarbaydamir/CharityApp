import React, { Component } from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import Header from '../component/Header'
import Body from '../component/Body'
import Footer from '../component/Footer'

export default class Registration extends Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <Header />
                    <Body />
                    <Footer />
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:6
    }
})
