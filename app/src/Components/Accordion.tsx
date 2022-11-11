import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Accordion = ({ image, item, isExpanded, onClickFunction }:
                       { image: any, item: any, isExpanded: boolean, onClickFunction: () => void }) => {
    const[layoutHeight, setLayoutHeight] = useState<number | null>(0);

    useEffect(() => {
        if (isExpanded) {
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0);
        }
    }, [isExpanded]);

    const renderBullets = ({ item }: { item: string }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{`\u2022 ${item}`}</Text>
            </View>
        )
    }

    return (
        <View>
            {/* Header of Accordion */}
            <TouchableOpacity activeOpacity={0.9} onPress={onClickFunction} style={styles.header}>
                <Text style={styles.headerText}>{item.title}</Text>
                <Icon name={isExpanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'#000'} />
            </TouchableOpacity>
            {/* Content under the Header */}
            {
                isExpanded &&
                <View style={styles.panel}>
                    {
                        item.tips.length != 0 &&
                        <Text style={styles.subHeader}>Tips</Text>
                    }
                    <FlatList data={item.tips} renderItem={renderBullets} scrollEnabled={false}
                              listKey={'tips' + Date.now().toString()}
                              keyExtractor={() => 'T' + Math.random().toString(36).substr(2, 9)} />
                    {
                        item.mods.length != 0 &&
                        <Text style={styles.subHeader}>Mods</Text>
                    }
                    <FlatList data={item.mods} renderItem={renderBullets} scrollEnabled={false}
                              listKey={'mods' + Date.now().toString()}
                              keyExtractor={() => 'M' + Math.random().toString(36).substr(2, 9)} />
                    <Image style={styles.rectangleIcon} resizeMode={'cover'} source={{uri:image}} />
                </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 50,
        width: 355,
        paddingLeft: 25,
        paddingRight: 18,
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 0.25,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    subHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'left',
    },
    container: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 16,
        color: '#606070',
        padding: 10,
    },
    rectangleIcon: {
        position: 'relative',
        borderRadius: 10,
        width: '100%',
        height: 185,
        flexShrink: 0,
        overflow: 'hidden',
        borderWidth: 0.25,
        borderColor: '#000',
    },
    panel: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        width: 355,
        borderWidth: 0.25,
        borderColor: '#000',
    }
})

export default Accordion;