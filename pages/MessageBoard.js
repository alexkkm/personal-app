import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBoard = () => {
    return (
        <View style={styles.messageBoard}>
            <View style={styles.border}>
                <View style={styles.body}>
                    <Text style={styles.heading}>What's this?</Text>
                    <Text style={styles.paragraph}>
                        A fake Slack or Discord type of app inspired by Cyberpunk 2077. This app is static, eg. not implementing much logic.
                    </Text>
                    <Text style={styles.paragraph}>
                        The goal is: showcasing a start of a UI kit. If you've played the game, you' might be able to pick-up some similarities with the in-game menus.
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
        width: '100%',
    },
    border: {
        // background color
        backgroundColor: 'rgba(0, 240, 255, 0.05)',

        // border
        borderWidth: 1,
        borderColor: '#c8f0ff',
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

        // font
        fontFamily: 'Rajdhani',
        fontSize: 24,
        lineHeight: 22.4,
    },
    // Text paragraph
    paragraph: {
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
    },
});

export default MessageBoard;