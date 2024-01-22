import React from 'react';
import {View, Text, ImageBackground, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width

const Joy = () => {
    return(
        <SafeAreaView>
            <ImageBackground style={styles.img} source={require('../../assets/joy.png')}>
                <View style={styles.view1}></View>
                <View style={styles.view2}>
                    <Text style={styles.text1}> 🎉🎉 JOY FOR YOU 🎉🎉</Text>
                    <TouchableOpacity style={styles.touch}>
                        <Text style={styles.text}>Share</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    img:{
        flex:1,
        height:screenHeight,
        width:screenWidth,
    },
    view1:{
        height:screenHeight/1.3
    },
    view2:{
        backgroundColor:"#fff",
        width:screenWidth/1.2,
        height:103, 
        alignItems:'center',
        justifyContent:'center', 
        alignSelf:'center'
    },
    touch:{
        backgroundColor:'#0B7186',
        borderRadius:8,
        padding:10, 
        marginTop:10
    },
    text:{
        color:'#fff'
    },
    text1:{
        fontSize:20,
        fontWeight:'700',
        lineHeight:32, 
        textAlign:'center',
        fontStyle:'italic'
    }
  });

export default Joy;