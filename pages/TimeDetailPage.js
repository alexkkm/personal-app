import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = currentTime.format("HH:mm:ss");
  const formatDate = currentTime.format("dddd, DD MMMM");

  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formatDate}</Text>
      <Text style={styles.time}>{formatTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  date: {
    fontSize: 24,
    fontWeight: "bold",
  },
  time: {
    fontSize: 48,
    color: "#333",
  },
});

export default Clock;
