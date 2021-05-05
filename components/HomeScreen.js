import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'galio-framework';
import { ScrollView } from 'react-native-gesture-handler';


export default class HomeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
              <ScrollView>
              <Button
                color="#FE2472"
                round size="large"
                style={{marginTop: 200, marginBottom: 10}} 
                onPress={() => {
                  this.props.navigation.navigate('Conflict')
                }}
              >Conflict Resolution</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('Expectations')
                }}
              >Expectations</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('GoodForTwo')
                }}
              >Good For 2</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('HotSpots')
                }}
              >Hot Spots In A Relationship</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('Listen')
                }}
              >Listening</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={styles.buttonContainer} 
                onPress={() => {
                  this.props.navigation.navigate('ProblemSolving')
                }}
              >Problem Solving</Button>
              <Button
                color="#FE2472"
                round size="large"
                style={{marginBottom: 150, marginTop: 10}} 
                onPress={() => {
                  this.props.navigation.navigate('WarningSigns')
                }}
              >Warning Signs of Ineffective Communication</Button>
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
      fontSize: 20,
      marginBottom: 20,
      color: 'white'
    },
    buttonContainer: {
      marginTop: 10,
      marginBottom: 10
    }
});