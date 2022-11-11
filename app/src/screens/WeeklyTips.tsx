import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Platform, UIManager, LayoutAnimation, FlatList } from 'react-native'
import Accordion from '../Components/Accordion'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

const WeeklyTips = () => {
    const [data, setData] = useState<any>([]);
    const [imageURLs, setImageURLs] = useState<any>([]);
    const [currentIdx, setCurrentIdx] = useState<number>(-1);

    useEffect(() => {
        const storage = getStorage();
        const setDatabase = async () => {
            const querySnapshot = await getDocs(collection(db, 'weekly-moves'));

            // Map data object into arrays
            const dataArr:any = [];
            const imageArr:any = [];
            querySnapshot.forEach((doc) => {
                dataArr.push({...doc.data(), id: doc.id});
                const value = doc.data();
                if (value.imageURL) {
                    getDownloadURL(ref(storage, value.imageURL))
                        .then((url) => {
                            imageArr.push(url);
                        }).catch((error) => {
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
                        })
                }
            });
            setData(dataArr);
            setImageURLs(imageArr);
        };
        setDatabase();
    }, []);

    // For Android see https://reactnative.dev/docs/layoutanimation
    if (Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental
    ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    // Limits only 1 accordion to be open at a time and closes the current open accordion
    const onClick = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setCurrentIdx((currentIdx) => (currentIdx !== index ? index : -1));
    }

    // To be used with FlatList renderItem component: renders an accordion object
    const renderAccordion = ({ item, index }: { item: any, index: number }) => {
        return (
            <Accordion key={item.title} image={imageURLs[index]} item={item} isExpanded={index === currentIdx}
                       onClickFunction={() => onClick(index)} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} data={data} renderItem={renderAccordion} listKey={'main'}
                      keyExtractor={item => item.id + Math.random().toString(36).substr(2, 9)} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#d9ebf2',
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingRight:10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default WeeklyTips;