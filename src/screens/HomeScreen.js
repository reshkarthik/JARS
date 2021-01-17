import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomMenu from '../components/BottomBarComponent.js';
import SettingsModal from '../components/SettingsModalComponent.js';
import ScrollableCalendar from '../components/ScrollableCalendarComponent.js';



const Home =  ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={styles.somecontainer}>
            <View style={styles.container}>
                <ScrollableCalendar />
                {modalVisible === true ? <SettingsModal isVisible={setModalVisible} /> : null}
                <KeyboardAvoidingView style={styles.bottomMenu}>
                    <BottomMenu onSettingsPress={setModalVisible} />
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