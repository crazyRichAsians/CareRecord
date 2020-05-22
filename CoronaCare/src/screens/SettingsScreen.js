import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import auth from '@react-native-firebase/auth';
import {Navigation} from 'react-native-navigation';
import {DeleteAccount, DeleteAllRecords} from '../services/SettingsScreenServices';
import { OrganisationName } from '../services/WebPortalLinks'

const signOutUser = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'))
    .then(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: 'navigation.CoronaCare.App',
          },
        },
      });
    });
};

const currentUserEmail = () => {
  return auth().currentUser.email;
};

const list = [
  {
    title: 'Update Organisation URL',
    onPress: () => console.log('Hello World'),
  },
  {
    title: 'Change Password',
    onPress: () => console.log('Change Password'),
  },
  {
    title: 'Delete All Records',
    onPress: () => DeleteAllRecords(),
    color: 'red',
  },
  {
    title: 'Delete Account',
    onPress: () => DeleteAccount(),
    color: 'red',
  },
];

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('../assets/images/bkgrdBlank.png')}
        style={styles.imageBackground}>
        <View style={styles.topView}>
          <Text style={styles.welcomeText}>Settings</Text>
          <Text style={styles.accountDetailsText}>Account Details</Text>
          <View style={styles.accountDetailsView}>
            <View style={styles.accountDetailsBox}>
              <Text style={styles.accountText}>
                Email: {currentUserEmail()}
              </Text>
              <Text style={styles.accountText}>Organization: {OrganisationName === '' ? 'None Set': OrganisationName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.listView}>
            {list.map((l, i) => (
              <ListItem
                title={l.title}
                titleStyle={{fontSize: 20, color: l.color}}
                contentContainerStyle={{margin: 10}}
                bottomDivider
                containerStyle={styles.listItem}
                rightIcon={{type: 'font-awesome', name: 'angle-right'}}
                onPress={l.onPress}
              />
            ))}
          </View>
          <View style={styles.buttonView}>
            <Button
              onPress={signOutUser}
              title="Sign Out"
              type="solid"
              buttonStyle={styles.buttonStyle}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    fontWeight: 'normal',
    fontSize: 36,
    color: '#000000',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  accountDetailsText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#000000',
    padding: 20,
  },
  accountDetailsView: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  accountDetailsBox: {
    width: '90%',
    borderColor: '#7a7f80',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    height: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowColor: 'grey',
  },
  accountText: {
    fontSize: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonStyle: {
    margin: 10,
    width: Dimensions.get('window').width * 0.6,
    backgroundColor: '#062C49',
    borderRadius: 30,
    paddingVertical: 10,
  },
  topView: {
    flex: 0.2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  bottomView: {
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonView: {
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  listView: {
    height: '60%',
    width: '100%',
  },
  listItem: {
    backgroundColor: '#ffffff00',
  },
});

export default SettingsScreen;
