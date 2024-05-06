import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, img } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';
import Login from "./InstallationForm";

function Technician(props) {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <View style={styles.button2Row}>
        <TouchableOpacity style={styles.button2} >
          <Text style={styles.loremIpsum3}>3</Text>
          <Text style={styles.my}>       My{'\n'}Installations</Text>
         {/* <Text style={styles.installations}></Text> */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InstallationForm')}>
        {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
          <Image
            source={require("../../assets/check.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Text style={styles.loremIpsum2}>Installation {"\n"} Form</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  rect: {
    width: 360,
    height: 80,
    backgroundColor: "rgba(78,45,135,1)",
    marginTop: 20,
   
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  technician: {
    top: 14,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    
  },
  dharamendraKumar: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)"
  },
  technicianStack: {
    width: 129,
    height: 31
  },
  id1234567: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 10
  },
  technicianStackColumn: {
    width: 129,
    marginLeft: 24,
    marginBottom: 1
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 7,
    marginRight: 160
  },
  button2: {
    width: 125,
    height: 150,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15
  },
  loremIpsum3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 44,
    marginTop: 23,
    marginLeft: 51
  },
  my: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 15,
    marginLeft: 29
  },
  installations: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginLeft: 26
  },
  button: {
    width: 125,
    height: 149,
    backgroundColor: "rgba(78,45,135,1)",
    borderRadius: 15,
    marginLeft: 8,
    marginTop: 1
  },
  image2: {
    width: 64,
    height: 66,
    marginTop: 16,
    marginLeft: 27
  },
  loremIpsum2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    marginTop: 16,
    marginLeft: 24
  },
  button2Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 40,
    marginRight: 47,
    gap:20
  }
});

export default Technician;