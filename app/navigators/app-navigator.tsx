/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
import React from 'react';
import {Animated, Platform, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigatorParamList} from './navigation-route';
import {navigationRef} from './navigation-utilities';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {CameraScreen} from '../screens/camera/camera.screen';
import {scale} from '../theme/scale';
import {colors} from '../theme/colors';
import {FontSize} from '../theme/font-size';
import {SettingsTabScreen} from '../screens/settingsTab/settingsTab.screen';

type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const Tab = createBottomTabNavigator<NavigatorParamList>();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        keyboardHidesTabBar: true,
        tabBarIcon: ({focused, size}) => {
          let iconName: string = 'camera';

          let tabName: string = 'Home';
          if (route.name == 'camera') {
            iconName = focused ? 'camera' : 'camera';
            tabName = 'Camera';
          } else if (route.name == 'settings') {
            iconName = 'cog';
            tabName = 'Settings';
          }
          return (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                width: scale(100),
              }}>
              <MaterialCommunityIcons
                name={iconName}
                size={scale(focused ? 25 : 23)}
                color={focused ? colors.white : colors.icon}
              />

              <Text
                numberOfLines={1}
                style={{
                  fontWeight: focused ? '600' : '400',
                  color: focused ? colors.white : colors.icon,
                  fontSize: FontSize.FONT_12Px,
                  // fontFamily: typography.medium,
                }}>
                {tabName}
              </Text>
            </View>
          );
        },
        headerShown: false,
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: scale(12),
        },
        lazy: false,
        tabBarStyle: {
          height:
            Platform.OS == 'ios'
              ? scale(50 + useSafeAreaInsets().bottom)
              : scale(60),
          backgroundColor: colors.black,
        },
      })}
      initialRouteName={'camera'}>
      <Tab.Screen
        name="camera"
        component={CameraScreen}
        options={{tabBarLabel: 'Camera', tabBarShowLabel: false}}
      />

      <Tab.Screen
        name="settings"
        component={SettingsTabScreen}
        options={{tabBarLabel: 'Settings', tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
};

export function AppNavigator(props: NavigationProps) {
  return (
    <NavigationContainer ref={navigationRef} {...props}>
      {TabStack()}
    </NavigationContainer>
  );
}
