import React, { Component } from 'react';
import { Button, View, backgroundImage, StyleSheet, ImageBackground,Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BlurView } from '@react-native-community/blur';
 

	const goToLogin = () => {
		Actions.login()
	}

class Signup extends Component {
 
		constructor(props) {
		 
			super(props)
		 
			this.state = {
		 
			  UserName: '',
			  UserEmail: '',
			  UserPassword: '',
			  UserPhone: ''
		 
			}
		 
		  }
		 
		  UserRegistrationFunction = () =>{
		 
		 
		 const { UserName }  = this.state ;
		 const { UserEmail }  = this.state ;
		 const { UserPassword }  = this.state ;
		 const { UserPhone }  = this.state ;
		 
		 
		fetch('http://192.168.43.27/reporting/signup.php', {
		  method: 'POST',
		  headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
		 
			name: UserName,
		 
			email: UserEmail,
		 
			password: UserPassword,

			phone: UserPhone
		 
		  })
		 
		}).then((response) => response.json())
			  .then((responseJson) => {
		 
		// Showing response message coming from server after inserting records.
				Alert.alert(responseJson);
				Actions.login();
			  }).catch((error) => {
				console.error(error);
			  });
		 
		 
		  }
render() {		 
	return(
		<ImageBackground source={require('../../../assets/img/water.jpg')} style={styles.backgroundimage}>
			<Image source={require('../../../assets/img/2.jpg')}  style={styles.logo} />
		 <View style={ styles.signup_form }>
		 <Text style= {{ fontSize: 20, color: "#fff", textAlign: 'center', marginBottom: 15, backgroundColor: '#42A5F5',padding:8, borderRadius:17 }}>USER REGISTRATION FORM</Text>
		  <TextInput
			   style={styles.input}
			   placeholder='Enter Username'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserName => this.setState({UserName})}
          	   underlineColorAndroid='transparent'
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Email'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserEmail => this.setState({UserEmail})}
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Password'
			   autoCapitalize="none"
			   secureTextEntry={true}
			   placeholderTextColor='white'
			   onChangeText={UserPassword => this.setState({UserPassword})}
			 />
			 <TextInput
			   style={styles.input}
			   placeholder='Enter Phone Number'
			   autoCapitalize="none"
			   placeholderTextColor='white'
			   onChangeText={UserPhone => this.setState({UserPhone})}
			 />
			 <TouchableOpacity
			   title='Sign Up' onPress={this.UserRegistrationFunction}>
				   <View>
					   <Text style={styles.signup}>Sign Up</Text>
				   </View>

			 </TouchableOpacity>

			 <View>
				<Text onPress = {goToLogin} style={styles.login}>Click to Proceed to the Login Form</Text>
			</View>

		 </View>
	  </ImageBackground>
	);
	}

}	

const styles = StyleSheet.create({
		container:{
		  flex: 1,
		},
		signup:{
			padding:20,
			backgroundColor: '#42A5F5',
			borderRadius: 15,
			fontWeight: 'bold',
			color: 'white'
			
		},
		backgroundimage:{
		  width:null,
		  height:null,
		  flex:1
		},
		input: {
		  width: 320,
		  height: 55,
		  backgroundColor: '#42A5F5',
		  margin: 10,
		  padding: 8,
		  color: 'white',
		  borderRadius: 14,
		  fontSize: 18,
		  fontWeight: '500',
		},
		text:{
		  fontWeight:'bold',
		  fontSize:11,
		  justifyContent:'center',
	  
		},
		btn:{
		  flex:1,
		  padding:15,
		  backgroundColor:'white',
		  borderRadius:30,
		  flexDirection:'row',
		  width:4,
		  height:70,
		  margin:5,
		  alignItems:'center',
		  justifyContent:'center',
	  
		},
		title:{
		  fontSize:25,
		  color:'red',
		  marginTop:20
		},
		signup_form:{
		  marginTop:40,
		  justifyContent:'center',
		  alignItems:'center',
		  marginLeft:15,
		  marginRight:15
		},
		logo:{
		  justifyContent:'center',
		  alignContent:'center',
		  marginTop:50,
		  padding:5,
		  maxHeight:50,
		  maxWidth:50,
		  marginLeft:150
		},
		login:{
			color:'white',
			marginTop:20,
			fontSize:18
		}
		
	  });
export default Signup