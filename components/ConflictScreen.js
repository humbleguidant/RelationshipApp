import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button } from 'galio-framework';
import { Card, Text } from 'react-native-elements';

export default class ConflictScreen extends Component{
    render(){
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Card
                      containerStyle={{marginTop: 60}}
                      title="Resolving Conflict"
                      image={require("../assets/resolvingconflict.jpg")}>
                      <Text>
                      Having problems or conflict is normal in any partnership. And it isn’t how many, how
                      often or what you are arguing about that determines whether or not your relationship
                      can survive.
                      As the experts have noted, it is how you resolve conflict or solve problems that is
                      critical.{"\n"}{"\n"}
                      "Seldom or never does a marriage develop into an individual relationship without crisis?
                      There is no birth of consciousness without pain" - Carl Jung (1875–1961)
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/arguing.jpg")}>
                      <Text>
                      Sometimes the problem is that couples have incompatible conflict resolution styles. For
                      example, one partner may yell when angry, while the other totally withdraws and avoids
                      conflict. In this environment, the couple can’t find solutions unless they find a common
                      style of conflict resolution. Until they do, frustration will continue to build, making the
                      relationship unstable and unpleasant.
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/makeachange.jpg")}>
                      <Text>
                      When you get stuck in the conflict cycle, both spouses become like a cat chasing its tail.
                      You can become locked in a power struggle with each of you blaming and reacting
                      negatively. Unfortunately, this cycle gets you nowhere but back where you started and
                      you can begin to feel hopeless and despairing.
                      To develop effective problem solving you need to have a game plan for how conflict will
                      be handled when it arises and work together to make it happen.
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 20}}
                      title="Learning to Solve 'Solvable' Problems"
                      image={require("../assets/mindfulness.jpg")}>
                      <Text>
                      1)  The first thing you need to do is stop the cycle of negativity. Each time you start to 
                      see the warning signs, stop and apply effective communication skills.
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/resolution.jpg")}>
                      <Text>
                      2)  Soften your ‘startup.’ This means ensuring you don’t start with harsh words.
                          Complain but don’t blame and avoid the Four Horsemen (criticism, contempt,
                          defensiveness and stonewalling).
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/deescalate.jpg")}>
                      <Text>
                      3)  Learn to make and receive ‘repair attempts.’ If you get off track and one partner
                          becomes defensive, make a ‘repair attempt’ by putting on the brakes and de-escalating 
                          the tension before it begins to build.
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/sootheyourself.jpg")}>
                      <Text>
                      4)  Soothe yourself and each other. When you argue, your body is in distress, so
                          you need to take time to calm down and if possible, soothe each other. This can
                          mean taking a time out or talking soothingly about how the other partner is
                          feeling.
                      </Text>
                    </Card>
                    <Card
                      containerStyle={{marginTop: 10}}
                      image={require("../assets/openup.png")}>
                      <Text>
                      5)  Compromise. Be honestly open to considering your partner’s position. Be tolerant
                          of each other’s faults.
                      </Text>
                    </Card>
                    
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
      }
});