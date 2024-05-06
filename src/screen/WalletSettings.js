import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity,img } from "react-native";
import {useNavigation} from '@react-navigation/native';

const WalletSettings = () => {
  const navigation = useNavigation();
  return (
 
     <View style={styles.container}>
      <View style={styles.rect}>
      
      </View>
      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('Assign Credit Limits')}>
       
          <Text style={styles.setCreditLimit}>Set Credit Limit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}onPress={() => navigation.navigate('AddAmount2')} >
          <Text style={styles.addAmount}>Add Amount</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect: {
    width: 395,
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    marginTop: 0
  },
  image: {
    width: 31,
    height: 46
  },
  walletSettings: {
    
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginLeft: 27,
    marginTop: 20
  },
  imageRow: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 174,
    marginLeft: 22,
    marginTop: 23
  },
  button: {
    width: 147,
    height: 65,
    backgroundColor: "rgba(78,45,135,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.01,
    shadowRadius: 0,
    borderRadius: 15,
    marginTop: 1
  },
  setCreditLimit: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 24,
    marginLeft: 25
  },
  button1: {
    width: 147,
    height: 65,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginLeft: 5,
    marginTop: 1
  },
  addAmount: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 25,
    marginLeft: 34
  },
  buttonRow: {
    height: 66,
    flexDirection: "row",
    marginTop: 0,
    marginLeft: 35,
    marginRight: 23
  },
  wallet: {
  
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 5
  },
  image3: {
    width: 22,
    height: 25,
    transform: [
      {
        rotate: "179.00deg"
      }
    ],
    marginLeft: 97
  },
 
});
export default WalletSettings;