import React from 'react';
import { Button, Image,  StyleSheet, Text, View, TextInput } from 'react-native';
import logo from './assets/cuzdan.png'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActionResize } from 'expo-image-manipulator';  



export default function App() {
  return (
    <NavigationContainer>{
    <View style={styles.container}>
      <Image source={logo} style={{ position: 'absolute', left: 5, top: 5, width: 150, height: 150 }} 
      resizeMethod="resize" /> 
        
      <Text style={{color: '#888', fontSize: 18, position: "absolute" , left: 10, top: 160}}> 
        Welcome to Wallet app
      </Text>
    </View> 
    }</NavigationContainer>
  )};
  
  function HomeScreen({navigation}) {
    return (
      
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={logo} style={{ position: 'absolute', left: 5, top: 5, width: 150, height: 150 }} 
      resizeMethod="resize" /> 
        <Text style={{color: '#888', fontSize: 18, position: "absolute" , left: 10, top: 160}}>
           Welcome to Wallet app
        </Text>

        <Button
  title="Go to Details."
  onPress={() => navigation.push('Details')}
/>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  function nav() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color: '#888', fontSize: 18, position: "absolute" , left: 10, top: 10}}>Details Screen</Text>
        <Button
          title="Refresh this page"
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
      
    );
  }
  
  <Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/>
  export default nav;

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});