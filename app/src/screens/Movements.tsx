import {View, Text, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import ExerciseCard from "../Components/ExerciseCardComp";

export default class MovementScreen extends React.Component<any, any> {
    constructor(props: { title: string}) {
        super(props);
        this.state = {
            data: {},
            imgUrl:{},
        };
    }

    componentDidMount() {
        const storage = getStorage()
        const q = query(collection(db, "movements"))
        const setDatabase = async () => {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                this.setState((prevState: { data: any; }) => ({
                    data: {...prevState.data, [doc.id]: doc.data()},
                }))
                const value = doc.data()
                if (value.imageURLs && value.imageURLs[0]) {
                    this.setState((prevState: { imgUrl: any; }) => ({
                        imgUrl: {...prevState.imgUrl, [doc.id]: value.imageURLs[0]},
                    }))
                }
            });

        }
        setDatabase();

    }

    ListCard = () => {
        const items = [];
        for (const [key, value] of Object.entries(this.state.data)) {
            items.push(
                {title : this.state.data[key].title, url : this.state.imgUrl[key], screenName : "MovementInfo", muscleUrl : this.state.data[key].muscleMap}

            );
            console.log(this.state.imgUrl[key])
        }
        return items;
    }

    renderCard = ({item}: {item: any}) => {
        return (
          <ExerciseCard screenName={item.screenName} imageAddr={item.url} name={item.title} data={item} />
        )
    }

    render () {
        const listData = this.ListCard();
        return (
            <View style={styles.movementsView}>
                <FlatList showsVerticalScrollIndicator={false} 
                          columnWrapperStyle={styles.row} 
                          numColumns={2}  
                          data={listData} 
                          renderItem={this.renderCard}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    movementsView: {
      position: "relative",
      backgroundColor: "#D9EBF2",
      flex: 1,
      paddingLeft: 10,
      paddingRight:10,
      flexDirection: "column",
      alginItems: "center",
      justifyContent: "flex-start",
    },
    row: {
      flex: 1,
      marginTop: 10,
      alignItems: "flex-start",
      justifyContent: "space-between",
    }
});
