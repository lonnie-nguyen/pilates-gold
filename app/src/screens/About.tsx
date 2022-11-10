import {View, Text, Linking, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Avatar} from "react-native-paper";

//This is about page
const AboutScreen = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginVertical: 25}}>
                    <View style={styles.topLogal}>
                        <Avatar.Image
                            source={require("../../assets/UCI-icon.png")}
                            size={50}
                        />
                        <View style={[styles.headerTextView, styles.ml11]}>
                            <Text style={[styles.appNameText]}>
                                <Text style={styles.pilatesText}>Pilates </Text>
                                <Text style={styles.goldText}>Gold</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={{marginVertical: 15}}>
                        <Text style={styles.textBoldStyle}>Pilates Gold is a mat-based Pilates exercise program specifically designed for the senior population. It
                            was developed by a team of UCI researchers and funded by the 41 st Trust Fund.</Text>
                        <Text style={styles.textStyle}>Our mat-based Pilates
                            program guides seniors through 18 different low range repetitious movements that are designed to
                            strengthen the core (front and back) and encourage optimal technique and safety through appropriate
                            breathwork and body positioning.</Text>
                        <Text style={styles.textStyle}>If performed correctly, individuals will not only get stronger, but also
                            learn the basic techniques of Pilates that will carry them onto more rigorous Pilates programs.</Text>
                        <Text style={styles.textBoldStyle}>The Pilates Gold exercise program is a basic or entry-level course.</Text>
                    </View>

                    <Text style={styles.aboutTitle}>About the App</Text>
                    <View style={styles.aboutContent}>
                        <Text style={styles.textStyle}><Text style={styles.textBoldStyle}>This app is a supplement to the in-person Pilates Gold program-- an 8 week long exercise course. </Text>
                            As such, this app is intended to be used along with participation in a Pilates Gold class, and it is not
                            intended to be used alone.
                            The basic <Text style={styles.textBoldStyle}>movements </Text>and <Text style={styles.textBoldStyle}>weekly tips </Text>supplement the lessons taught during the in-person classes.
                            If you have questions about our Pilates Gold program, please reach out to the
                            Principal Investigator: Maya N Hatch, PhD at <Text style={{color: "#26499A"}} onPress={() => Linking.openURL('hatchm@uci.edu')}>hatchm@uci.edu</Text></Text>

                    </View>

                </View>

            </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:30,
        marginVertical: 10,
    },
    ml11:{
        marginLeft: 11,
    },
    topLogal: {
        flex: 1,
        alignItems: "center",
        flexDirection:'row',
    },
    appNameText:{
        alignSelf: "stretch"  ,
        position:"relative",
        fontSize: 20,
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
    title:{
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 40,
    },
    aboutTitle:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    aboutContent:{
        marginVertical:10,
    },
    mainContent:{
        marginVertical:20,
        fontSize: 15,
    },
    textStyle:{
        marginVertical: 10,
        textAlign: 'left',
        fontSize: 15,
        color: "#64646F",
    },
    textBoldStyle:{
        fontWeight: "bold",
        color: "#777777",
        fontSize: 15,
    },
});

export default AboutScreen;