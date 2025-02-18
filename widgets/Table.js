import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

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

const Table = ({ rows, columns, topLeftCell }) => {
  const header = {
    id: "header",
    data: [topLeftCell, ...columns.map((col) => col.name)],
  };

  const tableData = [header, ...rows];

  return (
    <View style={styles.table}>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            {item.id === "header" ? (
              item.data.map((cellData, colIndex) => (
                <Text key={colIndex} style={styles.cellHeader}>
                  {cellData}
                </Text>
              ))
            ) : (
              <>
                <Text style={styles.cell}>{`Row ${index}`}</Text>
                {item.data.map((cellData, colIndex) => (
                  <Text key={colIndex} style={styles.cell}>
                    {cellData}
                  </Text>
                ))}
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

// backup of Table
const BackupTable = () => {
  const columns = [
    { id: 0, name: "Column 1" },
    { id: 1, name: "Column 2" },
    { id: 2, name: "Column 3" },
  ];

  const header = {
    id: "header",
    data: ["Row/Column", ...columns.map((col) => col.name)],
  };

  const rows = [
    { id: 0, data: ["Data 1", "Data 2", "Data 3"] },
    { id: 1, data: ["Data 4", "Data 5", "Data 6"] },
    { id: 2, data: ["Data 7", "Data 8", "Data 9"] },
  ];

  const tableData = [header, ...rows];

  return (
    <View style={styles.table}>
      <FlatList
        data={tableData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            {item.id === "header" ? (
              item.data.map((cellData, colIndex) => (
                <Text key={colIndex} style={styles.cellHeader}>
                  {cellData}
                </Text>
              ))
            ) : (
              <>
                <Text style={styles.cell}>{`Row ${index}`}</Text>
                {item.data.map((cellData, colIndex) => (
                  <Text key={colIndex} style={styles.cell}>
                    {cellData}
                  </Text>
                ))}
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    color: "#00f0ff",
    backgroundColor: "rgba(0, 240, 255, 0.05)",
    borderColor: "#00f0ff",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    overflow: "hidden",
    width: "90%",
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#00f0ff",
  },
  cellHeader: {
    flex: 1,
    textAlign: "center",
    color: "#00f0ff",
    fontWeight: "bold",
    borderRightWidth: 1,
    borderColor: "#00f0ff",
    padding: 10,
    backgroundColor: "rgba(0, 240, 255, 0.03)",
  },
  cell: {
    flex: 1,
    textAlign: "left",
    borderRightWidth: 1,
    borderColor: "#00f0ff",
    color: "#00f0ff",
    padding: 10,
  },
});

export default Table;
