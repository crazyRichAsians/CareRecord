/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import {Button,backgroundColor} from 'react-native-elements';
import { Navigation } from 'react-native-navigation';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    changeToCameraScreen = () => {
        Navigation.push("AFTERLOGIN_STACK", {
            component: {
                name: 'navigation.CoronaCare.CameraScreen',
                options: {
                    topBar: {
                        visible: true,
                      title: {
                        text: 'Take Photo'
                      }
                    }
                  }
              },
        })
    }

    render() {
        return (
            <View style ={styles.bkgrdContainer}>
                <ImageBackground source = {require('../assets/images/bkgrd2.png')} style ={styles.bkgrdImage}>
                <View style = {styles.outsideWrapper}>
                    <Text style={styles.paragraph}>
                        Snap a picture of your temperature reading and upload to our portal
                    </Text>
                    <View style={styles.tempButton}>    
                    <Button 
                    title = "Capture Temperature"
                    type = "solid"             
                    onPress = {this.changeToCameraScreen.bind(this)}
                    />
                    </View>
                </View>
                 </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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

        alignItems: 'center',
        justifyContent: 'center',
    
    },
    tempButton: {
        marginTop: 20, marginBottom: 20, 
    },
    paragraph: {
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        padding: 50
      }
});