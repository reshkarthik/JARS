import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button,
    Dimensions,
    TextInput,
    TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const SignUp = ({ navigation }) => {
   
    return (
        <SafeAreaView style={styles.container}>
   
        <Image source={require('../../images/calendar_logo.png')}/>
        <Text style={styles.title}> Sign Up </Text>

    
        {/* enter your email */}
        <TextInput 
        style={styles.textInputStyle}
        returnKeyType="next"
        textContentType='emailAddress'
        keyboardType="email-address" 
        placeholder=" enter email address"
        value={email}
        />
        
        {/* enter new password */}
        <TextInput 
        style={styles.textInputStyle}
        returnKeyType="next"
        textContentType='newPassword'
        placeholder=" enter new password"
        value={email}
        />
        {/* confirm new password */}
         <TextInput 
        style={styles.textInputStyle}
        returnKeyType="next"
        textContentType='newPassword'
        placeholder=" confirm new password"
        value={email}
        />
       {/* create account button */}
        <TouchableHighlight style={styles.loginButtonWrapper}>
            <Button title="CREATE ACCOUNT" color="#204969" />
        </TouchableHighlight>

        {/* no account text */}
        <View style={styles.noAccount}>
          <Text> Already have an account? </Text>
          <Text style={styles.textWeight} onPress={() => navigation.replace('LogIn')}>
            Login
          </Text>
        </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputs: {
        backgroundColor: '#E6E7E9',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: "space-between",
    },
    title : {
        paddingVertical: height * 0.05,
        fontWeight: 'bold',
        fontSize: 36,
    },
     textInputStyle: {
        paddingLeft: width * 0.02,
        width: width * 0.76,
        height: height * 0.052,
        backgroundColor: '#B4BCC3',
        borderRadius: 3,
        flexDirection: 'row',
        fontSize: 14,
        marginBottom: 15
      },
     loginButtonWrapper: {
        marginHorizontal: width * 0.12,
        width: width * 0.76,
        height: height * 0.052,
        justifyContent: 'center',
        marginBottom: 10,

      },
      noAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: height * 0.06,
      },
});

export default SignUp;