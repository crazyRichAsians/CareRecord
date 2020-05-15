import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ImageBackground,SafeAreaView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import { Navigation } from "react-native-navigation"
import auth from '@react-native-firebase/auth';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    changeScreen = () => {
        Navigation.setRoot({
            root: {
                component: {
                    name: "navigation.CoronaCare.NavigationTabInitialiser"
                }
            }
        });
    }

    signUpUser = () => {
        console.log("Signing in" + this.state.username)
        auth()
            .createUserWithEmailAndPassword(this.state.username, this.state.password)
            .then(() => {
                console.log('User has been signed up!');
                this.changeScreen()
            })
            .catch(error => {
                switch (error) {
                    case (error.code === 'auth/email-already-in-use'): 
                        alert('That email address is already in use!');
                        break;
                    case (error.code === 'auth/invalid-email'):
                        alert('That email address is invalid!');
                        break;
                    default:
                        alert('Faled to sign up user successfully. Try again or contact your administrator')
                }
            });
    }

    render() {
        return (
            <View style ={styles.bkgrdContainer}>
                <ImageBackground source = {require('../assets/images/bkgrd.png')} style ={styles.bkgrdImage}>
                <KeyboardAvoidingView style={styles.inputContainer}>
                    <Text style={styles.welcomeText}>Sign Up</Text>
                    <Text style={styles.detailsText}>Sign up for a new account now.</Text>
                        <TextInput
                            style={styles.inputText}
                            placeholder="Username"
                            autoCapitalize="none"
                            onChangeText={newText => this.setState({ username: newText })} />
                        <TextInput
                            style={styles.inputText}
                            placeholder="Password"
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={newPass => this.setState({ password: newPass })} />
                            <Button
                                onPress={this.signUpUser.bind(this)}
                                title="Submit"
                                type= "clear"
                                buttonStyle={styles.buttonStyle}
                                titleStyle={{color: "white"}}
                            />
                </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        borderColor: "white",
        borderWidth: 1,
        margin: 10,
        width: 150
    },
    bkgrdImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
    },
    bkgrdContainer: {
        flex: 1,
        flexDirection: "column"
    },
    outsideWrapper: {

        padding: 50,
        alignItems: 'center',
        marginTop: 50

    },
    welcomeText: {
        fontWeight: '300',
        fontSize: 40,
        color: '#FFFFFF',

    },

    detailsText: {
        color: '#FFFFFF'
    },
    inputText: {
        fontWeight: '200',
        fontSize: 18,
        color: '#000000',
        height: 40,
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginTop: 10, marginBottom: 10, paddingLeft: 10,
        borderRadius: 6,
    }
});