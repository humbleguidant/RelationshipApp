import React, { Component } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Button, Input } from 'galio-framework';
import { Base64 } from 'js-base64';
import Spinner from 'react-native-loading-spinner-overlay';
import '../db/InitialFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const db = firebase.firestore();
const getCollection = db.collection('users');
export default class RegisterScreen extends Component{
    state = {
      fullName: '',
      username: '',
      password: '',
      confirmPassword: '',
      spinner: false
    }

   async register(){
      this.setState({spinner: true});
      var getUsername = await getCollection.where('username', '==', this.state.username).get();
      if(this.state.fullName == '' && this.state.username == '' && this.state.password == '' && this.state.confirmPassword == '')
      {
        this.setState({spinner: false});
        Alert.alert('Error', "You must fill in all fields to create an account.");
        return;
      }
      else if(this.state.fullName == '')
      {
        this.setState({spinner: false});
        Alert.alert('Name Error', 'You must fill in your full name.');
        return;
      }
      else if(this.state.username == '')
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', 'You must fill in your username.');
        return;
      }
      else if(this.state.password == '')
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'You must fill in your password.');
        return;
      }
      else if(this.state.confirmPassword == '')
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'You must confirm your password.');
        return;
      }
      else if(this.state.password.length < 8)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'Password must be at least 8 characters long.');
        return;
      }
      else if(this.state.confirmPassword.length < 8)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'Confirm password must be at least 8 characters long');
        return;
      }
      else if(this.state.password != this.state.confirmPassword)
      {
        this.setState({spinner: false});
        Alert.alert('Password Error', 'The passwords do not match. Try again.');
        return;
      }
      else if(!getUsername.empty)
      {
        this.setState({spinner: false});
        Alert.alert('Username Error', 'This username is already taken. Try a different username or sign in.');
        return;
      }
      var encryptPassword = Base64.encode(this.state.password);
      var data = {
        name: this.state.fullName,
        username: this.state.username,
        password: encryptPassword
      };
      db.collection('users').doc(this.state.username + 'ID').set(data);
      this.setState({spinner: false});
      this.props.navigation.navigate('Login');
    }

    render(){
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
                name="fullName" 
                style={styles.textInputContainer} 
                placeholder="Full Name"
                onChangeText={(text) => {
                  this.setState({
                    fullName: text
                  })
                }}
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
              }}
              />
              <Input 
                name="confirmPassword" 
                style={styles.textInputContainer} 
                placeholder="Confirm Password" 
                password viewPass
                onChangeText={(text) => {
                  this.setState({
                    confirmPassword: text
                  })
              }}
              />
              <Button
                color="#FE2472"
                round
                style={styles.buttonContainer}
                onPress={() => {
                  this.register()
                }}
              >Create Account</Button>
              <Button
                color="#FE2472"
                round
                style={{marginBottom: 20, marginLeft: 110}}
                onPress={() => {
                  this.props.navigation.navigate('Login');
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
    justifyContent: 'center'
  },
  textContainer: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white'
  },
  textInputContainer: {
      width: 350,
      marginBottom: 10,
      marginLeft: 25
  },
  buttonContainer: {
      marginTop: 10,
      marginBottom: 15,
      marginLeft: 110,
  },
  imageContainer: {
      marginTop: 30,
      width: 400,
      height: 400
      
  },
  spinnerTextStyle: {
      fontSize: 20
  }
});