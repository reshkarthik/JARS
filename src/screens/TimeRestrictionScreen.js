import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 



const TimeRestriction = ({ }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                <Text style={{fontSize:35, paddingLeft:10}}>Time Restriction</Text>
                <Feather name="plus-circle" size={24} color="black" />
            </View>
            <View>
                <View style={{height: 3, backgroundColor: 'black', marginHorizontal: '12%',}}></View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
    }
});

export default TimeRestriction;