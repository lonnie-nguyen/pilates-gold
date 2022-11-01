import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {collection, getDocs, query} from "firebase/firestore";
import {db} from "../../firebaseConfig";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

function MovementScreen () {

    const [data, setData] = useState({});

    useEffect(() => {
        const q = query(collection(db, "movements"))
        const setDatabase = async () => {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setData(prevState => ({
                    ...prevState,
                    [doc.id]: doc.data()
                }))
            });
        }
        setDatabase();
    }, [])

    return (
        <View>
            <Text>Test</Text>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default MovementScreen;