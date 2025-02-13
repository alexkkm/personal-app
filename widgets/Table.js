import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const Table = () => {
  const columns = [
    { id: 0, name: "Column 1" },
    { id: 1, name: "Column 2" },
    { id: 2, name: "Column 3" },
  ];

  const rows = [
    { id: 0, data: ["Data 1", "Data 2", "Data 3"] },
    { id: 1, data: ["Data 4", "Data 5", "Data 6"] },
    { id: 2, data: ["Data 7", "Data 8", "Data 9"] },
  ];

  return (
    <View style={styles.table}>
      <View style={styles.header}>
        <Text style={styles.title}>Table of Example</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cellHeader}>Row</Text>
        {columns.map((col) => (
          <Text key={col.id} style={styles.cellHeader}>
            {col.name}
          </Text>
        ))}
      </View>
      <FlatList
        data={rows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{`Row ${index + 1}`}</Text>
            {item.data.map((cellData, colIndex) => (
              <Text key={colIndex} style={styles.cell}>
                {cellData}
              </Text>
            ))}
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
  header: {
    backgroundColor: "rgba(0, 240, 255, 0.03)",
    padding: 10,
    borderColor: "#00f0ff",
    borderBottomWidth: 1,
  },
  title: {
    color: "#00f0ff",
    fontSize: 24,
    textAlign: "center",
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
