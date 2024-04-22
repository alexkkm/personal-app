import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LightBorderButton = ({ buttonTitle, buttonFunction }) => {
    return (

        <View style={styles.border}>
            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={buttonFunction}
                >
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    border: {
        // background color
        backgroundColor: '#000000',

        // border
        borderWidth: 1,
        borderColor: '#C8FFFF',
        borderRadius: 5,

        //TODO: Shadow is not available in Android, but is ok in web
        // shadow
        shadowColor: '#00f0ff',
        shadowOffset: { height: 0, width: 0 },
        shadowRadius: 2,
        shadowOpacity: 1,

        //TODO: clipPath is not supported by react-native, finding alernatives
        //clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 1rem + 2px), calc(100% - 1rem + 2px) 100%, 0 100%)',
    },
    button: {
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        // color
        color: '#C8FFFF',

        //text align
        textAlign: 'center',

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

export default LightBorderButton;