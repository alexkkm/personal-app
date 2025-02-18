import { View, Text } from "react-native";
import Table from "../widgets/Table";

const TestingPage = () => {
  return (
    <View style={{ backgroundColor: "black", width: "100%", height: "100%" }}>
      <Table rows={rows} columns={columns} topLeftCell={topLeftCell} />
    </View>
  );
};

export default TestingPage;

const rows = [
  { id: 0, data: ["Data 1", "Data 2", "Data 3"] },
  { id: 1, data: ["Data 4", "Data 5", "Data 6"] },
  { id: 2, data: ["Data 7", "Data 8", "Data 9"] },
];
const columns = [
  { id: 0, name: "Column 1" },
  { id: 1, name: "Column 2" },
  { id: 2, name: "Column 3" },
];
const topLeftCell = "Row/Column";
