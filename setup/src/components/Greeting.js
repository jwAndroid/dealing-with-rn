import React from 'react';
import {Text} from 'react-native';

const Greeting = props => {
  return <Text style={{color: 'white'}}>{props.name}</Text>;
};

Greeting.defaultProps = {
  name: 'hi react-native',
};

export default Greeting;
