/*
Author: Aubrey Nickerson
Date: August 5th, 2020
Program: ForgotPasswordScreen.js
Project: Relationship App

This is the forgot password screen. If the user
forgot the password then they go to this screen.
The user just needs to enter their username and 
new password. The database is firebase db.
*/

// Import libraries
import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert} from 'react-native';
import { Button, Input } from 'galio-framework';
import Spinner from 'react-native-loading-spinner-overlay';
import { Base64 } from 'js-base64';
import '../db/InitialFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

// Set up database 
const db = firebase.firestore();

// Get users from the database
const getCollection = db.collection('users');
export default class ForgotPasswordScreen extends Component{
    state = {
      username: '',
      password: '',
      confirmPassword: '',
      spinner: false
    }

    // Function for updating password
    async updatePassword(){
      this.setState({spinner: true});
      var decryptPassword;
      var getUsername = await getCollection.where('username', '==', this.state.username).get();
        
      // If none of the fields are filled then alert the user.  
      if(this.state.username == '' && this.state.password == '' && this.state.confirmPassword == '')
      {
        this.setState({spinner: false});
        Alert.alert('Error', "You must fill in all fields to update your password.");
        return;
      }
     
      // If the username is empty then alert the user   
      else if(this.state.username == '')
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', 'You must fill in your username.');
        return;
      }
        
      // If the password is empty then alert the user  
      else if(this.state.password == '')
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'You must fill in your new password');
        return;
      }
      
      // If the confirm password is empty then alert the user  
      else if(this.state.confirmPassword == '')
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'You must confirm your new password');
        return;
      }
        
      // If the length of the password is less than 8 then alert the user.
      else if(this.state.password.length < 8)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'Password must be at least 8 characters long.');
        return;
      }
        
     // If the length of the confirm password is less than 8 then alert the user.   
      else if(this.state.confirmPassword.length < 8)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'Confirm password must be at least 8 characters long');
        return;
      }
        
      // If the passwords do not match then alert the user.  
      else if(this.state.password != this.state.confirmPassword)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'The passwords do not match. Try again.');
        return;
      }
        
      // If the username does not exist in the database then alert the user.  
      else if(getUsername.empty)
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', "This username does not exist as a member.");
        return;
      }
        
      // Encrypt the password if no errors occured and update the password in the database.  
      var encryptPassword = Base64.encode(this.state.password);
      // Update database   
      db.collection('users').doc(this.state.username + 'ID').update({password: encryptPassword});
      this.setState({spinner: false});
      this.props.navigation.navigate('Login');
    }

    render(){
        
        // Display content
        return (
            <View style={styles.container}>
              <ScrollView>
              <Spinner
                visible={this.state.spinner}
                textContent={'Loading...'}
                textStyle={styles.spinnerTextStyle}
              />
              <Image
                source={require('../assets/goodfor2.png')}
                style={styles.imageContainer}
              />
              <Input 
                name="username" 
                style={styles.textInputContainer} 
                placeholder="Username"
                onChangeText={(text) => {
                  this.setState({
                    username: text
                  })
                }}
              />
              <Input 
                name="password" 
                style={styles.textInputContainer} 
                placeholder="Password" 
                password viewPass
                onChangeText={(text) => {
                  this.setState({
                    password: text
                  })
                }}/>
              <Input 
                name="confirmPassword" 
                style={styles.textInputContainer} 
                placeholder="Confirm Password" 
                password viewPass
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text
                  })
                }}/>
              <Button
                color="#FE2472"
                round
                style={styles.buttonContainer}
                onPress={() => {
                  this.updatePassword();
                }}
                >Submit</Button>
              <Button
                color="#FE2472"
                round
                style={styles.buttonContainer}
                onPress={() => {
                  this.props.navigation.navigate('Login')
                }}
                >Sign In</Button>
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
      color: 'white',
    },
    textInputContainer: {
        width: 350,
        marginBottom: 10,
        marginLeft: 25
    },
    buttonContainer: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 110
    },
    imageContainer: {
        width: 400,
        height: 400,
        marginTop: 30
    },
    spinnerTextStyle: {
        fontSize: 20
    }
});
