import React, { useState } from 'react';
const {login} = require('../routes/UserRoutes');

import {
    StyleSheet,
    View,
    Image,
    Dimensions,
    Text,
    Button,
    TouchableHighlight,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useSetId from '../hooks/useSetId';

const { width, height } = Dimensions.get('window');

const buttonColor = Platform.OS === 'ios' ? '#ffffff' : '#204969';

const LogIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]= useState(false);
    const [storeId] = useSetId();
    return (
        <SafeAreaView style={styles.somecontainer}>
            {loading?<ActivityIndicator size="large" color="#0000ff" />:<KeyboardAwareScrollView style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        resizeMode="contain"
                        style={styles.logoStyle}
                        source={require('../../images/app_logo.png')} />
                </View>
                <View style={styles.textWrapper}>
                    <TextInput
                        style={styles.textInputStyle}
                        returnKeyType="next"
                        //textContentType='emailAddress'
                        keyboardType="email-address"
                        placeholder=" Enter Username/email"
                        value={email}
                        onChangeText={text=>setEmail(text)}
                    />

                    <TextInput
                        style={styles.textInputStyle}
                        returnKeyType="next"
                        //textContentType='Password'
                        secureTextEntry
                        placeholder=" Enter password"
                        value={password}
                        onChangeText={text=>setPassword(text)}
                    />
                    <TouchableHighlight style={styles.loginButtonWrapper}>
                        <Button title="LOGIN" color={buttonColor} style={styles.menuItem}
                onPress={async () => {
                    console.log(email);
                    console.log(password);
                    setLoading(true);
                    var id = await login(email, password);
                    console.log(id);
                    if(id === -1){
                        setLoading(false);
                        console.log("your dumb, put the right password pls");
                    }else{
                        storeId(id);
                        setLoading(false);
                        console.log('hello');
                        navigation.replace('Home');
                    }

                }}/>
                    </TouchableHighlight>
                </View>
                <View style={styles.accountWrapper}>
                    <View style={styles.noAccount}>
                        <Text>No Account? </Text>
                        <Text style={styles.boldText} onPress={() => navigation.replace('SignUp')}>
                            Sign up
                        </Text>
                    </View>
                    {/* Forgot Password */}
                    <Text style={styles.boldText} onPress={() => navigation.replace('ForgotPw')}>
                        Forgot Password?
                    </Text>
                </View>
            </KeyboardAwareScrollView>}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    somecontainer: {
        flex: 1,
        backgroundColor: 'black',
    },
    container: {
        flex: 1,
        backgroundColor: '#E6E7E9',
    },
    imageContainer: {
        marginTop: 40,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoStyle: {
        width: 0.8 * width,
        height: 0.375 * height,
    },
    textWrapper: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInputStyle: {
        paddingLeft: width * 0.02,
        width: width * 0.76,
        height: height * 0.052,
        backgroundColor: '#B4BCC3',
        borderRadius: 3,
        flexDirection: 'row',
        fontSize: 14,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButtonWrapper: {
        marginHorizontal: width * 0.12,
        width: width * 0.35,
        height: height * 0.052,
        justifyContent: 'center',
        marginBottom: 10,
        backgroundColor: '#204969'
    },
    accountWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    noAccount: {
        flexDirection: 'row',
        marginBottom: height * 0.01,
        marginTop: height * 0.06,
    },
    boldText: {
        fontWeight: 'bold'
    }
});

export default LogIn;