import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, img, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from '@react-navigation/native';

function Login(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStackStack}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <View style={styles.loremIpsumRow}>
              <Text style={styles.loremIpsum}>@</Text>
              <TextInput
                placeholder="Enter Email ID"
                style={styles.enterEmailId}
              ></TextInput>
            </View>
          </View>
          <Svg viewBox="0 0 284.25 457" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={142}
              cy={229}
              rx={142}
              ry={229}
            ></Ellipse>
          </Svg>
          {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
          <Image
            source={require("../../assets/car-wash.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
           {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
          <Image
            source={require("../../assets/Tranoprologo.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <Text style={styles.email}>Email</Text>
      </View>
      <View style={styles.rect1}>
        <View style={styles.iconRow}>
          <Icon name="unlock-alt" style={styles.icon}></Icon>
          <TextInput
            placeholder="Enter Password"
            style={styles.enterPassword}
          ></TextInput>
        </View>
      </View>
      <Text style={styles.password}>Password</Text>
      <TouchableOpacity>
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
       </TouchableOpacity>
     
      <View style={styles.rect2}>
      <TouchableOpacity>
        <Text style={styles.logIn}>Log in</Text>
        </TouchableOpacity>
      </View>
     
      
      <View style={styles.notAMemberRow}>
        <Text style={styles.notAMember}>Not a member?</Text>
        <TouchableOpacity>
        <Text style={styles.joinNow}>Join now</Text>
        </TouchableOpacity>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  rect: {
    top: 453,
    left: 1,
    width: 283,
    height: 47,
    position: "absolute",
    backgroundColor: "#d7d8d8",
    flexDirection: "row"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#4e2d87",
    fontSize: 25,
    marginTop: 1,
    fontWeight:"bold"
  },
  enterEmailId: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 38,
    width: 238,
    backgroundColor: "#fff",
    marginLeft: 10,
  },
  loremIpsumRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 8,
    marginLeft: 8,
    marginTop: 5
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 284,
    height: 457,
    position: "absolute",
    transform: [
      {
        rotate: "90.00deg"
      }
    ]
  },
  image: {
    top: 304,
    left: 77,
    width: 129,
    height: 68,
    position: "absolute"
  },
  image2: {
    top: 158,
    left: 55,
    width: 205,
    height: 189,
    position: "absolute"
  },
  rectStack: {
    top: 0,
    left: 0,
    width: 285,
    height: 500,
    position: "absolute"
  },
  email: {
    top: 431,
    left: 1,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16
  },
  rectStackStack: {
    width: 285,
    height: 500,
    marginTop: -158,
    marginLeft: 36
  },
  rect1: {
    width: 284,
    height: 47,
    backgroundColor: "#d7d8d8",
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 36
  },
  icon: {
    color: "#4e2d87",
    fontSize: 24,
    height: 24,
    width: 15,
    marginTop: 8
  },
  enterPassword: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 238,
    backgroundColor: "#fff",
    marginLeft: 13
  },
  iconRow: {
    height: 38,
    flexDirection: "row",
    flex: 1,
    marginRight: 7,
    marginLeft: 10,
    marginTop: 4
  },
  password: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: -69,
    marginLeft: 37
  },
  forgotPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 75,
    marginLeft: 123
  },
  rect2: {
    width: 284,
    height: 55,
    borderRadius: 25,
    backgroundColor: "rgba(254,190,64,1)",
    marginTop: 58,
    marginLeft: 37
  },
  logIn: {
    fontFamily: "roboto-700",
    color: "#4e2d87",
    fontSize: 16,
    marginTop: 18,
    marginLeft: 120,
    fontWeight:"bold"
  },
  notAMember: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 16,
    marginTop: 1
  },
  joinNow: {
    fontFamily: "roboto-700",
    color: "rgba(254,190,64,1)",
    fontSize: 16,
    marginLeft: 6
  },
  notAMemberRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 83,
    marginRight: 97
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 497,
    height: 146,
    position: "absolute"
  },
  ellipse3: {
    top: 16,
    left: 92,
    width: 393,
    height: 94,
    position: "absolute"
  },
  ellipseStack: {
    width: 497,
    height: 146,
    marginTop: 50,
    marginLeft: -125
  }
});

export default Login;
