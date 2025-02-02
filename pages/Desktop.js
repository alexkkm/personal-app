import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TfiViewListAlt } from "react-icons/tfi"; // Note: You may need to find a React Native equivalent for icons
import NavigationBar from "./NavigationBar";
import WeatherWidget from "../widgets/Weather";
import ClockWidget from "../widgets/Clock";
import ScheduleWidget from "../widgets/ScheduleWidget";
import { useLocation } from "react-router-native"; // Use react-router-native for routing in React Native

const PathNameIndicator = () => {
  const location = useLocation();
  return <Text>PathName: {location.pathname}</Text>;
};

// Desktop is the first page that be shown when the app starts
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
          style={[styles.settingButton, {
            // Enlarge the setting button
            width: 20,
            height: 20,
            // Add a border (DELETE THIS LATER IF NOT NEEDED)
            borderWidth: 1,
            borderColor: '#00f0ff',
            margin: 5,
          },
          ]}

        >
          <TfiViewListAlt />
        </TouchableOpacity>
        <View style={{
          // Add a border (DELETE THIS LATER IF NOT NEEDED)
          borderWidth: 1,
          borderColor: '#00f0ff',
          margin: 5,
        }}>
          <ClockWidget />
        </View>
        <View style={{
          // Add a border (DELETE THIS LATER IF NOT NEEDED)
          borderWidth: 1,
          borderColor: '#00f0ff',
          margin: 5,
        }}>
          <WeatherWidget />
        </View>
        <View style={{
          // Add a border (DELETE THIS LATER IF NOT NEEDED)
          borderWidth: 1,
          borderColor: '#00f0ff',
          margin: 5,
        }}>
          <ScheduleWidget />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  desktop: {
    backgroundColor: "#000000",
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
  },
  hiddenArea: {
    position: "absolute",
    left: 5,
    top: 5,
    height: 20,
    width: 20,

    // Add a border (DELETE THIS LATER IF NOT NEEDED)
    borderWidth: 1,
    borderColor: '#00f0ff',
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
