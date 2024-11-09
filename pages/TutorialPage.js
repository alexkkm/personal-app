import { Button, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TutorialPage = () => {
    const navigation = useNavigation();
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