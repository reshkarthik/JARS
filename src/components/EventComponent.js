import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    Button,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Picker} from '@react-native-picker/picker';
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const formatTime = (currentTime) =>{
    var strTime = currentTime.getHours().toString();
    var minute = currentTime.getMinutes();
    var strMin = '';
    if(minute < 10){
        strTime = strTime + ":" + "0" + minute.toString();
    }else{
        strTime = strTime + ":" + minute.toString();
    }
    return strTime;
}

const EventComponent = ({}) => {
    const[timeStart,setTimeStart] =  useState(new Date(2000,1,1,20,30,0,0));
    const[showStart, setShowStart] = useState(false);
    const[edittedStart,setEdittedStart] = useState(false);

    const[timeStop,setTimeStop] =  useState(new Date(2000,1,1,20,30,0,0));
    const[showStop, setShowStop] = useState(false);
    const[edittedStop,setEdittedStop] = useState(false);
    
    const onChangeStart = (event,selectedValue)=>{
        setShowStart(false);
        setEdittedStart(true);
        const selectedTime = selectedValue || new Date();
        setTimeStart(selectedTime);
    }

    const onChangeStop = (event,selectedValue)=>{
        setShowStop(false);
        setEdittedStop(true);
        const selectedTime = selectedValue || new Date();
        setTimeStop(selectedTime);
    }

    const [state, setState] = useState('');
        {/* COMPONENT for rectangle task*/}
        return (
            <View style={styles.rectangle}>
        
                    {/* name */}
                    <View style ={{flexDirection: 'row', paddingTop: 14, }}> 
                        <Text style={{}}> Name: </Text>
                        <TextInput 
                        style={styles.textInput}
                        returnKeyType="next"
                        />
                    </View> 
        
                    {/* date */}
                    <View style ={{flexDirection: 'row' }}> 
                        <Text style={styles.key}> Date: </Text>
                        <TextInput 
                        style={styles.textInput}
                        returnKeyType="next"
                        />
                    </View>
        
                    {/* start time */}            
                    <View style ={{flexDirection: 'row', paddingBottom: 15}}> 
                        <Text style={styles.key}> Start Time: </Text>
                        {
                            showStart && <DateTimePicker value={timeStart} 
                            mode={'time'} 
                            is24Hour={false} 
                            display="default" 
                            onChange={onChangeStart} /> 
                        }
                        <View style={styles.date}>
                            <Text 
                                style={{textAlign:'center'}} 
                                onPress={()=>setShowStart(true)} >
                                {formatTime(timeStart)}
                            </Text>
                        </View>
                    </View>
               
                    
                    {/* Stop Time */}
                    <View style ={{flexDirection: 'row', paddingBottom: 15}}> 
                        <Text style={styles.key}> Stop Time: </Text>
                        {
                            showStop && <DateTimePicker value={timeStop} 
                            mode={'time'} 
                            is24Hour={false} 
                            display="default" 
                            onChange={onChangeStop} /> 
                        }
                        <View style={styles.date}>
                            <Text 
                                style={{textAlign:'center'}} 
                                onPress={()=>setShowStop(true)} >
                                {formatTime(timeStop)}
                            </Text>
                        </View>
                        
                    </View>


                    {/* Repeat */}
                    <View style ={{flexDirection: 'row', marginBottom: 15, alignContent:'center'}}> 
                        <Text style={{marginTop: 4, fontSize: 16, paddingHorizontal: 10,}}> Repeat: </Text>
                        <View style={{borderRadius:3, backgroundColor: '#B4BCC3'}}>
                            <Picker
                            selectedValue={state.item}
                            style={{height: 30, borderRadius: 3, width: 125, }}
                            dropdownIconColor='#000000'
                            onValueChange={(itemValue, itemIndex) =>
                                setState({item: itemValue})
                            }>
                            <Picker.Item label="Never" value="never" />
                            <Picker.Item label="Every Day" value="everyday" />
                            <Picker.Item label="Every Week" value="everyweek" />
                            <Picker.Item label="Every 2 Weeks" value="every2weeks" />
                            <Picker.Item label="Every Month" value="everymonth" />
                            <Picker.Item label="Every Year" value="everyyear" />
                            </Picker>
                        </View>
        
                    </View>
        
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10,}}> Repeat Until: </Text>
                        <TextInput 
                        style={styles.textInput}
                        returnKeyType="next"
                        />
                    </View> 
                </View>
        );
}


const styles = StyleSheet.create({
    rectangle : {
        marginTop: 14,
        height: height * 0.35,
        width: width* 0.9,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
    },
    textInput: {
        paddingLeft: width * 0.02,
        width: width * 0.57,
        backgroundColor: '#B4BCC3',
        borderRadius: 3,
        flexDirection: 'row',
        fontSize: 14,
        marginBottom: 15 
    },
    key: {
        marginTop: 3, fontSize: 16, paddingHorizontal: 10, 
    },
    date: {
        marginLeft:10, 
        backgroundColor:'#B4BCC3', 
        width:width*0.20, 
        alignContent:'center', 
        justifyContent:'center', 
        borderRadius: 3},
});
export default EventComponent;