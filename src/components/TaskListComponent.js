import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const TaskListComponent = ({ event }) => {
    const name = event.name;
    const startTime = event.start_time;
    const endTime = event.end_time;
    const date = event.date;

    return (
        <View style={{ marginBottom: 10 }}>
            <Card>
                <Card.Content>
                    <View style={styles.row}>
                        <View style={styles.column}>
                            <Text style={styles.titleStyle}>{name}</Text>
                            <Text style={styles.titleStyle}>{date}</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={styles.titleStyle}>
                                {startTime}-
                        </Text>
                            <Text style={styles.titleStyle}>{endTime}</Text>
                        </View>
                    </View>
                </Card.Content >
            </Card >
        </View>
    );
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 20,
        color: '#204969'
    }
});

export default TaskListComponent;

