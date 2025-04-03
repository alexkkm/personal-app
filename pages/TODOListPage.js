import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Draggable from "react-native-draggable";
import StyledButton from "../widgets/StyledButton";
import MessageBoard from "../widgets/MessageBoard"; // Adjust the import path as necessary

const TODOListPage = () => {
  const [todos, setTodos] = useState([]);
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [newTodo, setNewTodo] = useState({ title: "", dueDate: "" });

  const addTodo = () => {
    if (newTodo.title) {
      setTodos([...todos, { id: Date.now(), ...newTodo, done: false }]);
      setNewTodo({ title: "", dueDate: "" });
      setIsAddingTodo(false);
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
    <Draggable x={0} y={0} renderColor={"#000000"} style={styles.draggable}>
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
      <View style={[isAddingTodo && styles.blurred]}>
        <StyledButton
          buttonTitle="Add TODO"
          buttonFunction={() => setIsAddingTodo(true)}
        />
      </View>

      {isAddingTodo && (
        <View style={[styles.overlay]}>
          <MessageBoard
            title="Add TODO"
            textList={[
              <TextInput
                style={styles.input}
                placeholder="Title"
                value={newTodo.title}
                onChangeText={(text) => setNewTodo({ ...newTodo, title: text })}
              />,
              <TextInput
                style={styles.input}
                placeholder="Due Date"
                value={newTodo.dueDate}
                onChangeText={(text) =>
                  setNewTodo({ ...newTodo, dueDate: text })
                }
              />,
              <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                <Text style={styles.addButtonText}>Add</Text>
              </TouchableOpacity>,
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsAddingTodo(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>,
            ]}
          />
        </View>
      )}

      <FlatList
        style={[isAddingTodo && styles.blurred]}
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
    backgroundColor: "black",
    padding: 10,
  },
  todoItem: {
    backgroundColor: "#000000",
    borderWidth: 2,
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  blurred: {
    filter: "blur(2px)",
    pointerEvents: "none",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    padding: 10,
    backgroundColor: "white",
  },
  addButton: {
    marginVertical: 5,
    backgroundColor: "#00f0ff",
    borderRadius: 5,
    padding: 10,
  },
  addButtonText: {
    textAlign: "center",
    color: "#000000",
  },
  cancelButton: {
    marginVertical: 5,
    backgroundColor: "red",
    borderRadius: 5,
    padding: 10,
  },
  cancelButtonText: {
    textAlign: "center",
    color: "#ffffff",
  },
  draggable: {
    zIndex: 1,
  },
});

export default TODOListPage;
