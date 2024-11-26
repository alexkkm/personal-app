import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RxCross2 } from "react-icons/rx";
import { MdSettings } from "react-icons/md";
import { BsBroadcastPin } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";

const NavigationBar = ({ switchNavigationBar }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={styles.closeNavigationBarButton}
        onPress={switchNavigationBar}
      >
        <RxCross2 />
      </TouchableOpacity>
      <NavigationBarWidget
        icon={<BsCodeSlash style={{ color: "#00f0ff" }} />}
        title="Testing"
        onClick={() => navigation.navigate("Testing")}
      />
      <NavigationBarWidget
        icon={<MdSettings style={{ color: "#00f0ff" }} />}
        title="setting"
        onClick={() => {
          console.log("navigate to setting page");
        }}
      />
      <NavigationBarWidget
        icon={<BsBroadcastPin style={{ color: "#00f0ff" }} />}
        title="network"
        onClick={() => navigation.navigate("/network")}
      />
      <NavigationBarWidget
        icon={<FaBook style={{ color: "#00f0ff" }} />}
        title="tutorial"
        onClick={() => navigation.navigate("/tutorial")}
      />
    </View>
  );
};

const NavigationBarWidget = ({ icon, title, onClick }) => {
  return (
    <TouchableOpacity style={styles.navigationBarWidget} onPress={onClick}>
      <BarWidgetIcon icon={icon} />
      <BarWidgetTitle title={title} />
    </TouchableOpacity>
  );
};

const BarWidgetIcon = ({ icon }) => {
  return <View style={styles.barWidgetIcon}>{icon}</View>;
};

const BarWidgetTitle = ({ title }) => {
  return (
    <View style={styles.barWidgetTitle}>
      <Text style={{ color: "#00f0ff" }}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
  },
  closeNavigationBarButton: {
    margin: 5, // Adjust margin to reduce space
    fontSize: 20,
    color: "#00f0ff",
  },
  navigationBarWidget: {
    width: 100,
    height: 40, // Adjust height as needed
    margin: 2,
    padding: 5,
    display: "flex",
    flexDirection: "row", // Align icon and title in a row
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
  },
  barWidgetIcon: {
    margin: 5,
  },
  barWidgetTitle: {
    margin: 5,
  },
});

export default NavigationBar;
