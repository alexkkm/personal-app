import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import MessageBoard from './MessageBoard';
import DarkShadowButton from './DarkShadowButton';
import LightBorderButton from './LightBorderButton';

const CyberpunkPage = ({ route, navigation }) => {
    const { itemId = "", otherField = "" } = route.params || {};

    return (
        <ScrollView style={[]}>
            <View style={styles.main}>
                <Text style={styles.text}>Cyberpunk Page</Text>
                <StatusBar style="hidden" />
                {/*<View style={styles.box}></View>*/}
                <MessageBoard />
                <View style={{
                    // size
                    width: 100,
                    // position
                    left: '10%',
                    top: "10%",
                }}>
                    <DarkShadowButton buttonTitle="Button with dark shadow" buttonFunction={() => { console.log("function of the button triggered") }} />
                    <br />
                    <LightBorderButton buttonTitle="Button with Light Border" buttonFunction={() => { console.log("function of the button triggered") }} />
                </View>

            </View >
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#000000',
        width: '100%',
        height: 1000
    },
    text: {
        color: '#00f0ff'
    },
    box: {

        // Size
        width: 100,
        height: 100,

        // inner
        backgroundColor: 'rgba(0, 240, 255, 0.05)',
        padding: 10,

        // border
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#00f0ff',

        // shadow
        shadowOffset: { height: 1, width: 1 },
        shadowColor: '#00f0ff',
        shadowRadius: 0.1,
        shadowOpacity: 0.5,
    },
});

export default CyberpunkPage;