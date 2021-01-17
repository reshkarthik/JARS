import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Dimensions,
    KeyboardAvoidingView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomMenu from '../components/BottomBarComponent.js';
import TaskListComponent from '../components/TaskListComponent.js';
import SettingsModal from '../components/SettingsModalComponent.js';


const Todo = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState([{ id: '1', name: 'CSE120 PA2', start_time: '12:00PM', end_time: '2:00PM', date: '1/18/2021' },
    { id: '2', name: 'CSE140 HW2', start_time: '12:00PM', end_time: '2:00PM', date: '1/19/2021' },
    { id: '3', name: 'CSE140L Lab', start_time: '11:00AM', end_time: '4:00PM', date: '1/20/2021' }]);

    return (
        <SafeAreaView style={styles.somecontainer}>
            <View style={styles.container}>
                {modalVisible === true ? <SettingsModal isVisible={setModalVisible} /> : null}
                <FlatList
                    data={events}
                    keyExtractor={(event) => event.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity>
                                <TaskListComponent event={item} />
                            </TouchableOpacity>
                        );
                    }}
                />
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

export default Todo;