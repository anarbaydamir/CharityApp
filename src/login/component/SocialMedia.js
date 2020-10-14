import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class SocialMedia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.loginText}>Login instantly:</Text>
                </View>
                <View style={styles.socialContainer}>
                    <View style={styles.buttonView}>
                        <Icon name="facebook"
                            size={20}
                            style={styles.fb} />
                    </View>
                    <View style={styles.buttonView}>
                        <Icon name="google"
                            size={20}
                            style={styles.google} />
                    </View>
                </View>
                <View style={styles.loginOrView}>
                    <Text style={styles.loginOrText}>or login with email/phone</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: '7%'
    },
    loginText: {
        color: '#8b959a'
    },
    buttonView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#f2f4f7',
        borderWidth: 1,
        paddingBottom:'5%',
        paddingTop:'5%',
        paddingLeft:'18%',
        paddingRight:'18%',
        margin:'3%',
        borderRadius:5
    },
    fb: {
        color: '#3b5998',
        marginRight: 5
    },
    google: {
        color: '#f14336',
        marginRight: 5
    },
    loginOrView:{
        marginTop:'25%'
    },
    loginOrText:{
        fontSize:13,
        color:'#8b959a'
    }
})