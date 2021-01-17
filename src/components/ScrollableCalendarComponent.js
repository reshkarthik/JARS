import React, { useState } from 'react';
import { View, Alert, Modal, Text, TouchableHighlight, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { CalendarList, Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';

const { height } = Dimensions.get('window');

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const ScrollableCalendar = ({ }) => {
    const [items, setItems] = useState({});

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{ marginRight: 10, marginTop: 17, }}>
                <Card>
                    <Card.Content>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                            <Text>{item.name}</Text>
                            <Avatar.Text label="hi" backgroundColor='#204969' />
                        </View>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={{
                    '2012-05-22': [{ name: 'item 1 - any js object' }],
                    '2012-05-23': [{ name: 'item 2 - any js object', height: 80 }],
                    '2012-05-24': [],
                    '2021-01-24': [{ name: 'item 1 - any js object' }],
                    '2021-01-25': [{ name: 'item 1 - any js object' }],
                    '2012-05-25': [{ name: 'item 3 - any js object' }, { name: 'any js object' }]
                }}
                //loadItemsForMonth={loadItems}
                //selected={'2017-05-16'}
                renderItem={renderItem}
                theme={{
                    selectedDayBackgroundColor: '#204969',
                    dotColor: '#204969',
                    selectedDotColor: '#ffffff',
                    todayTextColor: '#41D9BD',
                    backgroundColor: '#E6E7E9',
                    calendarBackground: '#E6E7E9',
                    agendaDayTextColor: '#204969',
                    agendaDayNumColor: '#204969',
                    agendaTodayColor: 'black',
                    agendaKnobColor: '#B4BCC3'
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
});
export default ScrollableCalendar;
