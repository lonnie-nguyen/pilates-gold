import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

//This is Terms and condition page
const TermsAndConditionsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Terms And Conditions</Text>
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

export default TermsAndConditionsScreen;