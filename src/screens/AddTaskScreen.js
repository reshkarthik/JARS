import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    Button,
    TouchableHighlight,
    KeyboardAvoidingView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomMenu from '../components/BottomBarComponent.js';
import TaskComponent from '../components/TaskComponent.js'
import EventComponent from '../components/EventComponent.js';
import SettingsModal from '../components/SettingsModalComponent.js';
const {createEvent, updateEvent, viewEvent, deleteEvent} = require('../models/Event');


const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const AddTask = ({ navigation }) => {
    const [state, setState] = useState('task');
    const [modalVisible, setModalVisible] =useState(false);
    const [taskName,setTaskName] = useState("");
    const [dueDate,setDueDate] = useState(new Date());
    const [numHours,setNumHours] = useState(0);

    const [eventName,setEventName] = useState('');
    const [eventDate, setEventDate] = useState(new Date());
    const [eventStart,setEventStart] = useState(new Date());
    const [eventEnd, setEventEnd] = useState(new Date());
    const [repeat,setRepeat] = useState('never');
    const [repeatUntil,setRepeatUntil] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../images/JARS_logo.png')}/>
            
            <View style={styles.add}>
                <Text style={styles.text}> Add </Text> 
                    <View style={{backgroundColor: "#B4BCC3", width:125, height: 30, justifyContent:'center'}}>
                    <Picker
                        selectedValue={state}
                        style={{height: 50, width: 125, }}
                        dropdownIconColor='#000000'
                        onValueChange={(itemValue, itemIndex) =>
                            setState(itemValue)
                        }>
                        <Picker.Item label="task" value="task" />
                        <Picker.Item label="event" value="event" />
                    </Picker>
                    </View> 
            </View>
            <View style={styles.hairline} />

            {/* COMPONENT for rectangle task*/}
            {state === 'task' ? <TaskComponent setTaskName={setTaskName} setDueDate={setDueDate} setNumHours={setNumHours} />:  
                                <EventComponent setEventName={setEventName} setEventDate={setEventDate} 
                                setEventStart={setEventStart} setEventEnd={setEventEnd} 
                                setRepeat={setRepeat} setRepeatUntil={setRepeatUntil} />
            }
            {/* Add Button; add an onpress action */}
            <TouchableHighlight  style={styles.loginButtonWrapper}>
                <Button title=" ADD " color="#204969" onPress={async ()=>{
                console.log(taskName);
                console.log(dueDate);
                console.log(numHours);

                console.log(eventName);
                console.log(eventDate);
                console.log(eventStart);
                console.log(eventEnd);
                console.log(repeat);
                console.log(repeatUntil);
                const id = await AsyncStorage.getItem('@id');
                    
            }}/>
            </TouchableHighlight>
            
            {modalVisible === true ? <SettingsModal isVisible={setModalVisible} /> : null}
                <KeyboardAvoidingView style={styles.bottomMenu}>
                    <BottomMenu onSettingsPress={setModalVisible} />
                </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
        minHeight: Math.round(height),
        alignItems: 'center',
    },
    somecontainer: {
        flex: 1,
        backgroundColor: '#E6E7E9',
        minHeight: Math.round(height),
        
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: width,
      },
    dropDownColor: {
        backgroundColor: '#B4BCC3',
    },
    title: {
        paddingVertical: height * 0.05,
        fontWeight: 'bold',
        fontSize: 36,
    },
    text : {
        marginTop:4,
        fontSize: 16,
        paddingRight: 2,
    
    },
    add: {
        flexDirection: 'row',
        paddingBottom: 5,
        justifyContent: 'center',
        alignContent:'center',
    },
    iconStyle: {
        fontSize: 24,
        paddingLeft: 14,
        marginTop: 12,
    },
    loginButtonWrapper: {
        paddingTop: height * 0.01,
        width: width * 0.25,
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 10,
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
    },
});

export default AddTask;