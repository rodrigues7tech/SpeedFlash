import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/components/Home';
import BuscaCEP from './src/pages/BuscaCEP';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="BuscaCEP" component={BuscaCEP}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// API = https://postmon.com.br/


