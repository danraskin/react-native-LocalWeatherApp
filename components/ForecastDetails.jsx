import { 
  View,
  Text, 
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ForecastDetails({route}) {

  const { temperature, name, number } = route.params;
  return (
    <View style={{height: '100%'}}>
      <Text>Today's Weather</Text>
      <Text>Today is {name} </Text>
      <Text>The temp is: {temperature} degrees F</Text>
    </View>
  )
}