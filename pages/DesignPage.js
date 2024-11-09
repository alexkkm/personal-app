import { Button, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, } from 'react-native';
import WeatherWidget from './WeatherBox';
import MessageBoard from './MessageBoard';
import ClockWidget from './Clock';
import { useNavigation } from '@react-navigation/native';


const DesignPage = ({ route }) => {
    const navigation = useNavigation();

    const handleWeatherWidgetPress = () => {
        console.log('Weather Widget Pressed');
    };

    return (
        <ScrollView style={[]}>
            <View style={styles.main}>
                <Text style={styles.text}>Here we will show the design of different component</Text>
                <Text style={styles.text}>Component that I am gonna design</Text>
                <Text style={styles.text}>1. Nav Bar(Display when slide)</Text>

                <Text style={styles.text}>2. Message Board</Text>
                <MessageBoard title="Example Heading" textList={["Example of paragraph.", "Another Example of Paragraph, which may occupy for two lines."]} />
                <Text style={styles.text}>3. Weather Widget</Text>
                {/* Testing for using TouchableOpacity ffor onPress() */}
                <TouchableOpacity onPress={handleWeatherWidgetPress}>
                    <WeatherWidget />
                </TouchableOpacity>
                <Text style={styles.text}>4. Clock Widget</Text>
                <ClockWidget />
            </View >
        </ScrollView>

    );
}


// other style
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

        // outer
        marginTop: 10,

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

export default DesignPage;