import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, LayoutAnimation, Platform, UIManager, FlatList, ListRenderItem } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordion extends React.Component<any, any> {
    constructor(props: { tips: Array<string>; mods: Array<string>; title: string; imageURL: string }) {
        super(props);
        this.state = {
            tips: props.tips,
            mods: props.mods,
            title: props.title,
            image: props.imageURL,
            expanded: false,
        }

        if (Platform.OS == 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    // for use with ListEmptyComponent in FlatList
    emptyMsg = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Nothing here this week!</Text>
            </View>
        )
    }

    renderBullets: ListRenderItem<any> = ({ item }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{`\u2022 ${item}`}</Text>
            </View>
        )
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand()}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                          size={30} color='#000' />
                </TouchableOpacity>
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        {(this.props.tips.length != 0) &&
                        <Text style={styles.header}>Tips</Text>}
                        <FlatList data={this.props.tips} renderItem={this.renderBullets} />
                        <Text style={styles.header}>{(this.props.mods.length != 0) && ('Modifications')}</Text>
                        <FlatList data={this.props.mods} renderItem={this.renderBullets} />
                        <Image style={styles.rectangleIcon} resizeMode="cover" source={{uri:this.props.image}}/>
                    </View>
                }
                <View style={styles.separator} />
            </View>
        )
    }
    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({expanded : !this.state.expanded})
    }
}

const styles = StyleSheet.create({
    title:{
        fontFamily:'Poppins',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    header:{
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
      textAlign: 'left',
    },
    child:{
       backgroundColor: '#f4f4f4',
       borderRadius: 10,
       padding: 10,
        width: '80%',
    },
    text:{
        fontFamily: 'Poppins',
        fontSize: 15,
        color: '#000',
        textAlign: 'left',
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        width: '80%',
        height: 50,
        paddingLeft: 25,
        paddingRight: 18,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    rectangleIcon:{
        position: 'relative',
        borderRadius: 10,
        width: '100%',
        height: 185,
        flexShrink: 0,
        overflow: 'hidden',
        borderWidth: 0.25,
        borderColor: '#000'
    },
    separator:{
        height: 10,
        color: 'transparent',
        width: '100%',
    },
    container:{
        backgroundColor: 'transparent',
    },
})