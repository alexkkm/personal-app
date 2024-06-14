import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';


const DesignPage = ({ route, navigation }) => {

    return (
        <ScrollView style={[]}>
            <View style={styles.main}>
                {/* */}

                <Text style={styles.text}>Here we will show the design of different component</Text>
                <Text style={styles.text}>Component that I am gonna design</Text>
                <Text style={styles.text}>1. Nav Bar(Left Sidewith Icon)</Text>
                <StatusBar style="hidden" />

                <MessageBoard />

            </View >
        </ScrollView>

    );
}

// Message Board
const MessageBoard = () => {
    return (
        <View style={MessageBoardStyle.messageBoard}>
            <View style={MessageBoardStyle.border}>
                <View style={MessageBoardStyle.body}>
                    <Text style={MessageBoardStyle.heading}>Example Heading</Text>
                    <Text style={MessageBoardStyle.paragraph}>
                        Example of paragraph.
                    </Text>
                    <Text style={MessageBoardStyle.paragraph}>
                        {/*Use "\n" to perform line break*/}
                        {"\n"}
                        Another Example of Paragraph, which may occupy for two lines.
                    </Text>

                </View>
            </View>
        </View>
    );
}

// Style of MessageBoard
const MessageBoardStyle = StyleSheet.create({
    messageBoard: {
        // position
        left: '10%',
        top: "5%",
        // size
        width: '100%',
    },
    border: {
        // background color
        backgroundColor: '#000000',

        // border
        borderWidth: 1,
        borderColor: '#00f0ff',
        borderRadius: 5,

        //TODO: clipPath is not supported by react-native, finding alernatives
        //clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem + 2px), calc(100% - 1rem + 2px) 100%, 0 100%)',
    },
    body: {
        // padding
        padding: 12,
        paddingBottom: 16,
    },
    // Text heading 
    heading: {
        // color
        color: '#00f0ff',

        // font
        fontFamily: 'Rajdhani',
        fontSize: 24,
        lineHeight: 22.4,
    },
    // Text paragraph
    paragraph: {
        // color
        color: '#00f0ff',

        // font
        fontFamily: 'Rajdhani',
        fontSize: 16,
        lineHeight: 22.4,
    },
})

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