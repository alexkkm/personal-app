
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages for routing
import RoutingPage from './pages/RoutingPage';
import HomePage from './pages/Home';
import FirebasePage from './pages/FirebasePage';
import CyberpunkPage from './pages/CyberpunkPage';
import DesignPage from './pages/DesignPage';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App component for the entire application
export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="RoutingPage" component={RoutingPage} />
        <Stack.Screen name="FirebasePage" component={FirebasePage} />
        <Stack.Screen name="CyberpunkPage" component={CyberpunkPage} />
        <Stack.Screen name="DesignPage" component={DesignPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
