import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    Dimensions,
    TextInput,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AddTask = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
    }
});

export default AddTask;