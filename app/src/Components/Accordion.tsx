import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordion extends React.Component<any, any> {
    constructor(props: { data: string; title: string; image: string }) {
        super(props);
        this.state = {
            data: props.data,
            image: props.image,
            expanded: false,
        }

        if (Platform.OS == 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
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
                    this.state.expaned &&
                    <View style={styles.child}>
                        <Text style={styles.text}>{this.props.data}</Text>
                        <Image style={styles.rectangleIcon} resizeMode="cover" source={this.props.image}/>
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    child:{
       backgroundColor: '#f4f4f4',
       alignItems: 'center',
       borderRadius: 10,
       padding: 10,
    },
    text:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
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
    }
})