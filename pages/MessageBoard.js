import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBoard = () => {
    return (
        <View style={styles.messageBoard}>
            <View style={styles.pad}>
                <View style={styles.padBody}>
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
        left: 10,
        top: 200,
        width: 400,
    },
    pad: {
        backgroundColor: 'rgba(0, 240, 255, 0.05)',
        borderWidth: 1,
        borderColor: '#00f0ff',
        borderRadius: 5,

        //TODO: clipPath is not supported by react-native, finding alernatives
        //clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem + 2px), calc(100% - 1rem + 2px) 100%, 0 100%)',
    },
    padBody: {
        padding: 12,
        paddingBottom: 16,
    },
    heading: {
        color: '#2be4ea',
        fontFamily: 'Rajdhani',
        fontSize: 24,
        lineHeight: 22.4,
    },
    paragraph: {
        color: '#2be4ea',
        fontFamily: 'Rajdhani',
        fontSize: 16,
        lineHeight: 22.4,
    },
});

export default MessageBoard;