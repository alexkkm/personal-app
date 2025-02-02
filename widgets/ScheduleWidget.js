import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ScheduleWidget = () => {

    useEffect(() => {
        // You can implement time and date logic here if needed
    }, []);

    return (
        <TouchableOpacity
            style={styles.scheduleWidget}
            onPress={() => {
                console.log("navigate to SchedulePage");
            }}
        >
            <Text style={styles.scheduleTitle}>Your Schedule:</Text>
            <ScheduleItem />
        </TouchableOpacity>
    );
};

export default ScheduleWidget;

const ScheduleItem = () => {
    return (
        <View>
            <Text style={styles.scheduleItem}>Item 1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    scheduleWidget: {
        width: 500,
        height: 200,
        backgroundColor: "rgba(255, 255, 255, 0)", // Transparent background
        display: "flex",
        justifyContent: "left",
        alignItems: "left",
        cursor: "pointer", // Note: cursor style is not applicable in React Native
    },
    scheduleTitle: {
        fontFamily: "Rajdhani-SemiBold", // Ensure this font is available in your project
        color: "#00f0ff",
        fontSize: 20,
    },
    scheduleItem: {
        fontFamily: "Rajdhani-SemiBold", // Ensure this font is available in your project
        color: "#00f0ff",
        fontSize: 12,
    },
});