import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TfiViewListAlt } from "react-icons/tfi"; // Note: You may need to find a React Native equivalent for icons

import GridView from "react-native-draggable-gridview";
import _ from "lodash";

import NavigationBar from "../widgets/NavigationBar";
import WeatherWidget from "../widgets/WeatherWidget";
import ClockWidget from "../widgets/Clock";
import ScheduleWidget from "../widgets/ScheduleWidget";

import { useLocation } from "react-router-native"; // Use react-router-native for routing in React Native

const PathNameIndicator = () => {
  const location = useLocation();
  return <Text>PathName: {location.pathname}</Text>;
};

const Desktop = () => {
  const [editing, setEditing] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false); // State for controlling blur
  const [isButtonActive, setIsButtonActive] = useState(false); // State for button activity

  const switchNavigationBar = () => {
    setIsBlurred(!isBlurred);
    setIsButtonActive(true);
  };

  const [data, setData] = useState([
    { id: "add", component: <AddWidget /> }, // "+" grid at the initial stage
    { id: "clock", component: <ClockWidget /> },
    { id: "weather", component: <WeatherWidget /> },
    { id: "schedule", component: <ScheduleWidget /> },
  ]);

  const locked = useCallback((item) => item.id === "add", []);
  const renderLockedItem = useCallback(
    () => <LockedItem editing={editing} onPress={() => alert("Add widget")} />,
    [editing]
  );
  const renderItem = useCallback(
    (item) => (
      <Item
        item={item}
        editing={editing}
        onPressDelete={(item) => setData(data.filter((v) => v.id !== item.id))}
        onConfirm={() => setEditing(false)} // Exit editing mode
      />
    ),
    [editing, data]
  );

  const onBeginDragging = useCallback(
    () => !editing && setEditing(true),
    [editing]
  );
  const onReleaseCell = useCallback(
    (items) => {
      // Ensure the "+" grid remains at the start
      const updatedData = _.sortBy(items, (item) =>
        item.id === "add" ? -1 : 1
      );
      if (!_.isEqual(data, updatedData)) {
        setData(updatedData);
      }
    },
    [data]
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

        <GridView
          data={data} // Include the "+" grid in the data array
          keyExtractor={(item) => item.id}
          renderItem={renderItem} // Render draggable items
          renderLockedItem={renderLockedItem} // Render the "+" button
          locked={locked} // Lock the "+" button
          onBeginDragging={onBeginDragging} // Trigger editing mode on drag
          onReleaseCell={onReleaseCell} // Update data on drop
          numColumns={2} // Align items in 2 columns
          delayLongPress={editing ? 50 : 500}
          containerMargin={{ top: 10, bottom: 10, left: 10, right: 10 }}
        />
      </View>
    </View>
  );
};

const Item = ({ item, editing, onPressDelete, onConfirm }) => (
  <View style={styles.item}>
    {item.component}
    {editing &&
      item.id !== "add" && ( // Prevent buttons on "+" grid
        <>
          <TouchableOpacity
            style={styles.confirm}
            onPress={onConfirm} // Exit editing mode when clicked
          >
            <Text style={styles.confirmText}>O</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.delete}
            onPress={() => onPressDelete(item)}
          >
            <Text style={styles.deleteText}>x</Text>
          </TouchableOpacity>
        </>
      )}
  </View>
);

const LockedItem = ({ editing, onPress }) => (
  <TouchableOpacity
    style={[styles.item, { opacity: editing ? 0.25 : 1 }]}
    onPress={onPress}
  >
    <Text style={{ color: "#00f0ff", fontSize: 48 }}>+</Text>
  </TouchableOpacity>
);

const AddWidget = () => (
  <View style={styles.addWidget}>
    <Text style={{ fontSize: 48 }}>+</Text>
  </View>
);

const styles = StyleSheet.create({
  desktop: {
    flex: 1,
    backgroundColor: "#000",
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
  item: {
    flex: 1,
    margin: 0,
    padding: 0,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "transparent",
    borderColor: "#00f0ff",
    borderWidth: 2,
  },
  delete: {
    position: "absolute",
    top: 5,
    right: 5, // Adjusted to make space for the confirm button
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
  deleteText: {
    color: "#fff",
    fontSize: 12,
  },
  confirm: {
    position: "absolute",
    top: 5,
    right: 30, // Positioned next to the delete button
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  confirmText: {
    color: "#fff",
    fontSize: 12,
  },
  addWidget: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 8,
  },
});

export default Desktop;
