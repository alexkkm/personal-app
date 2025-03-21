import { View, Text } from "react-native";
import TodoListPage from "./TODOListPage";

const TestingPage = () => {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <TodoListPage />
    </View>
  );
};

export default TestingPage;
