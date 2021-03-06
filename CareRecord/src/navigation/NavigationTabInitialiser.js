/* eslint-disable prettier/prettier */
import React from 'react';
import {Navigation} from 'react-native-navigation';

const NavigationTabInitialiser = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            titleDisplayMode: "alwaysShow",
            barStyle: "default"
          }
        },
        children: [{
            stack: {
                id: 'AFTERLOGIN_STACK',
              children: [{
                  component: {
                    name: 'navigation.CareRecord.AfterLogin',
                    passProps: {
                      text: 'This is tab 3',
                    },
                    options: {
                      topBar: {visible: false }
                    }
                  },
                }],
                options: {
                    topBar: { visible: false},
                    bottomTab: {
                        text: 'Capture',
                        icon: require('../assets/images/outline_camera_alt_black_18dp.png'),
                        testID: 'THIRD_TAB_BAR_BUTTON',
                    },
                },
            },
          },
          {
            component: {
              name: 'navigation.CareRecord.RecordsScreen',
              options: {
                topBar: { visible: false},
                bottomTab: {
                  text: 'Records',
                  icon: require('../assets/images/thermometer_PNG28.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              id: 'SETTINGS_STACK',
              children: [{
                  component: {
                  name: 'navigation.CareRecord.SettingsScreen',
                  options: {
                    topBar: {visible: false},
                  },
                },
              }],
              options: {
                topBar: {visible: true},
                bottomTab: {
                  text: 'Settings',
                  icon: require('../assets/images/cog.png'),
                },
              },
            },
          },
        ],
      },
    },
  });

  return <></>;
};

export default NavigationTabInitialiser;
