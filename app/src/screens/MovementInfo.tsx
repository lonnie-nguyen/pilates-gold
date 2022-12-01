import {ScrollView, Text, StyleSheet, View, Image, FlatList} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//This is weekly tips page
const MovementInfo = ({route}:{route: any}) => {
    
    const navigation = useNavigation<NativeStackNavigationProp>();

    const renderImages = ({item}: {item: any}) => {
        return (
            <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={{uri:item}}
            />
        )
    }

    return (

        <ScrollView
        style={styles.movementView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bodyScrollViewContent}
        >
            <Text style={styles.titleText}>{route.params.props.data.title}</Text>

            <FlatList showsVerticalScrollIndicator={false} 
                        data={route.params.props.data.urls} 
                        renderItem={renderImages}/>

            <Text style={styles.titleText}>Muscle Map</Text>
            <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={{uri:route.params.props.data.muscleUrl}}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({

    movementView: {
        position: "relative",
        backgroundColor: "#D9EBF2",
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
    },
    bodyScrollViewContent: {
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    titleText: {
        position: "relative",
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        width: 343,
        height: 31,
      },
    rectangleIcon: {
        position: "relative",
        borderRadius: 10,
        width: 343,
        height: 185,
        flexShrink: 0,
        overflow: "hidden",
        borderWidth: 0.25,
        borderColor: "#000",
        marginBottom: 10,
    }
});

export default MovementInfo;