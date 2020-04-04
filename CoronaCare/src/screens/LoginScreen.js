import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, Button } from 'react-native';
import { Navigation } from "react-native-navigation"
import Colors from 'react-native/Libraries/NewAppScreen';
import HomeButtons from '../components/atoms/homebuttons';
import LinearGradient from 'react-native-linear-gradient';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    changeScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "navigation.CoronaCare.WelcomeScreen"
                }
            }
        });
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
                <View style={styles.outsideWrapper}>
                <Text style={styles.welcomeText}>Log in</Text>
                <Text style = {styles.detailsText}>Log in to your myaces.nus.edu account.</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputText}>
                        Insert Username
                </TextInput>
                    <TextInput style={styles.inputText}>
                        Insert Password
                </TextInput>
                    <Button onPress={this.changeScreen.bind(this)} title="Submit">Submit</Button>
                </View>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({


    linearGradient: {
        flex:1,
    },
    outsideWrapper: {
       
        padding: 50,
        alignItems: 'center',
        marginTop:150
        
    },
    welcomeText: {
        fontWeight: '300',
        fontSize: 40,
        color: '#FFFFFF',
        fontFamily: 'Verdana'
        
    },

    detailsText: {
        color: '#FFFFFF',
        fontFamily: 'Verdana'
    },
    inputText: {
        fontWeight: '200',
        fontSize: 18,
        color: '#000000',
        fontFamily: 'Verdana',
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: 10, marginBottom: 10,
        borderRadius: 6,
    }
});