import { Button, StyleSheet, Text, View } from 'react-native';

const TutorialPage = () => {
    return (
        <View>
            <Text>Tutorial Page</Text>
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
        </View>
    );
}

export default TutorialPage