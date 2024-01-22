import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width

const New = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
            <Image style={styles.img} source={require('../../assets/New.png')}/>
            </View>
            <Text style={styles.text1}>Is there possibility of flying cars in future ?</Text>
            <View style={styles.view1}>
                <Text style={styles.text2}>Yes, science is working on it</Text>
                <AntDesign name="checkcircle" size={24} color="#FF7F11" />
            </View>
            <View style={styles.view1}>
                <Text style={styles.text2}>Will come in 2023</Text>
                <AntDesign name="checkcircle" size={24} color="#FF7F11" />
            </View>
            <View style={styles.view2}>
                <Text style={styles.text2}>Will come in 2023</Text>
                <AntDesign name="checkcircle" size={24} color="#FF7F11" />
            </View>
            <View style={styles.View3}>
            <TouchableOpacity style={styles.tiuc}>
                <Text style={styles.text3}>Save</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    view:{
        alignItems:'center',
        alignSelf:'center',
        margin:50
    },
    img:{
        height:256,
        width:343,
    },
    text1:{
        fontSize:28,
        fontWeight:'600',
        lineHeight:33.6,
        textAlign:'center'
    },
    view1:{
        backgroundColor:'#FFD7B5',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        width:screenWidth/1.1,
        alignSelf:'center',
        borderRadius:4, 
        margin:2
    },
    view2:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        width:screenWidth/1.1,
        alignSelf:'center',
        borderRadius:4, 
        margin:2,
        borderColor:'#FFD7B5'
    },
    text2:{
        fontSize:18,
        fontWeight:'400',
        color:'#000'
    },
    View3:{
        marginTop:'50%'
    },
    tiuc:{
        backgroundColor:'#CC640B',
        borderRadius:8, 
        alignItems:'center', 
        alignSelf:'center',
        paddingLeft:30, 
        paddingRight:30,
        paddingBottom:15,
        paddingTop:15
    },
    text3:{
        color:'#fff',
        fontSize:14,
        fontWeight:'400'
    }
  });

export default New