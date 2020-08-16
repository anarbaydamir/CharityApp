import React, { Component } from 'react'
import { Text, View,StyleSheet,TouchableHighlight} from 'react-native'

export default class EmailLogin extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button}>
                    <Text style={styles.btnText}>Emaillə daxil ol</Text>
                </TouchableHighlight>
                <View style={styles.loginView}>
                    <Text style={styles.text}>Qeydiyyatdan keçmisiniz?</Text>
                    <Text style={styles.loginText}>Daxil ol</Text>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    button:{
        width:195,
        height:40,
        borderRadius:20,
        backgroundColor:'#5f85e5',
        borderWidth:1,
        borderColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
    btnText:{
        fontSize:12,
        color:'#ffffff',
        fontWeight:'500'
    },
    loginView:{
        flexDirection:'row',
        marginTop:20
    },
    text:{
        fontSize:12,
        color:'#8b959a',
        marginRight:10
    },
    loginText:{
        fontSize:12,
        color:'#8b959a',
        fontWeight:'bold'
    }
})
