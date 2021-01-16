import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    Button,
    TouchableHighlight,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import BottomMenu from '../components/BottomBarComponent.js';

const { width, height } = Dimensions.get('window');

const buttonColor = Platform.OS === 'ios' ? '#ffffff' : '#204969';

const Today = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.somecontainer}>
            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.bottomMenu}>
                    <BottomMenu />
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    somecontainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
    }
});

export default Today;