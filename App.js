import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages for routing
import Desktop from "./pages/Desktop";
import DesignPage from "./pages/backup/DesignPage";
import TestingPage from "./pages/TestingPage";
import TutorialPage from "./pages/TutorialPage";
import WeatherPage from "./pages/WeatherPage";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App component for the entire application
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* The first stack will be the default page opened when the app started */}
        <Stack.Screen name="/desktop" component={Desktop} />
        <Stack.Screen name="/testing" component={TestingPage} />
        <Stack.Screen name="/tutorial" component={TutorialPage} />
        <Stack.Screen name="/design" component={DesignPage} />
        <Stack.Screen name="/weather" component={WeatherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
