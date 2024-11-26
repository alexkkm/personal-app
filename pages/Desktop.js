import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TfiViewListAlt } from "react-icons/tfi"; // Note: You may need to find a React Native equivalent for icons
import NavigationBar from "./NavigationBar";
import WeatherWidget from "../widgets/Weather";
import ClockWidget from "../widgets/Clock";
import TodoListWidget from "../widgets/TodoListWidget";
import { useLocation } from "react-router-native"; // Use react-router-native for routing in React Native

const PathNameIndicator = () => {
  const location = useLocation();
  return <Text>PathName: {location.pathname}</Text>;
};

const Desktop = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const switchNavigationBar = () => {
    setIsBlurred(!isBlurred);
    setIsButtonActive(true);
  };

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
          style={styles.settingButton}
        >
          <TfiViewListAlt />
        </TouchableOpacity>
        <br />
        <WeatherWidget />
        <ClockWidget />
        <TodoListWidget />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  desktop: {
    backgroundColor: "#000000",
  },
  hiddenArea: {
    position: "absolute",
    height: 40,
    width: 200,
    margin: 12,
    padding: 10,
  },
  settingButton: {
    position: "absolute",
    top: 5,
    left: 5,
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
