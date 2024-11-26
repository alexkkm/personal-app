import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages for routing
import Desktop from "./pages/Desktop";
import DesignPage from "./pages/backup/DesignPage";
import TestingPage from "./pages/TestingPage";
import TutorialPage from "./pages/TutorialPage";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// App component for the entire application
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* The first stack will be the default page opened when the app started */}
        <Stack.Screen name="Desktop" component={Desktop} />
        <Stack.Screen name="Testing" component={TestingPage} />
        <Stack.Screen name="Tutorial" component={TutorialPage} />
        <Stack.Screen name="Design" component={DesignPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
