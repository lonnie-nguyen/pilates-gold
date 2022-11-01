import React from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import Accordion from "../Components/Accordion";

export default class WeeklyTips extends React.Component<any, any> {
    constructor(props: { title: string; tips: Array<string>; mods: Array<string>; image: string }) {
        super(props);
        this.state = {
            weeks:[
                {
                    title: 'Week 1',
                    tips: ['Some tips go here this is filler text. Testing testing testing.', 'Some more text for texting.'],
                    mods: ['Filler text.'],
                    image: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                },
                {
                    title: 'Week 2',
                    tips: ['Here is another inspirational picture. And some more filler text.', 'And some more text for texting here.', 'And here.'],
                    mods: ['Filler modification.', 'Another filler modification.'],
                    image: 'https://images.unsplash.com/photo-1554290712-e640351074bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80',
                },
                {
                    title: 'Week 3',
                    tips: [],
                    mods: [],
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGluc3BpcmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                },
            ]
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10}}>
                    { this. renderAccordions() }
                </ScrollView>
            </View>
        );
    }
    renderAccordions = () => {
        const items = [];
        for (let item of this.state.weeks) {
            items.push(
                <Accordion title={item.title} tips={item.tips} mods={item.mods} image={item.image} />
            );
        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        backgroundColor: '#f9eebf',
        flex:1,
        padding: 10,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})