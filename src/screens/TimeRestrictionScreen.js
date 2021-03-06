import React from 'react';
const {updateRestriction} = require("../models/Restriction");
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Dimensions,
    TouchableHighlight,
    Button,
    Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons'; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import {Picker} from '@react-native-picker/picker';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const dimensions = Dimensions.get('window');
const { width, height } = dimensions;


const TimeRestriction = ({ navigation }) => {
    const[timeBefore,setTimeBefore] = useState(new Date(2000,1,1,8,30,0,0));
    const[showBefore, setShowBefore] = useState(false);
    const[edittedBefore, setEdittedBefore] = useState(false);

    const[timeAfter,setTimeAfter] =  useState(new Date(2000,1,1,20,30,0,0));
    const[showAfter, setShowAfter] = useState(false);
    const[edittedAfter,setEdittedAfter] = useState(false);

    const[lunchStart,setLunchStart] =  useState(new Date(2000,1,1,13,0,0,0));
    const[lunchStartShow, setLunchStartShow] = useState(false);
    const[edittedLunchStart,setEdittedLunchStart] = useState(false);

    const[lunchEnd,setLunchEnd] =  useState(new Date(2000,1,1,14,0,0,0));
    const[lunchEndShow, setLunchEndShow] = useState(false);
    const[edittedLunchEnd,setEdittedLunchEnd] = useState(false);


    const[dinnerStart,setDinnerStart] =  useState(new Date(2000,1,1,19,0,0,0));
    const[dinnerStartShow, setDinnerStartShow] = useState(false);
    const[edittedDinnerStart,setEdittedDinnerStart] = useState(false);

    const[dinnerEnd,setDinnerEnd] =  useState(new Date(2000,1,1,20,0,0,0));
    const[dinnerEndShow, setDinnerEndShow] = useState(false);
    const[edittedDinnerEnd,setEdittedDinnerEnd] = useState(false);

    const[breakTime, setBreakTime] = useState(0);

    const[currDay,setCurrDay]= useState(0);

    const [completed,setCompleted] = useState([false,false,false,false,false,false,false]);

    const [restrictions,setRestriction] = useState({
        0:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        1:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        2:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        3:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        4:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        5:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5},
        6:{Before: new Date(2000,1,1,8,30,0,0),After: new Date(2000,1,1,20,30,0,0),Lunch:[new Date(2000,1,1,13,0,0,0),new Date(2000,1,1,14,0,0,0)],Dinner:[new Date(2000,1,1,19,0,0,0),new Date(2000,1,1,20,0,0,0)], Break:5}
    });

    

    const onChangeBefore = (event,selectedValue)=>{
        setShowBefore(false);
        setEdittedBefore(true);
        const selectedTime = selectedValue || new Date();
        setTimeBefore(selectedTime);

    }
    const onChangeAfter = (event,selectedValue)=>{
        setShowAfter(false);
        setEdittedAfter(true);
        const selectedTime = selectedValue || new Date();
        setTimeAfter(selectedTime);
    }

    const onChangeLunchStart = (event,selectedValue)=>{
        setLunchStartShow(false);
        setEdittedLunchStart(true);
        const selectedTime = selectedValue || new Date();
        setLunchStart(selectedTime);
    }

    const onChangeLunchEnd = (event,selectedValue)=>{
        setLunchEndShow(false);
        setEdittedLunchEnd(true);
        const selectedTime = selectedValue || new Date();
        setLunchEnd(selectedTime);
    }

    const onChangeDinnerStart = (event,selectedValue)=>{
        setDinnerStartShow(false);
        setEdittedDinnerStart(true);
        const selectedTime = selectedValue || new Date();
        setDinnerStart(selectedTime);
    }

    const onChangeDinnerEnd = (event,selectedValue)=>{
        setDinnerEndShow(false);
        setEdittedDinnerEnd(true);
        const selectedTime = selectedValue || new Date();
        setDinnerEnd(selectedTime);
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

    const DATA = [
        {day:'Su'},
        {day:'M'},
        {day:'T'},
        {day:'W'},
        {day:'Th'},
        {day:'F'},
        {day:'S'}
    ];

    const onClickConfirm = async () => {
        var id = await AsyncStorage.getItem('@id');
        var exists = completed.includes(false);
        
        Object.keys(restrictions).forEach(async (elem) =>{
               const day = DATA[elem]["day"];
               await updateRestriction(id, day, restrictions[elem])
         })
         navigation.replace('Home');
        
    }

    const clearTime = (index) => {
        console.log(restrictions);
        setCurrDay(index);
        setTimeBefore(restrictions[index].Before);
        setShowBefore(false);
        setEdittedBefore(false);
        setTimeAfter(restrictions[index].After);
        setShowAfter(false);
        setEdittedAfter(false);
        setLunchStart(restrictions[index].Lunch[0]);
        setLunchStartShow(false);
        setEdittedLunchStart(false);
        setLunchEnd(restrictions[index].Lunch[1]);
        setLunchEndShow(false);
        setEdittedLunchEnd(false);
        setDinnerStart(restrictions[index].Dinner[0]);
        setDinnerStartShow(false);
        setEdittedDinnerStart(false);
        setDinnerEnd(restrictions[index].Dinner[1]);
        setDinnerEndShow(false);
        setEdittedDinnerEnd(false);
        setBreakTime(restrictions[index].Break);
    }
    
    const onClickAdd = () => {
        var cpyArr = [...completed];
        cpyArr[currDay] = true;
        setCompleted(cpyArr);
        var copyRes = {...restrictions};
        copyRes[currDay] = {Before:timeBefore,After:timeAfter,Lunch:[lunchStart,lunchEnd],Dinner:[dinnerStart,dinnerEnd],Break:breakTime};
        setRestriction(copyRes);
    }
    
    const renderItem = ({item,index}) => {
        const color = completed[index] ? 'green': 'white';
        return( 
        <TouchableHighlight onPress={()=>clearTime(index)} style={{
            borderRadius: 15, 
            justifyContent:'center', 
            height: height*0.04, 
            flex:1,
            borderColor:'#B4BCC3',borderWidth:2,
            width:(width-20)*0.14, 
            backgroundColor:(currDay === index ? '#204969': color)}}>
            <Text style={{textAlign:'center', 
            }}>{item.day}</Text>
        </TouchableHighlight>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center',alignContent:'center'}}>
                <Text style={{flex:1,fontSize:35, paddingLeft:10, textAlign:'center'}}>Time Restriction</Text>
                {/* <Feather name="plus-circle" size={24} color="black" /> */}
            </View>
            <View style={{flexDirection:'column', }}>
                <View style={{height: 3, backgroundColor: 'black', marginHorizontal: '12%',}}></View>
                <View style={{flex:0, marginVertical:15,flexDirection:'row', paddingTop: 15}}>
                    <FlatList  horizontal={true} data={DATA} renderItem={renderItem}/>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center',paddingTop: 20,marginBottom:20}}>
                    <Text style={{marginLeft:width * 0.15}}>Dont Schedule Before:</Text>
                    {showBefore && <DateTimePicker value={timeBefore} mode={'time'} is24Hour={false} display="default" onChange={onChangeBefore}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setShowBefore(true)}>{edittedBefore?formatTime(timeBefore): formatTime(restrictions[currDay].Before)}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center',marginVertical:20}}>
                    <Text style={{marginLeft:width *0.15}}>Dont Schedule After:</Text>
                    {showAfter && <DateTimePicker value={timeAfter} mode={'time'} is24Hour={false} display="default" onChange={onChangeAfter}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setShowAfter(true)}>{edittedAfter?formatTime(timeAfter):formatTime(restrictions[currDay].After)}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center',marginVertical:20}}>
                    <Text style={{marginLeft:width *0.15}}>Lunch:</Text>
                    {lunchStartShow && <DateTimePicker value={lunchStart} mode={'time'} is24Hour={false} display="default" onChange={onChangeLunchStart}/>}
                    <View style={{marginHorizontal:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setLunchStartShow(true)}>{edittedLunchStart?formatTime(lunchStart):formatTime(restrictions[currDay].Lunch[0])}</Text>
                    </View>
                    <Text>to</Text>
                    {lunchEndShow && <DateTimePicker value={lunchEnd} mode={'time'} is24Hour={false} display="default" onChange={onChangeLunchEnd}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setLunchEndShow(true)}>{edittedLunchEnd?formatTime(lunchEnd):formatTime(restrictions[currDay].Lunch[1])}</Text>
                    </View>
                </View>

                <View style={{flexDirection:'row', alignItems:'center', alignContent:'center',marginVertical:20}}>
                    <Text style={{marginLeft:width *0.15}}>Dinner:</Text>
                    {dinnerStartShow && <DateTimePicker value={dinnerStart} mode={'time'} is24Hour={false} display="default" onChange={onChangeDinnerStart}/>}
                    <View style={{marginHorizontal:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setDinnerStartShow(true)}>{edittedDinnerStart?formatTime(dinnerStart):formatTime(restrictions[currDay].Dinner[0])}</Text>
                    </View>
                    <Text>to</Text>
                    {dinnerEndShow && <DateTimePicker value={dinnerEnd} mode={'time'} is24Hour={false} display="default" onChange={onChangeDinnerEnd}/>}
                    <View style={{marginLeft:10, backgroundColor:'#B4BCC3', width:width*0.20,}}>
                        <Text style={{textAlign:'center'}} onPress={()=>setDinnerEndShow(true)}>{edittedDinnerEnd?formatTime(dinnerEnd):formatTime(restrictions[currDay].Dinner[1])}</Text>
                    </View>
                </View>
            </View>
            <TouchableHighlight style={styles.loginButtonWrapper}>
                <Button title='ADD' style={styles.button} color="#204969" onPress={onClickAdd}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.loginButtonWrapper}>
                <Button title='CONFIRM' style={styles.button} color="#204969" onPress={onClickConfirm}/>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonWrapper: {
        paddingTop: height * 0.01,
        width: width * 0.5,
        justifyContent: 'center',
        marginBottom: 10,
    },
    button: {
        borderRadius: 20,
    },
});

export default TimeRestriction;