import React from 'react';
import { Calendar } from 'react-native-calendars';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

const CalendarView = ({ markedDates, selectedDate, onSelectedDate }) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <Calendar
      style={styles.calendar}
      markedDates={markedSelectedDate}
      theme={{
        selectedDayBackgroundColor: '#009688',
        arrowColor: '#009688',
        dotColor: '#009688',
        todayTextColor: '#009688',
      }}
      onDayPress={day => {
        onSelectedDate(day.dateString);
      }}
    />
  );
};

export default CalendarView;
