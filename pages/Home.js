import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

const HomePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Page for Tutorial Branch</Text>
            <Button
                title="Basic"
                onPress={() => navigation.navigate('TutorialPage')}
            />
            <Button
                title="Firebase Page"
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