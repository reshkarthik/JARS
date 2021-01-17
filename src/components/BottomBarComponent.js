import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome5, Feather, AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { RFPercentage } from 'react-native-responsive-fontsize';
//import { useSelector } from 'react-redux';
//import axiosWithToken from '../api/axiosWithToken';

const { width, height } = Dimensions.get('window');

const BottomMenu = ({ navigation, onSettingsPress }) => {
    const { routeName } = navigation.state;
    return (
        <View style={styles.container}>
            {/*
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                    navigation.replace('Today');
                }}>
                <MaterialCommunityIcons name="calendar-today" size={33} color={routeName === 'Today' ? 'white' : '#204969'} />
                <Text
                    style={
                        routeName === 'Today' ? styles.menuItemTextScreen : styles.menuItemText
                    }>
                    Today
                </Text>
            </TouchableOpacity>
                */}

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                    navigation.replace('Home');
                }}>
                <MaterialCommunityIcons name="calendar-month-outline" size={33} color={routeName === 'Home' ? 'white' : '#204969'} style={{ marginBottom: 5 }} />
                <Text style={routeName === 'Home' ? styles.menuItemTextScreen : styles.menuItemText}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}>
                <AntDesign name="pluscircleo" size={32} color='#204969' style={{ marginBottom: 5 }} />
                <Text style={styles.menuItemText}>
                    Add
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.replace('Todo')}>
                <FontAwesome5 name="tasks" size={30} color={routeName === 'Todo' ? 'white' : '#204969'} style={{ marginBottom: 5 }} />
                <Text style={routeName === 'Todo' ? styles.menuItemTextScreen : styles.menuItemText}>
                    To-Do
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                    onSettingsPress(true);
                }}>
                <Feather name="settings" size={30} color="#204969" style={{ marginBottom: 5 }} />
                <Text style={styles.menuItemText}>
                    Settings
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: height * 0.1,
        backgroundColor: '#B4BCC3',
        paddingHorizontal: '10%',
    },
    middleMenuItem: {
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    menuItem: {
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButton: {
        width: width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    menuItemText: {
        fontSize: RFPercentage(1.7),
        color: '#204969',
    },
    menuItemTextScreen: {
        fontSize: RFPercentage(1.7),
        color: 'white',
    },
});

export default withNavigation(BottomMenu);
