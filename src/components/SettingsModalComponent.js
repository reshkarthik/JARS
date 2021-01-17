import React from 'react';
import { View, Alert, Modal, Text, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const SettingsModal = ({ navigation, isVisible }) => {
    return (
        <Modal
            animationType="slide"
            transparent
            visible
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: '#41D9BD' }}
                        onPress={() => {
                            isVisible(false);
                            navigation.replace('TimeRestriction');
                        }}>
                        <Text style={styles.textStyle}>User Settings</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: '#41D9BD' }}
                        onPress={() => {
                            isVisible(false);
                            navigation.replace('LogIn');
                        }}>
                        <Text style={styles.textStyle}>Log Out</Text>
                    </TouchableHighlight>

                    <MaterialIcons
                        name="clear"
                        size={30}
                        style={{ position: 'absolute', top: 5, right: 5 }}
                        onPress={() => {
                            isVisible(false);
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEF4D1',
        paddingBottom: height * 0.17,
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        backgroundColor: '#F194FF',
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginTop: 20,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    boolText: {
        justifyContent: 'center',
        width: '50%',
    },
    row: {
        marginHorizontal: 20,
        flexDirection: 'row',
    },
    header: {
        fontWeight: 'bold',
    },
});
export default withNavigation(SettingsModal);
