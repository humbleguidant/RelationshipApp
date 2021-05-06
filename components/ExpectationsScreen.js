/*
Author: Aubrey Nickerson
Date: August 3rd, 2020
Program: ExpectationsScreen.js
Project: Relationship App

The expectations screen includes a stack
of cards where the user can swipe left or right.
Each card gives tips to the user on staying positive
and how to stay in a healthy relationship.
*/

// Import all screens and libraries
import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button } from 'galio-framework';
import { Container, View, DeckSwiper, Card, CardItem, Text, Body } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';

// Instantiate deck of cards
const cards = [
    {
        text: 'Have realistic expectations for your partner.\n                       (Swipe left or right)',
        image: require("../assets/expectations.jpg")
    },
    {
        text: 'Understand barriers to your communication.',
        image: require("../assets/barriers.jpg") 
    },
    {
        text: 'Talk to your partner about your expectations.',
        image: require("../assets/communication.jpg")
    },
    {
        text: 'Express your pain and difficulties to your partner.',
        image: require("../assets/express.jpg")
    },
    {
        text: 'Discuss important issues.',
        image: require("../assets/discuss.jpg")
    },
    {
        text: 'Learn to accept your differences.',
        image: require("../assets/accept.jpg")
    },
    {
        text: 'By communicating, you gain a better understanding of your partner.',
        image: require("../assets/communicating.jpg")
    },
    {
        text: 'Learn your partners communication style.',
        image: require("../assets/learning.jpg")
    },
    {
        text: 'Talk it out from a position of equality.',
        image: require("../assets/equality.jpg")
    }
];
export default class ExpectationsScreen extends Component{

    render(){
        // display content
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
      fontSize: 20,
      fontWeight: "bold",
      color: 'black'
    },
    buttonContainer: {
        marginLeft: 125,
        marginTop: 650,
        marginBottom: 10
    },
});
