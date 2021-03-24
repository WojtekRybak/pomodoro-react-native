import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, sizing } from '../../utils/sizes';
import { colors} from '../../utils/color';


 const Focus = ({ addSubject }) => {           //props setFocusSubjet        
    const [subject, setSubject] = useState(null)
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>What would you like to focus on ?</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={{flex : 1, marginRight : sizing.md}} onSubmitEditing={({nativeEvent}) => {
                        setSubject(nativeEvent.text)
                    }}/>
                    <RoundedButton title="+" size={50} onPress={() => addSubject(subject)}/>
                </View>
              
            </View>   
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,   
    },
    titleContainer : {
        padding : sizing.md,
        justifyContent : 'center',
        flex : 0.5
    },
    title : {
        color : colors.white,
        fontWeight : 'bold',
        fontSize : fontSizes.lg,
    },
    inputContainer : {
        paddingTop : sizing.md,
        flexDirection : 'row',
        alignItems : 'center'
    }

})


export default Focus