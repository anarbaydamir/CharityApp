import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class SocialMedia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.loginText}>Qısa yolla daxil ol:</Text>
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
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:25
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
        width:'45%',
        height:45,
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