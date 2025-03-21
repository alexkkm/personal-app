import { View, Text } from "react-native";
import TodoListPage from "./TODOListPage";
import DarkShadowButton from "../widgets/DarkShadowButton";
import TODOListPage from "./TODOListPage";

const TestingPage = () => {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <TODOListPage />
    </View>
  );
};

export default TestingPage;
