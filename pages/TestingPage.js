import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { DraggableGrid } from "react-native-draggable-grid";
import WeatherWidget from "../widgets/WeatherWidget";
import ClockWidget from "../widgets/Clock";
import ScheduleWidget from "../widgets/ScheduleWidget";

const TestingPage = () => {
  const [data, setData] = useState([
    { key: "add", name: "Add", component: <AddWidget /> },
    { key: "clock", name: "Clock", component: <ClockWidget /> },
    { key: "weather", name: "Weather", component: <WeatherWidget /> },
    { key: "schedule", name: "Schedule", component: <ScheduleWidget /> },
  ]);

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      {item.component}
    </View>
  );

  return (
    <View style={styles.container}>
      <DraggableGrid
        data={data}
        renderItem={renderItem}
        numColumns={2}
        onDragRelease={(newData) => setData(newData)}
        itemHeight={200}
      />
    </View>
  );
};

const AddWidget = () => (
  <View style={styles.addWidget}>
    <Text style={{ color: "#00f0ff", fontSize: 48 }}>+</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  item: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00f0ff",
    margin: 5,
  },
  addWidget: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
});

export default TestingPage;
