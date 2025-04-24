import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TestingPage = () => {
  return <NestedTable />;
};

const NestedTable = () => {
  const [data, setData] = useState({});

  // Fetch all keys and their values from AsyncStorage
  const fetchDataFromAsyncStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = {};
      for (const key of keys) {
        const value = await AsyncStorage.getItem(key);
        result[key] = JSON.parse(value) || value; // Parse JSON if possible
      }
      setData(result);
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAsyncStorage();
  }, []);

  // Recursive function to render nested JSON as a table
  const renderTable = (obj, parentKey = "") => {
    return Object.entries(obj).map(([key, value]) => {
      const currentPath = parentKey ? `${parentKey}.${key}` : key;

      return (
        <View key={currentPath} style={styles.row}>
          <Text style={styles.keyColumn}>{key}</Text>
          {typeof value === "object" && value !== null ? (
            <View style={styles.nestedContainer}>
              {renderTable(value, currentPath)}
            </View>
          ) : (
            <Text style={styles.valueColumn}>{String(value)}</Text>
          )}
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nested Table for AsyncStorage</Text>
      {Object.keys(data).length === 0 ? (
        <Text style={styles.noDataText}>No data available in AsyncStorage</Text>
      ) : (
        <View style={styles.table}>{renderTable(data)}</View>
      )}
      <Button title="Refresh Data" onPress={fetchDataFromAsyncStorage} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: "#00f0ff",
    textAlign: "center",
    marginBottom: 20,
  },
  noDataText: {
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "#00f0ff",
    borderRadius: 5,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#00f0ff",
    paddingVertical: 5,
  },
  keyColumn: {
    flex: 1,
    color: "#fff",
    fontWeight: "bold",
  },
  valueColumn: {
    flex: 2,
    color: "#fff",
  },
  nestedContainer: {
    marginLeft: 20,
    borderLeftWidth: 1,
    borderLeftColor: "#00f0ff",
    paddingLeft: 10,
  },
});

export default TestingPage;
