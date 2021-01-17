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

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const EventComponent = ({}) => {
    const [state, setState] = useState('');
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