import React, { useReducer } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import TransparentCircleButton from './TransparentCircleButton';

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

const initialState = { mode: 'date', visible: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { mode: action.mode, visible: true };
    case 'close':
      return { ...state, visible: false }; // state 에 이미 들어가 있기때문에 스프레드 해준다.
    default:
      throw new Error('Error');
  }
};

const WriteHeader = ({
  onSave,
  onAskRemove,
  isEditing,
  date,
  onChangeDate,
}) => {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(reducer, initialState);

  const open = mode => dispatch({ type: 'open', mode });

  const close = () => dispatch({ type: 'close' });

  const onGoBack = () => {
    navigation.pop();
  };

  const onConfirm = selectedDate => {
    close();

    onChangeDate(selectedDate);
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton
          onPress={onGoBack}
          name="arrow-back"
          color="#424242"
        />
      </View>

      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton
            onPress={onAskRemove}
            name="delete-forever"
            color="#ef5350"
            hasMarginRight
          />
        )}

        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>

      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>

        <View style={styles.separator} />

        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>

      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
};

export default WriteHeader;
