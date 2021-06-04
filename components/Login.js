import { StatusBar } from "expo-status-bar";
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView, TouchableOpacity, Linking, Animated } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
export default function APP () {


      const [data, setData] = useState({
        isValidUser : true,
        isValidPassword : true
      });

      const textHandler = () => ({
          
      });

      const handleValidUser = (val) => {
        if ( val.trim().length >=4 ){
          setData({
              ...data,
              isValidUser : true
          });
        } else {
          setData({
              ...data,
              isValidUser : false
          });
        }
      }

      const handleValidPass = (val) => {
        if ( val.trim().length >= 8){
          setData({
              ...data,
              isValidPassword : true
          });
        } else {
          setData({
            ...data,
            isValidPassword : false
          });
        }
      }

      const [show, setShow] = useState(false);
      const [visible, setVisible] = useState(true);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}>My Login</Text>
    </View>
    <View style={styles.image}>
      {/* <Image 
        style={styles.image1}
        source={require('../expo/assets/log.png')}
      /> */}
    </View>
    <View style={styles.border}>
      <Text style={styles.userText}>Email</Text>
        <TextInput 
          style = {styles.input}
          placeholder = 'Enter Email'
          onChangeText = {(val) => textHandler(val)}
          onEndEditing ={(e) => handleValidUser(e.nativeEvent.text)}
        /> 
        { data.isValidUser ? null : 
            <Animated.View animation="fadeInLeft" duration={500}> 
            <Text style={styles.errorMsg}>Please enter an valid email address!!!</Text>
        </Animated.View>
        }
      
      <Text style={styles.userPass}>Password</Text>
        <TextInput 
          secureTextEntry = {visible}
          icon={<Text>show</Text>}
          iconPosition = "right"
          style = {styles.input}
          placeholder = 'Enter Password'
          onChangeText = {(val) => handleValidPass(val)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => {
              setVisible(!visible)
              setShow(!show)}}>
          <MaterialCommunityIcons 
            name = {show == false ? 'eye-outline' : 'eye-off'}
            color = "grey"
            size = {24}
          />
        </TouchableOpacity>
        { data.isValidPassword ? null : 
          <Animated.View animation="fadeInLeft" duration={500}> 
          <Text style={styles.errorMsg}>Password must be 8 characters long!!!</Text>
      </Animated.View>
        }
         
    <TouchableOpacity>
     
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sign In</Text>
      </View>

    </TouchableOpacity>
        <View>
          <Text style={styles.forgotText} onPress={()=>Linking.openURL('/')}>Forgot Password?</Text>
        </View>
    
    <TouchableOpacity>
      <View style={styles.buttonContainer1}>
          <Text style={styles.buttonText1}>sign with google</Text>
      </View>
     </TouchableOpacity>
        <View>
          <Text style={styles.dontText}>Don't have an account?    <Text style={styles.signTex}>Sign up</Text>
          </Text>
        </View>
    </View>
   </View>
  );
}

const styles = StyleSheet.create ({
   
    container : {
      flex : 1,
      backgroundColor : "#3333cc"
    },
    header : {
      height : 50,
      paddingTop : 12,
      paddingLeft : 10,
      backgroundColor : "#3377ff",
      marginTop : 25
    },
    title : {
      textAlign : "left",
      marginBottom : 10,
      color : "#ffffff",
      fontFamily : "sans-serif",
      fontSize : 19
    },
    image : {
      flex : 0.3,
      backgroundColor : "#3399ff",
    },
    image1 : {
      width : 100,
      height : 100,
      alignItems : "center",
      justifyContent : "center",
      marginLeft : 126,
      marginTop : 30,
      borderRadius : 50
    },
    userText : {
      color : "#3399ff",
      marginLeft : 20,
      marginTop : 20,
      fontFamily : "sans-serif",
      fontSize : 18
    },
    userPass : {
      color : "#3399ff",
      marginLeft : 20,
      marginTop : 20,
      fontFamily : "sans-serif",
      fontSize : 18
    },
    input : {
      borderBottomWidth : 2,
      borderBottomColor : "#3399ff",
      padding : 8,
      margin : 10,
      marginLeft : 20,
      width : 310,
    },
    buttonContainer : {
      marginVertical : 20,
      height : 40,
      marginHorizontal : 20,
      justifyContent : "center",
      alignItems : "center",
      backgroundColor : "#5d57ff",
      borderRadius : 20,
      marginTop : 5
    },
    buttonText : {
      color : "white",
      fontFamily : "sans-serif",
      fontSize : 15,
      textTransform : "uppercase"
    },
    forgotText : {
      fontFamily : "sans-serif",
      textAlign : "center",
      alignItems : "center",
      justifyContent : "center",
      marginTop : -17,
      marginTop : -5,
      marginBottom : 5,
      color : "blue"
    },
    buttonContainer1 : {
      marginVertical : 20,
      height : 40,
      marginHorizontal : 20,
      justifyContent : "center",
      alignItems : "center",
      borderRadius : 50,
      borderWidth : 2,
      borderColor : "#5d57ff",
      marginTop : 5
    },
    buttonText1 : {
      color : "#5d57ff",
      fontFamily : "sans-serif",
      fontSize : 13,
      textTransform : "uppercase"
    },
    dontText : {
      textAlign : "center",
      alignItems : "center",
      justifyContent : "center",
      marginTop : -17,
      marginTop : -5
    },
    border : {
      flex : 0.7,
      backgroundColor : "#ffff"
  },

    login : {
      margin : 10,
      padding : 8,
      borderColor : "yellow"
    },

    signTex : {
      fontFamily : "sans-serif",
      color : "blue",
    },
    errorMsg : {
      fontFamily : "sans-serif",
      color : "red",
      marginLeft : 20,
    },
    btn : {
      top : -45,
      right : -300
    }
});