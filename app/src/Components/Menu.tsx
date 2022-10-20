import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Menu = () => {
    const navigation = useNavigation<NativeStackNavigationProp>();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('About');
                }}>
                <Text style={styles.link}>Abouts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('TermsAndConditions');
                }}>
                <Text style={styles.link}>Terms And Conditions</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#efefef',
        padding: 16,
        marginTop: 8,
    },
    link: {
        fontSize: 16,
        marginTop: 4,
        color: '#097ade',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
    },
});

export default Menu;