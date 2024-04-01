## Routing
   ### Install the required packages
   ```
   npm install @react-navigation/native @react-navigation/native-stack
   ```
   ### Installing dependencies into an Expo managed project
   ```
   npx expo install react-native-screens react-native-safe-area-context
   ```

   ### Creating a native stack navigator
   ```
   const Stack = createNativeStackNavigator();
   ```
   Example:
   ```
   // In App.js
   import * as React from 'react';
   import { View, Text } from 'react-native';
   import { NavigationContainer } from '@react-navigation/native';
   import { createNativeStackNavigator } from '@react-navigation/native-stack';

   function HomeScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Home Screen</Text>
      </View>
   );
   }

   const Stack = createNativeStackNavigator();

   function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
         <Stack.Screen name="Home" component={HomeScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
   }

   export default App;
   ```