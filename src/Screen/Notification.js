import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from'react-native';

const Data = [
    {msg:'You receive a joy', id:1},
    {msg:'You receive a joy', id:2},
    {msg:'You receive a joy', id:3},
    {msg:'You receive a joy', id:4},
    {msg:'You receive a joy', id:5},
]

const Notification = () => {
    return(
        <View>
            <View>
                {Data.map((item) => {
                    return(
                        <View style={styles.view}>
                            <Text style={styles.text}>{item.msg}</Text>
                            <TouchableOpacity style={styles.touch}>
                                <Text style={styles.text1}>View</Text>
                            </TouchableOpacity>
                            </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    view:{
        height:75,
        alignItems:'center',
        alignContent:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        backgroundColor:'#DEF6FB',
        margin:5
    },
    touch:{
        backgroundColor:'#CC640B',
        height:30,
        width:84,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    text:{
        fontSize:16,
        textAlign:'center',
        lineHeight:19.2,
        fontWeight:'600',
        fontStyle:'italic',
        color:'#000'
    },
    text1:{
        fontSize:12,
        textAlign:'center',
        lineHeight:14.4,
        fontWeight:'600',
        fontStyle:'italic',
        color:'#fff'
    }
  });

export default Notification;