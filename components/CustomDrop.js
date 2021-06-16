import React, {useState} from 'react';
import {View, Button, Platform, StyleSheet} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';


		const App = () => {
  			return (
      				<View style={styles.container}>
        				<ModalDropdown 
        
          					options = {['Please Select','HTML', 'CSS','JavaScript','React Native']}
        
        				/>
      				</View>
  				)
			};

		const styles = StyleSheet.create ({
    			container : {
      			paddingTop : 50,
      			justifyContent : "center",
      			alignItems : "center"
    			}
			});

		export default App;