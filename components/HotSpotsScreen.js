import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, } from 'galio-framework';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';


export default class HotSpotsScreen extends Component{
    render(){
        return (
            <Container>
                <Content style={{backgroundColor: "#5BC0DE"}}>
                    <Card style={{flex: 0, marginTop: 60}}>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContainer}>Coping With Infidelity</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/infidelity.jpg")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                    Extramarital affairs are destructive and can wreak havoc on families. It isn’t the sexual
                                    act alone that causes the pain. It is the feeling of betrayal and the loss of trust. Peter Ustinov 
                                    suggested that “love is an act of endless forgiveness.” However, recovering from the shock 
                                    of infidelity and restoring love, trust and intimacy takes a lot more than forgiveness.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginTop: 2}}>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/empathy.jpg")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                    Conflict resolution and effective communication skills are essential for recovery, but so
                                    to is complete honesty. Couples may need some assistance in learning how to share
                                    with each other what they think, how they feel and what they need. Total honesty and
                                    disclosure may also be needed in terms of the spouse’s activities, his or her plans and
                                    accountability for time, whereabouts and money in order to rebuild the trust that was
                                    lost.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginTop: 10}}>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContainer}>Domestic Dilemmas</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/disagreement.jpg")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                    It is absolutely normal for couples to have disagreements over household chores, child
                                    rearing strategies and money management. After all, we all have different family
                                    experiences and styles that we draw on and they can be diametrically opposed to one
                                    another. What isn’t healthy is having the same argument over and over again until it
                                    escalates into a negative cycle of conflict. That is why it is critical that you find some
                                    common ground in key areas. Some of the below may or may not be indicative of those
                                    areas in your relationship where co-operation and collaboration is integral to the overall
                                    health of the relationship.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginTop: 10}}>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContainer}>Money Management</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/money.jpg")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                 {"\u2B24"}  Setting priorities on how money will be managed. {"\n"}
                                 {"\u2B24"}  Working together to create a budget.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginTop: 10}}>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContainer}>Raising Children</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/parents.png")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                 {"\u2B24"}  Agreeing on some basic rules and expectations for your children. This may mean creating a family contract that all of you can live with.
                                  {"\n"}
                                  {"\n"}
                                 {"\u2B24"}  Working together to find solutions geared to serving the best interests of your children.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{flex: 0, marginTop: 10}}>
                        <CardItem>
                            <Body>
                                <Text style={styles.textContainer}>Household Chores</Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require("../assets/chores.jpg")} style={styles.imageContainer}/>
                                <Text style={{marginTop: 10}}>
                                 {"\u2B24"}  Calling a meeting to discuss how household chores can be shared.
                                  {"\n"}
                                 {"\u2B24"}  Having your partner and/or children come up with solutions instead of telling them what you’d like them to do to help.
                                  {"\n"}
                                 {"\u2B24"}  Setting realistic expectations around how messy or tidy your house should be and when/how the chores will be done.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
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
        color: 'black',
        fontFamily: 'serif',
        fontWeight: 'bold'
      },
      imageContainer: {
          height: 300, 
          width: 395, 
          flex: 1
      },
      buttonContainer: {
          marginTop: 35,
          marginBottom: 30,
          marginLeft: 125
      }
});