import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';
import colors from './assets/colors/colors';
import SignUp from './src/signUp';

export default () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{backgroundColor:colors.background, flex: 1, justifyContent: 'center',}}>
       <SignUp />
      </View>
    );
  }
};

