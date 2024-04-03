// React package
import { useEffect, useState } from 'react';

// firebase package
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'; // now firebase suugest to import the functions directly form the library, instead of import the object Auth() as oldest version of firebase
import { collection, getDocs, doc, setDoc, query, where, Timestamp } from "firebase/firestore"

// the {auth} is used for the functions from package "firebase/auth"
import firebaseTools from "../utils/firebase"

// React native package
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

// Component of demonstration of firebase authentication functions
const AuthenticationArea = ({ navigation }) => {
    // parameters for saving the input "email" and "password"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState("")

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
        console.log("Start Login")
        signInWithEmailAndPassword(firebaseTools.auth, email, password)
            .then(() => {
                // if the {signInWithEmailAndPassword()} success, print "signined"
                console.log("signined");
            })
            .catch((error) => {
                // if the {signInWithEmailAndPassword()} fail, alert the error message
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
            <Text>{status}</Text>
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
            <Button title="SignIn" onPress={() => { onSubmit() }} />
            <Button title="SignOut" onPress={() => {
                signOut(firebaseTools.auth)
                console.log("signOuted")
            }} />
        </View>
    );
}

// Component of demonstration of firebase fetching functions
const FetchingArea = () => {
    // parameter that save the fetching result in string
    const [string, setString] = useState("")
    // parameter that save the fetching result in list
    const [list, setList] = useState([]);
    // parameter that save the fetching result in list
    const [result, setResult] = useState({});


    // useEffect() will be called just after the "FetchingArea" is rendered
    useEffect(() => {

        // getDocs(): fetch the data from the firestore collection "tutorial"
        const fetchInList = getDocs(collection(firebaseTools.firestoreDB, "tutorial")).then((collectionSnapShot) => {
            const fetching = collectionSnapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            console.log(fetching);
            setList(fetching);
        });

        // create an async function "fetchFromTutorial"
        const fetchFromTutorial = async () => {
            /* 
            excute a query: (Find a collection in firestore called "tutorial", return the documents whose has field "content" in which the value is not empty), 
            then define the result of the query as "querySnapshot"
            */
            const querySnapshot = await getDocs(query(
                collection(firebaseTools.firestoreDB, "tutorial"),
                where("content", "!=", "")
            ));
            // define a list called "newResult"
            const newResult = {};
            // For each element in "querySnapshot", display the element and push it into "newResult"
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                newResult[doc.id] = doc.data();
            });
            // update the "result" with the list "newResult", in which is the documents found in the collection "tutorial"
            setResult(newResult);
        };
        // excute the async function "fectchFromTutorial()"
        fetchFromTutorial();
    }, []);

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
            <Text>Fetching Data</Text>

            <Text>Fetch all documents in collection "tutorial"</Text>
            {list.map((item, id) => (
                <Text key={id}>{id}: {JSON.stringify(item)}</Text>
            ))}

            <Text>Documents of "tutorial" collection that exists field: "content"</Text>
            {Object.keys(result).map((id) => (
                <Text key={id}>id: {id}, content: {JSON.stringify(result[id])}</Text>
            ))}

        </View>
    )
}

// Page of tutorials of firebase functions
const FirebasePage = () => {
    return (
        <View>
            <AuthenticationArea />
            <FetchingArea />
        </View>
    );
}

export default FirebasePage;