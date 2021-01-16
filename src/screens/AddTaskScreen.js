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

const AddTask = ({ navigation }) => {
    const [task, setTask] = useState('');
    const [event, setEvent] = useState('');
    const [state, setState] = useState('');
    return (
        <SafeAreaView style={styles.container}>
        <Image source={require('../../images/JARS_logo.png')}/>
        
        <View style={styles.add}>
            <Text style={styles.text}> Add </Text> 
                <Picker
                    selectedValue={state.item}
                    style={{height: 50, width: 125, }}
                    dropdownIconColor='#000000'
                    onValueChange={(itemValue, itemIndex) =>
                        setState({item: itemValue})
                    }>
                    <Picker.Item label="task" value="task" />
                    <Picker.Item label="event" value="event" />
                </Picker>
                <Feather style={styles.iconStyle} name="plus-circle" />
        </View>
        <View style={styles.hairline} />






        {/* COMPONENT for rectangle task*/}
        <View style={{  
            marginTop: 14,
            height: height * 0.18,
            width: width* 0.9,
            borderRadius: 5,

            backgroundColor: '#FFFFFF', }}>
            
             {/* Name */}
            <View style ={{flexDirection: 'row', paddingTop: 10, }}> 
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
                />
            </View> 
        </View>


           {/* Add Button */}
        <TouchableHighlight style={styles.loginButtonWrapper}>
            <Button title=" ADD " color="#204969" />
        </TouchableHighlight>



      

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
        alignItems: 'center',
    },
    hairline: {
        backgroundColor: '#A2A2A2',
        height: 2,
        width: width
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
        marginTop: 15,
        fontSize: 16,
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

    },
});

export default AddTask;