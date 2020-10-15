import React,{Component} from 'react'
import {View,Text,Image,StyleSheet} from 'react-native'
import Header from '../component/Header'
import SocialMedia from '../component/SocialMedia'
import EmailLogin from '../component/EmailLogin'
import LoginButton from '../component/LoginButton'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header />
                <SocialMedia/>
                <EmailLogin/>
                <LoginButton/>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:12,
        marginTop:'10%'
    }
})