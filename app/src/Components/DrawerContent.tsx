import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import { DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import {Avatar} from "react-native-paper";

const DrawerContent= ({ ...props }) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView >
                <View style={{alignItems: "center", marginTop: 20}}>
                    <View style={styles.drawerContent}>
                        <Avatar.Image
                            source={require("../../assets/UCI-icon.png")}
                            size={80}
                        />
                        <View style={[styles.headerTextView, styles.ml11]}>
                            <Text style={styles.welcomeToTest}>Welcome to</Text>
                            <Text style={[styles.appNameText, styles.mt6]}>
                                <Text style={styles.pilatesText}>Pilates </Text>
                                <Text style={styles.goldText}>Gold</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.mt19}>
                    <DrawerItemList
                        state={props.navigation.getParent()}
                        navigation={props.navigation.getParent()}
                        descriptors={props.navigation.getParent()}
                        {...props}
                    />
                </View>
            </DrawerContentScrollView>

            <View>
                <DrawerItem
                    label="Exit Menu"
                    onPress={() => props.navigation.goBack()}
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    mt6:{
        marginTop: 6,
    },
    ml11:{
        marginLeft: 11,
    },
    mt19:{
        marginTop:19,
    },
    drawerOptionView:{
        width:205,
        flexDirection:"column",
        paddingHorizontal: 0,
        paddingTop:45,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    drawerContent: {
        flex: 1,
        alignItems: "center",
        // marginTop: 15,
        flexDirection:'row',
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    welcomeToTest:{
        alignSelf: "stretch",
        position: "relative",
        fontSize: 14,
        lineHeight: 16,
        color: "#c6beb5",
        textAlign:"left",
        height:17,
    },
    appNameText:{
        alignSelf: "stretch"  ,
        position:"relative",
        fontSize: 18,
        lineHeight: 24,
        fontWeight: "600",
        textAlign:"left",
        height:23,
    },
    pilatesText:{
        color: "#000"
    },
    goldText:{
        color: "#ffd200"
    },
    headerTextView: {
        width: 114,
        flexShrink: 0,
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    link: {
        fontSize: 16,
        marginTop: 4,
        color: '#097ade',
        fontWeight: 'bold',
    },
})

export default DrawerContent;