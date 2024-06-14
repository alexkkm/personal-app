import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!!!!</Text>
            <Button
                title="Route without params"
                onPress={() => navigation.navigate('RoutingPage')}
            />
            <Button
                title="Route with params"
                onPress={() => navigation.navigate('RoutingPage', {
                    itemId: 86,
                    otherField: "text"
                })}
            />
            <Button
                title="Auth"
                onPress={() => navigation.navigate('FirebasePage')}
            />
            <Button
                title="Cyberpunk Page"
                onPress={() => navigation.navigate('CyberpunkPage')}
            />
            <Button
                title="Design Page"
                onPress={() => navigation.navigate('DesignPage')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        margin: 5,
    },
});

export default HomePage;