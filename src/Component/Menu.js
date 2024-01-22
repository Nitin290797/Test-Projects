import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Menu = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#f3f3f3',marginTop:'30%' }}>
                {/*Rest of App come ABOVE the action button component!*/}
                <ActionButton buttonColor="#CC640B">
                    <ActionButton.Item buttonColor='#CC640B' title="New Task" onPress={() => console.log("notes tapped!")}>
                        <MaterialCommunityIcons name="pencil-box-outline" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#CC640B' title="Notifications" onPress={() => { }}>
                        <AntDesign name="plus" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#CC640B' title="All Tasks" onPress={() => { navigation.navigate('New') }}>
                        <SimpleLineIcons name="puzzle" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#CC640B' title="All Tasks" onPress={() => { }}>
                        <FontAwesome6 name="question-circle" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('Joy') }} style={styles.button}>
                <Text style={styles.text}>Start Here</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    button: {
        height: 37,
        width: 155,
        backgroundColor: '#CC640B',
        alignItems: 'center',
        justifyContent: 'center',
        borderCurve: 'circular',
        borderRadius: 8,
        marginTop: '5%'
    },
    text: {
        fontSize: 14,
        lineHeight: 16.8,
        fontWeight: '600',
        fontStyle: 'italic',
        color: '#fff',
        textAlign: 'center',
        alignSelf: 'center'
    },
    actionButtonIcon: {
        fontSize: 24,
        height: 28,
        color: 'white',
      },
});

export default Menu;