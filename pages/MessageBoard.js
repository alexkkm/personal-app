import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBoard = () => {
    return (
        <View style={styles.messageBoard}>
            <View style={styles.border}>
                <View style={styles.body}>
                    <Text style={styles.heading}>What's this?</Text>
                    <Text style={styles.paragraph}>
                        An example paragraph for showing the message board.
                    </Text>
                    <Text style={styles.paragraph}>
                        The second paragraph.
                    </Text>

                    <Text style={styles.highlight}>
                        Highlighted Text
                    </Text>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messageBoard: {
        // position
        left: '10%',
        top: "5%",
        // size
        width: '80%',
    },
    border: {
        // background color
        backgroundColor: '#000000',

        // border
        borderWidth: 1,
        borderColor: '#00f0ff',
        borderRadius: 5,

        // shadow
        shadowColor: '#00f0ff',
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 2,
        shadowOpacity: 1,

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

        // shadow
        textShadowColor: '#00f0ff',
        textShadowOffset: { height: 0, width: 0 },
        textShadowRadius: 2,
        textShadowOpacity: 1,

        // font
        fontFamily: 'Rajdhani',
        fontSize: 24,
        lineHeight: 22.4,
    },
    // Text paragraph
    paragraph: {
        // color
        color: '#00f0ff',

        // shadow
        textShadowColor: '#00f0ff',
        textShadowOffset: { height: 0, width: 0 },
        textShadowRadius: 2,
        textShadowOpacity: 1,

        // font
        fontFamily: 'Rajdhani',
        fontSize: 16,
        lineHeight: 22.4,
    },
    highlight: {
        // color
        color: '#C8FFFF',

        // shadow
        textShadowColor: '#00f0ff',
        textShadowOffset: { height: 0, width: 0 },
        textShadowRadius: 2,
        textShadowOpacity: 1,

        // font
        fontFamily: 'Rajdhani',
        fontSize: 16,
        lineHeight: 22.4,
    }
});

export default MessageBoard;