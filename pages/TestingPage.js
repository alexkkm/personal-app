import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NestedTable from "./NestedTable";

const TestingPage = () => {
  return <NestedTable />;
};

export default TestingPage;