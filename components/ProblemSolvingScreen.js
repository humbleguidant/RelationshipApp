/*
Author: Aubrey Nickerson
Date: August 10th, 2020
Program: ProblemSolvingScreen.js
Project: Relationship App

This is the problem solving screen. Problem solving
gives information on how problem solve in a relationship,
fight fair, discussing the problem, generate solutions, and so
on. 
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import { Button, Text } from 'galio-framework';


export default class ProblemSolvingScreen extends Component{
    render(){
        
        // Display content
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{
                                    backgroundColor: "#eee", 
                                    borderRadius: 10, 
                                    overflow: "hidden", 
                                    marginTop: 60, 
                                    marginBottom: 5
                                }}>
                        <View>
                            <Image
                            source={require("../assets/problemsolving.jpg")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text>Problem Solving</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                Problems are an expected part of any relationship. The difference between a healthy
                                relationship and a strained relationship is not necessarily the type or number of
                                problems. The difference lies in how problems and conflicts are resolved.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                            source={require("../assets/fixit.jpg")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                            When it comes right down to it, problems are situations that require our attention,
                            decision, and action. Within a relationship, effective problem solving and conflict
                            resolution in the long run involves developing skills to identify and resolve issues
                            constructively, having a game plan for how problems will be handled when they arise
                            and working together to make it happen. Here are some useful steps to include in your 
                            problem-solving or conflict resolution strategy.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                            source={require("../assets/fightthepower.jpg")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text>1)  Fight Fair.</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                    In healthy relationships, couples can argue or disagree without putting
                                    down their partner, being manipulative or judgmental. When couples fight fairly,
                                    they let respect for their partners override their anger. They also know and
                                    respect each other’s limits and call for a time-out.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                            source={require("../assets/image.webp")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text>2)  Discuss the Problem In It's Entirety.</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                Gather information, including not just the facts
                                of the situation but also how you each feel about the problem.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                            source={require("../assets/keepyourheadup.png")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text>3)  Generate 'Couple' Solutions.</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                This is the step that can be the biggest challenge for most couples.
                                A common tendency is to get stuck on one option, usually the one you have
                                suggested. Look for options that will respect each individual’s underlying beliefs
                                and values. Together, identify your shared goal, brainstorm (generate ideas
                                without evaluating them), and find a ‘win-win’ approach that will enable you to
                                achieve your shared goal, while making acceptable compromises.{"\n"}
                            </Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                About compromising: not every solution to every problem will be a 50/50
                                compromise. Think of compromising within a relationship as an average that
                                accumulates over time on some decisions, one partner might compromise 100%;
                                on another the split might be 80/20 (which is not to suggest that the couple keep
                                a running tally!). Healthy relationships are characterized by the couple’s ability to
                                compromise over time in ways that are acceptable to each partner, and leave
                                each partner feeling as though their individual values, beliefs and needs are
                                respected. Unhealthy relationships show one member of the couple always
                                having his or her way most or all of the time. When that happens, equality in the
                                relationship is violated and resentment will build.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cardContainer}>
                        <View>
                            <Image
                            source={require("../assets/ticking.jpg")}
                            style={{
                                height: 200,
                                width: 400
                            }}
                            />
                        </View>
                        <View style={{ padding: 10, width: 400 }}>
                            <Text>4)  Follow Up and Evaluate</Text>
                            <Text style={{ color: "#777", paddingTop: 5 }}>
                                Problems are opportunities for learning and growth.
                                Test your solution for a defined period of time; then follow up to determine if the
                                solution is meeting each of your expectations, whether it’s enhancing your
                                relationship as a couple or detracting from it, and how you can generalize and
                                apply good problem-solving skills and solutions to other areas of your
                                relationship.
                            </Text>
                        </View>
                    </View>
                    <Button
                        color="#FE2472"
                        style={styles.buttonContainer}
                        round
                        onPress={() => {
                        this.props.navigation.navigate('Home')
                        }}
                    >Home</Button>
                </View>
            </ScrollView>
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
        fontSize: 18,
        color: 'black',
        fontFamily: 'serif',
        fontWeight: 'bold'
      },
      textInputContainer: {
          width: 350,
          marginBottom: 10,
      },
      buttonContainer: {
          marginTop: 35,
          marginBottom: 30
      },
      blockContainer: {
          height: 600,
          width: 350
      },
      cardContainer : {
        backgroundColor: "#eee", 
        borderRadius: 10, 
        overflow: "hidden", 
        marginTop: 5, 
        marginBottom: 5
      }
});
