// React package
import { useEffect, useState } from "react";

// firebase package
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth"; // now firebase suugest to import the functions directly form the library, instead of import the object Auth() as oldest version of firebase
import { ref, set, get, child, update, remove } from "firebase/database";

// the {auth} is used for the functions from package "firebase/auth"
import firebaseTools from "../../utils/firebase";

// React native package
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

// Example of basic operation in firebase realtime database
const BasicOperation = () => {
  // Write to Realtime Database
  const writeData = async (path, content) => {
    await set(ref(firebaseTools.database, path), content);
    console.log("Success to write the path:" + path);
  };

  // Read from Realtime Database with given path
  const readData = async (path) => {
    const databaseReference = ref(firebaseTools.database);
    get(child(databaseReference, path)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    });
  };

  // Update data from Realtime Database with given content
  const updateData = async (path, content) => {
    await update(ref(firebaseTools.database, path), content);
    console.log("Successfully updated the path:" + path);
  };

  // Delete data from Realtime Database with given path
  const deleteData = async (path) => {
    await remove(ref(firebaseTools.database, path));
    console.log(
      "Data from the path:" + path + " has been deleted successfully"
    );
  };
};

// Component of demonstration of firebase authentication functions
const AuthenticationArea = ({ navigation }) => {
  // parameters for saving the input "email" and "password"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const unsubscribe =
      // fetch the user information when rendering the page, and return an unsubscribe function
      onAuthStateChanged(firebaseTools.auth, (info) => {
        // check if the return of "onAuthStateChanged()" is not null, then update the "status" into "signIn"
        if (info) {
          // //info.uid can define the identity of user
          setStatus("signIn");
        } else {
          setStatus("signOut");
        }
      });

    // when the component is unmounted, do the return()=>{...}
    return () => {
      // trigger the unsubscribe function to clear the side effect
      unsubscribe();
    };
  }, []);

  // Function for "submit" button
  const onSubmit = () => {
    console.log("Start Login");
    signInWithEmailAndPassword(firebaseTools.auth, email, password)
      .then(() => {
        // if the {signInWithEmailAndPassword()} success, print "signined"
        console.log("signined");
      })
      .catch((error) => {
        // if the {signInWithEmailAndPassword()} fail, alert the error message
        alert("error");
      });
  };

  // styling
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    input: {
      height: 40,
      width: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

  return (
    <View style={styles.container}>
      <Text>Authentication Area</Text>
      <Text>{status}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Enter Password"
      />
      <Button
        title="SignIn"
        onPress={() => {
          onSubmit();
        }}
      />
      <Button
        title="SignOut"
        onPress={() => {
          signOut(firebaseTools.auth);
          console.log("signOuted");
        }}
      />
    </View>
  );
};

const RealTimeDatabaseArea = () => {
  return (
    <View>
      <Text>RealTime Database Area</Text>
    </View>
  );
};

// Page of tutorials of firebase functions
const FirebasePage = () => {
  return (
    <View>
      <AuthenticationArea />
      <RealTimeDatabaseArea />
    </View>
  );
};

export default FirebasePage;
