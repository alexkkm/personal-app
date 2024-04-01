import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const RoutingPage = ({ route, navigation }) => {
    const { itemId = "", otherField = "" } = route.params || {};

    return (
        <View style={styles.container}>
            <Text>RoutingPage</Text>

            {itemId ? <Text>itemId: {JSON.stringify(itemId)}</Text> : <></>}
            {otherField ? <Text>otherParam: {JSON.stringify(otherField)}</Text> : <></>}
            <Button title="Go back" onPress={() => navigation.goBack()} />


            <Text>https://reactnavigation.org/docs/params</Text>
            <StatusBar style="hidden" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default RoutingPage