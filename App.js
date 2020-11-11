import React from 'react'
import Home from './src/screens/Home'
import Description from './src/screens/Description'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
function App() {
  return (  
    <View style={styles.container}>
        <NavigationContainer >
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Heroes" component={Home} />
            <Drawer.Screen name="Description" component={Description} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App