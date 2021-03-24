import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import Focus from './src/features/focus/Focus';
import { FocusHistory } from './src/features/focus/FocusHistory';
import {Timer} from './src/features/timer/Timer';
import { colors } from './src/utils/color';
import { sizing } from './src/utils/sizes';



const STATUSES = {
  COMPLETE : 1, 
  CANCELLED : 2
}
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() { 

  const [focusSubject,setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);
  
  const addFocusHistorySubjectWithState = (subject, status) => {
    setFocusHistory([...focusHistory, {subject, status }])
  }
  const onClear = () => {

  }

  return (
    <View style={styles.container}>  
      {focusSubject ? (<Timer 
      focusSubject={focusSubject} 
      onTimerEnd={() => {
      addFocusHistorySubjectWithState(focusSubject,STATUSES.COMPLETE )  
      setFocusSubject(null)
      }} clearSubject={() => {
        addFocusHistorySubjectWithState(focusSubject,STATUSES.CANCELLED)
        setFocusSubject(null)}}/>)
       : (
       <>  
       <Focus addSubject={setFocusSubject}/>
       <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
       </>
       )}    
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
