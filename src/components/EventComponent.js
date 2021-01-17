import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;



const EventComponent = ({setEventName, setEventDate, 
    setStart, setEventEnd, setRepeat, setRepeatUntil}) => {

    const [value,setValue] = useState('');
    
    const[timeStart,setTimeStart] =  useState(new Date());
    const[showStart, setShowStart] = useState(false);
    const[edittedStart,setEdittedStart] = useState(false);

    const[timeStop,setTimeStop] =  useState(new Date());
    const[showStop, setShowStop] = useState(false);
    const[edittedStop,setEdittedStop] = useState(false);
    
    const [date,setDate] = useState(new Date());
    const [dateShow,setDateShow] = useState(false);

    const [repeatDate, setRepeatDate] = useState(new Date());
    const [repeatDateShow, setRepeatDateShow] = useState(false);

    const [repeat, setNewRepeat] = useState('Never');

    const onChangeStart = (event,selectedValue)=>{
        setShowStart(false);
        setEdittedStart(true);
        setStart(selectedValue);
        const selectedTime = selectedValue || new Date();
        setTimeStart(selectedTime);
    }

    const onChangeStop = (event,selectedValue)=>{
        setShowStop(false);
        setEdittedStop(true);
        setEventEnd(false);
        const selectedTime = selectedValue || new Date();
        setTimeStop(selectedTime);
    }

    const onChangeDate = (event, selectedValue) =>{
        setDateShow(false);
        setDate(selectedValue);
        setEventDate(selectedValue);
    } 
    const onChangeRepeatDate = (event, selectedValue) => {
        setRepeatDateShow(false);
        setRepeatDate(selectedValue);
        setRepeatUntil(selectedValue);
    }

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

    const formatDate = (currentDate) =>{
        var month = (currentDate.getMonth() + 1).toString();
        var day = currentDate.getDate().toString();
        var year = currentDate.getFullYear().toString();
        return `${month}/${day}/${year}`;
        
    }

    const [state, setState] = useState('');
        {/* COMPONENT for rectangle task*/}
        return (
            <View style={styles.rectangle}>
        
                    {/* name */}
                    <View style ={{flexDirection: 'row', paddingTop: 14, }}> 
                        <Text style={{}}> Name: </Text>
                        <TextInput 
                        value={value}
                        onChangeText={text=>{setEventName(text); setValue(text);}}
                        style={styles.textInput}
                        returnKeyType="next"
                        />
                    </View> 
        
                    {/* date */}
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={styles.key}> Date: </Text>
                        {
                            dateShow && <DateTimePicker 
                            value={date} 
                            mode={'date'} 
                            display="default" 
                            onChange={onChangeDate} />
                        }
                        <View style={styles.day}> 
                            <Text onPress={()=>setDateShow(true)}>
                            {formatDate(date)}</Text>
                        </View>
                     </View> 
        
                    {/* start time */}            
                    <View style ={{flexDirection: 'row', paddingBottom: 15}}> 
                        <Text style={styles.key}> Start Time: </Text>
                        {   
                            showStart && <DateTimePicker 
                            value={timeStart} 
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
                            showStop && <DateTimePicker 
                            value={timeStop} 
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
                                selectedValue={state}
                                style={{height: 30, borderRadius: 3, width: 170, }}
                                dropdownIconColor='#000000'
                                onValueChange={(itemValue, itemIndex) =>
                                {
                                    setState(itemValue);
                                    setRepeat(itemValue);
                                    setNewRepeat(itemValue);
                                }
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
                    
                    {/* Repeat Date */}
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Repeat Until: </Text>
                        {repeatDateShow && <DateTimePicker value={repeatDate} mode={'date'} display="default" onChange={onChangeRepeatDate}/>}
                        <View style={styles.day}> 
                            <Text 
                                onPress={()=>setRepeatDateShow(true)}>{
                                formatDate(repeatDate)}</Text>
                        </View>
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
    day: {
        paddingLeft: width * 0.02,
        width: 100,
        height: 30,
        alignContent:'center',
        justifyContent: 'center',
        backgroundColor: '#B4BCC3',
        borderRadius: 3,
        fontSize: 14,
        marginBottom: 15 
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