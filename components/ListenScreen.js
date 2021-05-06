/*
Author: Aubrey Nickerson
Date: August 5th, 2020
Program: ListenScreen.js
Project: Relationship App

This is the listen screen. The listen screen
gives tips on how to listen, paraphrase,
time, understand, seek help, and accept differences
in a relationship. 
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button } from 'galio-framework';
import { Container, Content, Icon, Accordion, Text } from "native-base";

// Add key-pair list of definitions
const dataArray = [
    { title: "Listening", content: "A first step to understanding our partner is to listen actively. Active listening involves several steps, including listening without interruption or judgment, and by focusing on the speaker rather than your intended response."},
    { title: "Paraphrasing", content: "State in your own words your understanding of what has just been said. Ask questions, and ask for additional information. Confirm if what you think you heard is what the speaker intended to say."},
    { title: "Timing", content: "Timing is everything. If you need to discuss something important, set aside some quiet time, free from other distractions, to do so. For instance, it's probably not a good idea to bring up a sensitive issue just before bedtime, or during his or her favorite TV show."},
    { title: "Understanding", content: "At the root of many couples, communication problems are the unspoken expectations they have of each other. Couples develop communication styles over time and people have different needs for disclosure and privacy."},
    { title: "Seeking Help", content: "If communication problems persist, seek professional help. Many people do not feel safe enough to express pain and difficulties to their partners. Others avoid discussing important issues, because they fear that they may lose a measure of control. And still others feel threatened by differences of opinion. In cases such as this, it may be necessary to enlist the support of a counsellor to find ways to communicate openly and safely within the relationship. This can be done individually, or as a couple."},
    { title: "Accepting Differences", content: "This involves the realization that often what is gained from talking it out is an understanding of your partner, instead of agreement on an issue. Remember, too, that everyone expresses themselves differently. Learn your partner’s communication style and you will understand better what he or she is saying ‘between the lines.’"}
];
export default class ListenScreen extends Component{
    _renderHeader(item, expanded){
        
        // display content
        return(
            <View style={styles.headerContainer}>
                <Text style={styles.textContainer}>{" "}{item.title}</Text>
                {expanded 
                ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
                : <Icon style={{ fontSize: 18}} name="add-circle" />}
            </View>
        );
    }
    _renderContent(item) {
        return(
            <Text style={styles.contentContainer}>
                {item.content}
            </Text>
        );
    }
    render(){
        return(
            <Container>
                <Content padder style={{backgroundColor: "#5BC0DE", marginTop: 60}}>
                    <Accordion
                      dataArray={dataArray}
                      animation={true}
                      expanded={0}
                      renderHeader={this._renderHeader}
                      renderContent={this._renderContent}
                    />
                    <Button
                    color="#FE2472"
                    round
                    style={styles.buttonContainer}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                    >Home</Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5BC0DE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textContainer: {
      fontSize: 20,
      fontWeight: "600",
      color: 'white'
    },
    buttonContainer: {
        marginTop: 30,
        marginLeft: 120
    },
    headerContainer: {
        flexDirection: "row",
        fontSize: 40,
        padding: 25,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" 
    },
    contentContainer: {
        backgroundColor: "#e3f1f1",
        padding: 10,
        fontSize: 20,
        fontStyle: "italic"
    }
});
