import React, {useState} from 'react';
import {
    View,
    Text,
    Dimensions,
} from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const TaskComponent = ({ setTaskName, setDueDate, setNumHours}) => {
        {/* COMPONENT for rectangle task*/}

        const [value,setValue] = useState('');

        const [due,setDue] = useState(new Date());
        const [dueShow,setDueShow] = useState(false);

        const [hours, setHours] = useState('');

        const onChangeDue = (event, selectedValue) =>{
            setDueShow(false);
            setDue(selectedValue);
            setDueDate(selectedValue);
        } 
        
        const formatDate = (currentDate) =>{
            var month = (currentDate.getMonth() + 1).toString();
            var day = currentDate.getDate().toString();
            var year = currentDate.getFullYear().toString();
            return `${month}/${day}/${year}`;
        }

        return (
        <View style={{  
            marginTop: 14,
            height: height * 0.18,
            width: width* 0.9,
            borderRadius: 5,
            backgroundColor: '#FFFFFF' }}>
            
             {/* Name */}
            <View style ={{flexDirection: 'row', paddingTop: 14, }}> 
                <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Name: </Text>
                <TextInput
                value={value}
                onChangeText={text=>{setTaskName(text); setValue(text);}}
                style={{
                    paddingLeft: width * 0.02,
                    width: width * 0.57,
                    backgroundColor: '#B4BCC3',
                    borderRadius: 3,
                    flexDirection: 'row',
                    fontSize: 14,
                    marginBottom: 15 }}
                returnKeyType="next"
                />
            </View> 

             {/* Due date */}
             <View style ={{flexDirection: 'row', }}> 
                <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Due Date: </Text>
                {dueShow && <DateTimePicker value={due} mode={'date'} display="default" onChange={onChangeDue}/>}
                <View style={{
                    paddingLeft: width * 0.02,
                    width: width * 0.52,
                    backgroundColor: '#B4BCC3',
                    borderRadius: 3,
                    fontSize: 14,
                    marginBottom: 15 }}> 
                    <Text onPress={()=>setDueShow(true)}>
                    {formatDate(due)}</Text>
                    </View>
            </View> 

              {/* # of hours Need */}
              <View style ={{flexDirection: 'row',  }}> 
                <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> # of Hours Needed: </Text>
                <TextInput 
                value={hours}
                onChangeText={text=>{setNumHours(parseInt(text)); setHours(text);}}
                style={{
                    paddingLeft: width * 0.02,
                    width: width * 0.35,
                    backgroundColor: '#B4BCC3',
                    borderRadius: 3,
                    flexDirection: 'row',
                    fontSize: 14,
                    marginBottom: 15 }}
                returnKeyType="done"
                keyboardType="number-pad"
                />
                </View> 
            </View>
        );
}

export default TaskComponent;