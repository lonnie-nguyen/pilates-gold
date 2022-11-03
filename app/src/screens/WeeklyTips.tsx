import React from 'react';
import { View, ScrollView, StyleSheet } from "react-native";
import Accordion from "../Components/Accordion";
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage"

export default class WeeklyTips extends React.Component<any, any> {
    constructor(props: { title: string; tips: Array<string>; mods: Array<string>; imageURL: string }) {
        super(props);
        this.state = {
            data: {},
            imageURLs: {},

        }
    }

    componentDidMount() {
        const storage = getStorage()
        const q = query(collection(db, "weekly-moves"))
        const setDatabase = async () => {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.setState((prevState: { data: any; }) => ({
                    data: {...prevState.data, [doc.id]: doc.data()},
                }))
                const value = doc.data()
                if (value.imageURL) {
                    const picRef = ref(storage, value.imageURL)
                    getDownloadURL(picRef)
                        .then((url) => {
                            this.setState((prevState: { imageURLs: any; }) => ({
                                imageURLs: {...prevState.imageURLs, [doc.id]: url},
                            }))
                        })
                        .catch((error) => {
                            switch (error.code) {
                                case 'storage/object-not-found':
                                    break;
                                case 'storage/unauthorized':
                                    break;
                                case 'storage/canceled':
                                    break;
                                case 'storage/unknown':
                                    break;
                            }
                        });
                }
            });

        }
        setDatabase();

    }

    render () {
        return (
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}
                            alwaysBounceHorizontal={false}
                            alwaysBounceVertical={false}
                            bounces={false}
                            contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10}}>
                    { this. renderAccordions() }
                </ScrollView>
            </View>
        );
    }
    renderAccordions = () => {
        const items = [];
        for (const [key, value] of Object.entries(this.state.data)) {
            items.push(
                <Accordion tips={this.state.data[key].tips} mods={this.state.data[key].mods}
                           title={this.state.data[key].title} image={this.state.imageURLs[key]} />
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