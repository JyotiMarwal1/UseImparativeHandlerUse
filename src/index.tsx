
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, Platform, StatusBar, StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';


import { FlashMessage, SpinnerLoader } from './Component';

import RootNavigator from './Navigation/StackNavigator';
import { colors } from './themes';
import { flashMessageRefObj } from './utils/FlashMessageRef';
import { navigationRef } from './utils/NavigationObject';
import { spinnerRef } from './utils/SpinnerRef';


const Index = () => {

    const initSentrySession = () => {

    }

    useEffect(() => {
        const initApp = () => {
            setStatusBar();
            if (__DEV__) {
                LogBox.ignoreLogs(['Require cycle:', 'EventEmitter.removeListener']);
            } else {
                initSentrySession();
            }
        };
        initApp();
        //unmounting effect
        return () => { };
    }, []);

    const setStatusBar = () => {
        if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(colors.black);
        } else {
            StatusBar.setBarStyle("light-content")
            // StatusBar.setBarStyle('dark-content');
        }
    };



    return (

        <SafeAreaProvider>
            <NavigationContainer
                ref={navigationRef}
                onReady={() => {

                }}>
                <RootNavigator />
                <SpinnerLoader ref={spinnerRef} />
                <FlashMessage ref={flashMessageRefObj} />
            </NavigationContainer>
        </SafeAreaProvider>

    )
}

export default Index

const styles = StyleSheet.create({})

