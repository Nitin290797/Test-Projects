import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Data = [
    {msg:'want to I love you to my wife and kids', id:1, tag:'Realtioship'},
    {msg:'Every day I should call my mom this week and talk to ger for 15mins at least month', id:2, tag:'Finance'},
    {msg:'I want to save 10% of my earnings starting this month.', id:3, tag:'Finance'},
]

const Game = () => {
    return(
        <View>
            <View>
                {Data.map((item) => {
                    return(
                        <View style={styles.container}>
                            <Text style={styles.text}>{item.tag}</Text>
                        <View style={styles.view}>
                            <Text style={styles.text1}>{item.msg}</Text>
                        </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#DEF6FB',
      margin:5
    },
    view:{
        flexDirection:'row',
        padding:15
    },
    text:{
        fontSize:12,
        textAlign:'center',
        lineHeight:14.4,
        fontWeight:'400',
        fontStyle:'italic',
        color:'#000',
        backgroundColor:'#00D3FF',
        position:'relative',
        alignSelf:'flex-end',
        padding:5,
    },
    text1:{
        fontSize:16,
        textAlign:'left',
        lineHeight:19.2,
        fontWeight:'500',
        fontStyle:'italic',
        color:'#000',
        maxWidth:'80%',
    }
  });

export default Game;