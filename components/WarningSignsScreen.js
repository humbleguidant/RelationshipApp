import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Block, Accordion } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    { title: "Warning Signs", content: "John Gottman suggests that \"certain kinds of negativity, if allowed to run rampant, are so lethal to a relationship\" that he calls them the Four Horsemen of the Apocalypse:",
      icon: {
        name: 'keyboard-arrow-up',
        family: 'material',
        size: 50,
        color: "#5BC0DE"
      }
    },
    { title: "Criticism", content: "Attacking someone’s personality or character, rather than a specific behaviour and usually with blame. Criticism is just a step across the line from one of the healthiest things that couples do engage in — complaining (airing anger and disagreement)."},
    { title: "Contempt", content: "Intending to insult and psychologically abuse your partner. Common signs include hostile humour, sarcasm, subtle put-downs, and body language such as sneers."},
    { title: "Defensiveness", content: "A natural response, which can include denying responsibility, making excuses, cross-complaining, yes-butting, whining, and repeating oneself (nagging)." },
    { title: "Stonewalling", content: "Simply refusing to respond or putting up walls. When this becomes a typical pattern, it is destructive because one or both partners are disengaging from any meaningful communication with the other." }
  ];
export default class WarningSignsScreen extends Component{

    render(){
        return (
                <View style={styles.container}>
                    <ScrollView>
                    <Block style={styles.blockContainer} shadow>
                        <Accordion style={{backgroundColor:"#FE2472", padding: 10}} dataArray={data} contentStyle={styles.textContainer} headerStyle={{fontSize: 50}}/>
                    </Block>
                    <Button
                        color="#FE2472"
                        style={styles.buttonContainer}
                        round
                        onPress={() => {
                        this.props.navigation.navigate('Home')
                        }}
                    >Home</Button>
                    </ScrollView>
                </View>
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
          marginTop: 40,
          marginBottom: 10,
          marginLeft: 83
      },
      blockContainer: {
          marginTop: 65,
          height: 600,
          width: 350
      }
});