import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DraggableGrid } from "react-native-draggable-grid";
import { TfiViewListAlt } from "react-icons/tfi"; // Note: You may need to find a React Native equivalent for icons
import NavigationBar from "../widgets/NavigationBar";
import WeatherWidget from "../widgets/WeatherWidget";
import ClockWidget from "../widgets/Clock";
import ScheduleWidget from "../widgets/ScheduleWidget";

const Desktop = () => {
  const [data, setData] = useState([
    { key: "add", name: "Add", component: <AddWidget /> },
    { key: "clock", name: "Clock", component: <ClockWidget /> },
    { key: "weather", name: "Weather", component: <WeatherWidget /> },
    { key: "schedule", name: "Schedule", component: <ScheduleWidget /> },
  ]);
  const [isBlurred, setIsBlurred] = useState(false); // State for controlling blur
  const [isButtonActive, setIsButtonActive] = useState(false); // State for button activity

  const switchNavigationBar = () => {
    setIsBlurred(!isBlurred);
    setIsButtonActive(true);
  };

  const renderItem = (item) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      {item.component}
    </View>
  );

  return (
    <View style={styles.desktop}>
      <View style={styles.hiddenArea}>
        {isBlurred && (
          <View style={styles.switchNavigationBarButton}>
            <NavigationBar switchNavigationBar={switchNavigationBar} />
          </View>
        )}
      </View>

      <View style={[styles.mainScreen, isBlurred && styles.blurred]}>
        <TouchableOpacity
          onPress={() => switchNavigationBar()}
          style={[
            styles.settingButton,
            {
              // Enlarge the setting button
              width: 20,
              height: 20,
              borderWidth: 1,
              borderColor: "#00f0ff",
              margin: 5,
            },
          ]}
        >
          <TfiViewListAlt />
        </TouchableOpacity>
        <View style={styles.container}>
          <DraggableGrid
            data={data}
            renderItem={renderItem}
            numColumns={2}
            onDragRelease={(newData) => setData(newData)}
            itemHeight={200}
          />
        </View>
      </View>
    </View>
  );
};

const AddWidget = () => (
  <View style={styles.addWidget}>
    <Text style={{ color: "#00f0ff", fontSize: 48 }}>+</Text>
  </View>
);

const styles = StyleSheet.create({
  desktop: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  item: {
    flex: 1,
    padding: 10,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#00f0ff",
    color: "#00f0ff",
  },
  itemName: {
    color: "#00f0ff",
  },
  addWidget: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    borderRadius: 8,
  },
  hiddenArea: {
    position: "absolute",
    left: 5,
    top: 5,
    height: 20,
    width: 20,
    borderWidth: 1,
    borderColor: "#00f0ff",
  },
  settingButton: {
    position: "relative",
    top: 0,
    left: 0,
    height: 20,
    width: 20,
    fontSize: 20,
    color: "#00f0ff",
  },
  switchNavigationBarButton: {
    transition: "filter 0.3s ease-in-out",
  },
  mainScreen: {
    transition: "filter 0.3s ease-in-out",
  },
  blurred: {
    filter: "blur(10px)",
    pointerEvents: "none",
  },
});

export default Desktop;
