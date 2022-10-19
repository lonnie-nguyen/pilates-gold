import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

//This is about page
const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Abouts</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        marginTop: 24,
    },
    screenTitle: {
        fontSize: 24,
        marginTop: 8,
        fontWeight: 'bold',
    },
});

export default AboutScreen;