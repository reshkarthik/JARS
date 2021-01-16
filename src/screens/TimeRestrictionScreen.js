import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const dimensions = Dimensions.get('window');
const { width, height } = dimensions;


const TimeRestriction = ({ }) => {
    const[timeBefore,setTimeBefore] = useState(new Date());
    const[showBefore, setShowBefore] = useState(false);
    const[edittedBefore, setEdittedBefore] = useState(false);

    const[timeAfter,setTimeAfter] = useState(false);
    const[showAfter, setShowAfter] = useState(false);
    const[edittedAfter,setEdittedAfter] = useState(false);

    const[lunchStart,setLunchStart] = useState(false);
    const[lunchStartShow, setLunchStartShow] = useState(false);
    const[edittedLunchStart,setEdittedLunchStart] = useState(false);

    const[lunchEnd,setLunchEnd] = useState(false);
    const[lunchEndShow, setLunchEndShow] = useState(false);
    const[edittedLunchEnd,setEdittedLunchEnd] = useState(false);


    const[dinnerStart,setDinnerStart] = useState(false);
    const[dinnerStartShow, setDinnerStartShow] = useState(false);
    const[edittedDinerStart,setEdittedDinnerStart] = useState(false);

    const[dinnerEnd,setDinerEnd] = useState(false);
    const[dinnerEndShow, setDinnerEndShow] = useState(false);
    const[edittedDinnerEnd,setEdittedDinnerEnd] = useState(false);


    

    
  

    

    const onChangeBefore = (event,selectedValue)=>{
        setShowBefore(false);
        setEdittedBefore(true);
        const selectedTime = selectedValue || new Date();
        setTimeBefore(selectedTime);

    }
    const onChangeAfter = (event,selectedValue)=>{
        setShowAfterr(false);
        setEdittedAfter(true);
        const selectedTime = selectedValue || new Date();
        setTimeAfter(selectedTime);
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
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row',alignItems:'center',alignContent:'center'}}>
                <Text style={{fontSize:35, paddingLeft:10}}>Time Restriction</Text>
                {/* <Feather name="plus-circle" size={24} color="black" /> */}
            </View>
            <View style={{flexDirection:'column'}}>
                <View style={{height: 3, backgroundColor: 'black', marginHorizontal: '12%',}}></View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                    <Text style={{marginLeft:10}}>Dont Schedule Before:</Text>
                    {showBefore && <DateTimePicker value={timeBefore} mode={'time'} is24Hour={false} display="default" onChange={onChangeBefore}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setShowBefore(true)}>{edittedBefore?formatTime(timeBefore):"Pick a Time"}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                    <Text style={{marginLeft:10}}>Dont Schedule After:</Text>
                    {showAfter && <DateTimePicker value={timeAfter} mode={'time'} is24Hour={false} display="default" onChange={onChangeAfter}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setShowAfter(true)}>{edittedAfter?formatTime(timeAfter):"Pick a Time"}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center'}}>
                    <Text style={{marginLeft:10}}>Lunch:</Text>
                    {showAfter && <DateTimePicker value={timeAfter} mode={'time'} is24Hour={false} display="default" onChange={onChangeAfter}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setShowAfter(true)}>{edittedAfter?formatTime(timeAfter):"Pick a Time"}</Text>
                    </View>
                </View>
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