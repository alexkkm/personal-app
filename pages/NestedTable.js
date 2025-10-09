import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NestedTable = ({ data, tableTitle }) => {
  const renderTable = (obj, parentKey = '') => {
    return (
      <View style={styles.tableContainer}>
        {Object.entries(obj).map(([key, value]) => {
          const currentPath = `${parentKey}/${key}`;

          return (
            <View key={key} style={styles.row}>
              <Text style={styles.keyColumn}>{key}</Text>
              <Text style={styles.valueColumn}>{typeof value === 'object' && value !== null ? renderTable(value, currentPath) : String(value)}</Text>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{tableTitle}</Text>
      {Object.keys(data).length === 0 ? (
        <Text style={styles.noDataText}>No data available</Text>
      ) : (
        <View style={styles.table}>{renderTable(data)}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#00f0ff',
    textAlign: 'center',
    marginBottom: 20,
  },
  noDataText: {
    color: '#00f0ff',
    textAlign: 'center',
    marginVertical: 20,
  },
  tableContainer: {
    color: '#00f0ff',
    backgroundColor: 'rgba(0, 240, 255, 0.05)',
    border: '1px solid #00f0ff',
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden',
    margin: 10,
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#00f0ff',
  },
  keyColumn: {
    margin: 10,
    color: '#00f0ff',
    fontWeight: 'bold',
    width: '50%',
  },
  valueColumn: {
    borderLeftWidth: 1,
    borderLeftColor: '#00f0ff',
    padding: 10,
    marginLeft: 10,
    color: '#00f0ff',
    width: '50%',
  },
});

export default NestedTable;