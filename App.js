import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import Focus from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';
import { colors } from './src/utils/color';
import { sizing } from './src/utils/sizes' 


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() { 
  const [focusSubject,setFocusSubject] = useState('gardening')   
  return (
    <View style={styles.container}>  
      {focusSubject ? (<Timer focusSubject={focusSubject}/>)
       : (<Focus addSubject={setFocusSubject}/>)}    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkblue,
    paddingTop: Platform.OS === 'ios' ? sizing.md : sizing.lg
  },
  
});
