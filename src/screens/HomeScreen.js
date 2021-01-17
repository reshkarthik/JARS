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
import BottomMenu from '../components/BottomBarComponent.js';
import SettingsModal from '../components/SettingsModalComponent.js';
import ScrollableCalendar from '../components/ScrollableCalendarComponent.js';

const { width, height } = Dimensions.get('window');

const buttonColor = Platform.OS === 'ios' ? '#ffffff' : '#204969';
const Home = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.somecontainer}>
            <View style={styles.container}>
                <ScrollableCalendar />
                {/*{modalVisible === true ? <SettingsModal isVisible={setModalVisible} /> : null}*/}
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

export default Home;