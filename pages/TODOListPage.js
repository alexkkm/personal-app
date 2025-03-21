import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Draggable from "react-native-draggable";
import DarkShadowButton from "../widgets/DarkShadowButton";

const TODOListPage = () => {
  const [todos, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", dueDate: "" });

  const addTodo = () => {
    if (newTodo.title) {
      setTodos([...todos, { id: Date.now(), ...newTodo, done: false }]);
      setNewTodo({ title: "", dueDate: "" });
      setModalVisible(false);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const renderItem = ({ item }) => (
    <Draggable
      x={0}
      y={0}
      renderColor={item.done ? "lightgray" : "white"}
      style={styles.draggable}
    >
      <View style={styles.todoItem}>
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
          <Text style={[styles.todoTitle, item.done && styles.done]}>
            {item.title}
          </Text>
          <Text style={styles.dueDate}>{item.dueDate}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Draggable>
  );

  return (
    <View style={styles.container}>
      <DarkShadowButton
        buttonTitle="Add TODO"
        buttonFunction={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newTodo.title}
            onChangeText={(text) => setNewTodo({ ...newTodo, title: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Due Date"
            value={newTodo.dueDate}
            onChangeText={(text) => setNewTodo({ ...newTodo, dueDate: text })}
          />
          <Button title="Add" onPress={addTodo} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 240, 255, 0.05)",
    padding: 10,
  },
  todoItem: {
    backgroundColor: "#000000",
    borderWidth: 1,
    borderColor: "#00f0ff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  todoTitle: {
    color: "#00f0ff",
    fontFamily: "Rajdhani",
    fontSize: 16,
    lineHeight: 22.4,
  },
  done: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  dueDate: {
    color: "#00f0ff",
    fontFamily: "Rajdhani",
    fontSize: 14,
    lineHeight: 20,
  },
  deleteButton: {
    color: "red",
    marginTop: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    padding: 10,
  },
  draggable: {
    zIndex: 1,
  },
});

export default TODOListPage;
