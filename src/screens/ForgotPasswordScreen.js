import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Button,
    Dimensions,
    ActivityIndicator,
    StatusBar,
    Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const buttonColor = Platform.OS === 'ios' ? '#ffffff' : '#204969';
const { width, height } = Dimensions.get('window');

const ForgotPw = ({ navigation }) => {
    const [email, setEmail] = useState('');
    return (
        <SafeAreaView style={styles.somecontainer}>

            <View style={styles.container}>
                <View style={styles.centeredContainer}>
                    <Text style={styles.SignUpText}>Send Reset Password Link</Text>
                    <View style={styles.lineOrLine}>
                        <View style={styles.line} />
                    </View>
                    {Platform.OS === 'ios' ? <View style={styles.lineline} /> : null}
                    <TextInput
                        returnKeyType="done"
                        keyboardType="email-address"
                        style={styles.textInputStyle}
                        placeholder=" Enter Email"
                        value={email}
                        onChangeText={(newTerm) => setEmail(newTerm)}
                    //onSubmitEditing={() => ResetPwAxios()}
                    />

                    <TouchableHighlight style={styles.loginButtonWrapper}>
                        <Button title="Send Link" color={buttonColor} />
                    </TouchableHighlight>
                    {/*}
                {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
                {error ? (
                    <View style={styles.error}>
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null}

                {/* LINE OR LINE */}
                    <View style={styles.lineOrLine}>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.loginWrapper}>
                        <Text style={styles.goBackToLogin}>Already have an account? </Text>
                        <Text style={styles.boldText} onPress={() => navigation.replace('LogIn')}>
                            Login
                    </Text>
                    </View>
                </View>
            </View>
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
        justifyContent: 'center'
    },
    centeredContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    SignUpText: {
        paddingBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 20,
        borderBottomWidth: 2,
        marginBottom: Platform.OS === 'ios' ? 0 : 20,
        marginHorizontal: width * 0.12,
    },
    lineline: {
        height: height * 0.003,
        backgroundColor: 'black',
        marginLeft: '12%',
        marginRight: '12%',
        marginBottom: 20,
    },
    loginButtonWrapper: {
        marginHorizontal: width * 0.12,
        width: width * 0.4,
        height: height * 0.052,
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#204969',
    },
    goBackToLogin: {
        paddingBottom: 10,
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 20,
    },
    lineOrLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: height * 0.003,
        backgroundColor: 'black',
        marginHorizontal: '12%',
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
    boldText: {
        fontWeight: 'bold'
    },
    loginWrapper: {
        flexDirection: 'row',
        marginHorizontal: width * 0.12,
        paddingTop: 15,
        alignContent: 'center',
        justifyContent: 'center',
    },
});

export default ForgotPw;