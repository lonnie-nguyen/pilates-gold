import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Menu from "../Components/Menu";

//This is Movement page(Home Page)
const MovementScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.screenTitle}>Movements</Text>
            <Menu />
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

export default MovementScreen;