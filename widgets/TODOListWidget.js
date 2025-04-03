import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TODOListWidget = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    // You can implement time and date logic here if needed
  }, []);

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.TODOListWidget}
      onPress={() => {
        navigation.navigate("/todolist");
      }}
    >
      <Text style={styles.todoText}>Todo</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TODOListWidget: {
    width: 500,
    height: 200,
    backgroundColor: "rgba(255, 255, 255, 0)", // Transparent background
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
    cursor: "pointer", // Note: cursor style is not applicable in React Native
  },
  todoText: {
    fontFamily: "Rajdhani-SemiBold", // Ensure this font is available in your project
    color: "#00f0ff",
    fontSize: 40,
  },
});

export default TODOListWidget;
