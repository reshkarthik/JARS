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

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const TaskComponent = ({}) => {
        {/* COMPONENT for rectangle task*/}
        return (
        <View style={{  
            marginTop: 14,
            height: height * 0.18,
            width: width* 0.9,
            borderRadius: 5,
            backgroundColor: '#FFFFFF', }}>
            
             {/* Name */}
            <View style ={{flexDirection: 'row', paddingTop: 14, }}> 
                <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Name: </Text>
                <TextInput 
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
                <TextInput 
                style={{
                    paddingLeft: width * 0.02,
                    width: width * 0.52,
                    backgroundColor: '#B4BCC3',
                    borderRadius: 3,
                    flexDirection: 'row',
                    fontSize: 14,
                    marginBottom: 15 }}
                returnKeyType="next"
                />
            </View> 

              {/* # of hours Need */}
              <View style ={{flexDirection: 'row',  }}> 
                <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> # of Hours Needed: </Text>
                <TextInput 
                style={{
                    paddingLeft: width * 0.02,
                    width: width * 0.35,
                    backgroundColor: '#B4BCC3',
                    borderRadius: 3,
                    flexDirection: 'row',
                    fontSize: 14,
                    marginBottom: 15 }}
                returnKeyType="next"
                keyboardType="number-pad"
                />
                </View> 
            </View>
        );
}

export default TaskComponent;