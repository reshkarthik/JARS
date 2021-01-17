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

const EventComponent = ({}) => {
        {/* COMPONENT for rectangle task*/}
        return (
            <View style={{  
                marginTop: 14,
                height: height * 0.35,
                width: width* 0.9,
                borderRadius: 5,
                backgroundColor: '#FFFFFF', }}>
        
                    {/* name */}
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
        
                    {/* date */}
                    <View style ={{flexDirection: 'row' }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Date: </Text>
                        <TextInput 
                        style={{
                            width: width * 0.57,
                            backgroundColor: '#B4BCC3',
                            borderRadius: 3,
                            flexDirection: 'row',
                            fontSize: 14,
                            marginBottom: 15 }}
                        returnKeyType="next"
                        />
                    </View>
        
                    {/* start time */}            
                    <View style ={{flexDirection: 'row'  }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Start Time: </Text>
                        <TextInput 
                        style={{
                            paddingLeft: width * 0.02,
                            width: width * 0.2,
                            backgroundColor: '#B4BCC3',
                            borderRadius: 3,
                            flexDirection: 'row',
                            fontSize: 14,
                            marginBottom: 15 }}
                        returnKeyType="next"
                        />
                    </View> 
        
                    {/* Stop Time */}
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Stop Time: </Text>
                        <TextInput 
                        style={{
                            paddingLeft: width * 0.02,
                            width: width * 0.2,
                            backgroundColor: '#B4BCC3',
                            borderRadius: 3,
                            flexDirection: 'row',
                            fontSize: 14,
                            marginBottom: 15 }}
                        returnKeyType="next"
                        />
                    </View> 
        
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Repeat: </Text>
                        <TextInput 
                        style={{
                            paddingLeft: width * 0.02,
                            width: width * 0.2,
                            backgroundColor: '#B4BCC3',
                            borderRadius: 3,
                            flexDirection: 'row',
                            fontSize: 14,
                            marginBottom: 15 }}
                        returnKeyType="next"
                        />
                    </View>
        
                    <View style ={{flexDirection: 'row', }}> 
                        <Text style={{marginTop: 3, fontSize: 16, paddingHorizontal: 10, }}> Repeat Until: </Text>
                        <TextInput 
                        style={{
                            paddingLeft: width * 0.02,
                            width: width * 0.4,
                            backgroundColor: '#B4BCC3',
                            borderRadius: 3,
                            flexDirection: 'row',
                            fontSize: 14,
                            marginBottom: 15 }}
                        returnKeyType="next"
                        />
                    </View> 
                </View>
        );
}

export default EventComponent;