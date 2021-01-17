import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    Button,
    ScrollView,
    KeyboardAvoidingView,
    TouchableHighlight,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import BottomMenu from '../components/BottomBarComponent.js';
import TaskComponent from '../components/TaskComponent.js'
import EventComponent from '../components/EventComponent.js';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const AddTask = ({ navigation }) => {
    const [state, setState] = useState('task');

    const [taskName,setTaskName] = useState("");
    const [dueDate,setDueDate] = useState(new Date());
    const [numHours,setNumHours] = useState(0);

    const [eventName,setEventName] = useState('');
    const [eventDate, setEventDate] = useState(new Date());
    const [eventStart,setEventStart] = useState(new Date());
    const [eventEnd, setEventEnd] = useState(new Date());
    const [repeat,setRepeat] = useState('');
    const [repeatUntil,setRepeatUntil] = useState(new Date());

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../images/JARS_logo.png')}/>
            
            <View style={styles.add}>
                <Text style={styles.text}> Add </Text> 
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
            <View style={styles.hairline} />

            {/* COMPONENT for rectangle task*/}
            {state === 'task' ? <TaskComponent setTaskName={setTaskName} setDueDate={setDueDate} setNumHours={setNumHours} />:  <EventComponent/>}

            {/* COMPONENT for rectangle event*/}
          
        
            {/* Add Button; add an onpress action */}
            <TouchableHighlight  style={styles.loginButtonWrapper}>
                <Button title=" ADD " color="#204969" onPress={()=>{
                console.log(taskName);
                console.log(dueDate);
                console.log(numHours);
            }}/>
            </TouchableHighlight>
          
            <KeyboardAvoidingView style={styles.bottomMenu}>
                <BottomMenu />
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
    title : {
        paddingVertical: height * 0.05,
        fontWeight: 'bold',
        fontSize: 36,
    },
    text : {
        marginTop:4,
        fontSize: 16,
        paddingRight: 2,
    },
    add : {
        flexDirection: 'row',
        paddingBottom: 5,
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