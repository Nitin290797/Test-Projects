import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import Menu from '../Component/Menu';

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.view}>
            <Image style={styles.image} source={require('../../assets/Home.png')}/>
            <Text style={styles.text}>Begin your fun journey with a random surprise</Text>
            </View>
            <Menu navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    view: {
        flex:0.9,
        alignSelf:'center',
        alignItems:'center'
    },
    image:{
        height:490,
        width:342
    },
    text:{
        fontSize:28,
        textAlign:'center',
        lineHeight:33.6,
        fontWeight:'600',
        fontStyle:'italic',
        paddingTop:'10%'
    }
  });

export default Home;