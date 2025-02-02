import { View, Text } from "react-native";
import MessageBoard from "../widgets/MessageBoard";

const TestingPage = () => {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <MessageBoard title="Testing" textList={["Testing"]} />
    </View>
  );
};

export default TestingPage;
