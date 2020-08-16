import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SocialMedia extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <View style={styles.buttonView}>
                    <Icon name="facebook" 
                    size={20}
                    style={styles.fb}/>
                    <Text style={styles.text}>Facebook'la giriş</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                    <View style={styles.buttonView}>
                    <Icon name="google" 
                    size={20}
                    style={styles.google}/>
                    <Text style={styles.text}>Google'la giriş</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button:{
        width:195,
        height:40,
        borderRadius:20,
        backgroundColor:'#dce1e3',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:20
    },
    buttonView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    fb:{
        color:'#3b5998',
        marginRight:5
    },
    text:{
        fontSize:12,
        color:'#3b3b3b',
        fontWeight:'500'
    },
    google:{
        color:'#f14336',
        marginRight:5
    }
})
