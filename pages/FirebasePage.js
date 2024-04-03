// React package
import { useEffect, useState } from 'react';

// firebase package
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'; // now firebase suugest to import the functions directly form the library, instead of import the object Auth() as oldest version of firebase
import { collection, getDocs, doc, setDoc, query, where, Timestamp } from "firebase/firestore"

// the "auth" is used for the functions from package "firebase/auth"
import firebaseTools from "../utils/firebase"

// React native package
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

// Component of demonstration of firebase authentication functions
const AuthenticationArea = ({ navigation }) => {
    // parameters for saving the input "email" and "password"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        // fetch the user info when rendering the page
        onAuthStateChanged(firebaseTools.auth, (info) => { console.log(info) })
    }, [])

    // Function for "submit" button 
    const onSubmit = () => {
        console.log("Start Login")
        signInWithEmailAndPassword(firebaseTools.auth, email, password)
            .then(() => {
                // if the "signInWithEmailAndPassword()" success, navigate to "HomePage"
                console.log("signined");
            })
            .catch((error) => {
                // if the "signInWithEmailAndPassword()" fail, alert the error message
                alert("error");
            })

    }



    // styling
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
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

            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Enter Email'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Enter Password'
            />
            <Button title="Submit" onPress={() => { onSubmit() }}
            ></Button>
        </View>
    );
}


// Page of tutorials of firebase functions
const FirebasePage = () => {
    return (
        <View>
            <AuthenticationArea />
        </View>
    );
}

export default FirebasePage;