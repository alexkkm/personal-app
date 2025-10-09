import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NestedTable from "./NestedTable";

const TestingPage = () => {
  return <NestedTable data={{"id": 1, "table":{"col 1": "A", "col 2": "B"}}} tableTitle="Nested Table" />;
};

export default TestingPage;