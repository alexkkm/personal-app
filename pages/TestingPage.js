import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TestingPage = () => {
  return <LocalStorageExample />;
};

const LocalStorageExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [storedValue, setStoredValue] = useState("");

  // Load stored value when the component mounts
  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const value = await AsyncStorage.getItem("myKey");
        if (value !== null) {
          setStoredValue(value);
        }
      } catch (error) {
        console.error("Error loading stored value:", error);
      }
    };

    loadStoredValue();
  }, []);

  // Save value to local storage
  const saveValue = async () => {
    try {
      await AsyncStorage.setItem("myKey", inputValue);
      setStoredValue(inputValue);
      setInputValue(""); // Clear the input field
    } catch (error) {
      console.error("Error saving value:", error);
    }
  };

  // remove value from local storage
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("myKey");
      setStoredValue("");
    } catch (error) {
      console.error("Error clearing value:", error);
    }
  };

  // Clear whole AsyncStorage data from all client and libraries
  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      setStoredValue("");
    } catch (error) {
      console.error("Error on clearAsyncStorage:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Storage Example</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a value"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Save Value" onPress={saveValue} />
      <br />
      <Button title="Remove Value" onPress={removeValue} color="red" />
      <br />
      <Button
        title="Clear All Memory"
        onPress={clearAsyncStorage}
        color="red"
      />
      <Text style={styles.storedValue}>
        Stored Value: {storedValue || "None"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#00f0ff",
    marginBottom: 20,
  },
  input: {
    width: "30%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#00f0ff",
    borderRadius: 5,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "#333",
  },
  storedValue: {
    marginTop: 20,
    fontSize: 18,
    color: "#00f0ff",
  },
});

export default TestingPage;
