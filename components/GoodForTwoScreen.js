/*
Author: Aubrey Nickerson
Date: August 5th, 2020
Program: GoodForTwoScreen.js
Project: Relationship App


This is the good for 2 screen.
The screen provides a deck of cards 
for the user to swipe left or right.
Each card gives advice on how to make a
rekationship strong together. 
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button } from 'galio-framework';
import { Container, View, DeckSwiper, Card, CardItem, Text, Body } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';


// Instantiate cards
const cards = [
    {
        text: '"Kindness is the life’s blood, the elixir of marriage. Kindness makes the difference between passion and caring." (Randolph Ray)',
        image: require("../assets/shakehands.jpg")
    },
    {
        text: '1.  Make your relationship a priority, spend time together and focus on one another.',
        image: require("../assets/priority.jpg") 
    },
    {
        text: '2.  Remember, it takes two, but it can start with you!',
        image: require("../assets/thesand.jpg")
    },
    {
        text: '3.  Find a balance between the time and effort you spend at work versus on your relationship.',
        image: require("../assets/balance.webp")
    },
    {
        text: '4.  Tell your partner how you are feeling, remember, he or she cannot read your mind, so be clear.',
        image: require("../assets/healing.jpg")
    },
    {
        text: '5.  Practice active listening. Mirror back what your partner has said and be sure to ask him or her to clarify to avoid conflict.',
        image: require("../assets/listening.jpg")
    },
    {
        text: '6.  Be flexible, accept and value your differences so you can adapt and your relationship can grow.',
        image: require("../assets/acceptyourfaith.jpeg")
    },
    {
        text: '7.  Involve your partner in making decisions that will significantly affect him or her and your relationship.',
        image: require("../assets/heart.jpg")
    },
    {
        text: '8.  You and your partner should work together to set goals for your relationship and future together.',
        image: require("../assets/holdhands.jpg")
    },
    {
        text: '9.  Don’t play the "blame game." Avoid judging, criticizing or blaming one another',
        image: require("../assets/untiltheend.webp")
    },
    {
        text: '10.  Accept that you will disagree and that no one is perfect. But try to use effective communication styles to resolve disagreements in a respectful way.',
        image: require("../assets/fighting.jpg")
    },
    {
        text: '11.  Be affectionate and romantic, express and show your love and your commitment.',
        image: require("../assets/commitment.jpg")
    },
    {
        text: '12.  Try to keep your relationship exciting, but accept that you and your partner’s sex drive may be different.',
        image: require("../assets/dancing.jpg")
    },
];
export default class GoodForTwoScreen extends Component{

    render(){
        
        // Display content
        return(
            <Container style={{backgroundColor: "#5BC0DE"}}>
                <View style={{marginTop: 75}}>
                    <ScrollView>
                    <DeckSwiper
                      ref={(c) => this._deckSwiper = c}
                      dataSource={cards}
                      renderEmpty={() => 
                        <View style={{alignSelf: "center"}}>
                            <Button
                              color="#B23AFC"
                              round
                              onPress={() => {
                                this.props.navigation.navigate('Home')
                              }}
                            >Home</Button>
                        </View>
                      }
                      renderItem={item =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Body>
                                    <Text style={styles.textContainer}>{item.text}</Text>
                                </Body>
                            </CardItem>
                            <CardItem cardBody>
                                <Image style={{height: 525, flex: 1}} source={item.image} />
                            </CardItem>
                        </Card>
                      }
                    />
                    <Button
                    color="#FE2472"
                    round
                    style={styles.buttonContainer}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                    >Home</Button>
                    </ScrollView>
                </View>
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
      fontSize: 15,
      fontWeight: "bold",
      color: 'black'
    },
    buttonContainer: {
        marginLeft: 125,
        marginTop: 650,
        marginBottom: 10
    },
});
