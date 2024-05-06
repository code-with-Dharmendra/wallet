import React, { useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TextInput,
  Image,
  img,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";




const AddAmount = () => {
  const navigation = useNavigation();
  

  return (
    <View>
      <View style={styles.container}>
        <StatusBar backgroundColor="rgba(74,74,74,)" />
        <View style={styles.rect}>
          <Text style={styles.date}>Date</Text>
          <View style={styles.rect2}>
            <View style={styles.placeholderStack}>
              <TextInput
                placeholder="Enter Date"
                style={styles.placeholder}
              />
             <TouchableOpacity>
              {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
                <Image
                  source={require("../../assets/schedule.png")}
                  resizeMode="contain"
                  style={styles.image}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
       
       
        <Text style={styles.loremIpsum}>Select OEM Distributor</Text>
        <View style={styles.rect6Stack}>
          <View style={styles.rect6}>
            <TouchableOpacity>
              {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
              <Image
                source={require("../../assets/down-arrow.png")}
                resizeMode="contain"
                style={styles.image2}
              ></Image> 
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="placeholder"
            style={styles.placeholder2}
          ></TextInput>
        </View>
        <Text style={styles.selectName}>Select Name</Text>
        <View style={styles.rect5}>
          <View style={styles.placeholder3Row}>
            <TextInput
              placeholder="placeholder"
              style={styles.placeholder3}
            ></TextInput>
            <View>
              <TouchableOpacity>
                {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
                <Image
                  source={require("../../assets/down-arrow.png")}
                  resizeMode="contain"
                  style={styles.image3}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.referenceUtrNumber}>Reference UTR number</Text>
        <View style={styles.rect4}>
          <TextInput
            placeholder="Enter Reference UTR Number"
            style={styles.placeholder4}
          ></TextInput>
        </View>
        <Text style={styles.amountRs}>Amount(Rs.)</Text>
        <View style={styles.rect3Stack}>
          <View style={styles.rect3}></View>
          <TextInput
            placeholder="Enter Amount"
            style={styles.placeholder5}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <View style={styles.rect7}>
            <View style={styles.loremIpsum2Row}>
              <Text style={styles.loremIpsum2}></Text>
              <Text style={styles.submit}>Submit</Text>
              <Text style={styles.loremIpsum5}></Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.image4Row}>
        <TouchableOpacity>
          {img && <Image source={img} style={{ width: 50, height: 50, position: 'absolute', top: 1, left: 10, padding: 10, margin: 10, }} resizeMode='cover' />}
          <Image
            source={require("../../assets/left-arrow.png")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableOpacity>
        <Text style={styles.addAmount}>Add Amount</Text>
      </View>
    </View>
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4e2d87",

  },
  rect: {
    width: 334,
    height: 613,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 14
  },
  date: {

    color: "#121212",
    marginTop: 28,
    marginLeft: 32
  },
  rect2: {
    width: 296,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    marginTop: 1,
    marginLeft: 15
  },
  placeholder: {
    top: 0,
    left: 0,
    position: "absolute",

    color: "#121212",
    height: 44,
    width: 237
  },
  image: {
    top: 3,
    left: 230,
    width: 37,
    height: 40,
    position: "absolute"
  },
  placeholderStack: {
    width: 267,
    height: 44,
    marginLeft: 20
  },
  loremIpsum: {

    color: "#121212",
    marginTop: 28,
    marginLeft: 26
  },
  rect6: {
    top: 0,
    left: 0,
    width: 296,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15
  },
  image2: {
    width: 29,
    height: 36,
    marginTop: 5,
    marginLeft: 252
  },
  placeholder2: {
    top: 0,
    left: 19,
    position: "absolute",

    color: "#121212",
    height: 40,
    width: 281
  },
  rect6Stack: {
    width: 300,
    height: 43,
    marginTop: 4,
    marginLeft: 16
  },
  selectName: {
    color: "#121212",
    marginTop: 28,
    marginLeft: 26
  },
  rect5: {
    width: 296,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 1,
    marginLeft: 16
  },
  placeholder3: {

    color: "#121212",
    height: 44,
    width: 233
  },
  image3: {
    width: 29,
    height: 36,
    marginTop: 5
  },
  placeholder3Row: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 13,
    marginLeft: 20
  },
  referenceUtrNumber: {

    color: "#121212",
    marginTop: 27,
    marginLeft: 26
  },
  rect4: {
    width: 296,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    marginLeft: 17
  },
  placeholder4: {

    color: "#121212",
    height: 44,
    width: 257,
    marginLeft: 23
  },
  amountRs: {

    color: "#121212",
    marginTop: 28,
    marginLeft: 29
  },
  rect3: {
    top: 0,
    left: 0,
    width: 296,
    height: 44,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15
  },
  placeholder5: {
    top: 1,
    left: 19,
    position: "absolute",

    color: "#121212",
    height: 44,
    width: 260
  },
  rect3Stack: {
    width: 296,
    height: 45,
    marginTop: 2,
    marginLeft: 17
  },
  rect7: {
    width: 140,
    height: 44,
    backgroundColor: "rgba(68,189,68,1)",
    borderWidth: 0,
    borderColor: "rgba(0,0,0,1)",
    borderRadius: 15,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 98
  },
  loremIpsum2: {

    color: "#121212",
    marginTop: 6
  },
  submit: {

    color: "rgba(255,255,255,1)",
    marginLeft: 39,
    marginTop: -3
  },
  loremIpsum5: {

    color: "#121212",
    marginLeft: 29,
    marginTop: 16
  },
  loremIpsum2Row: {
    height: 17,
    flexDirection: "row",
    flex: 1,
    marginRight: 19,
    marginLeft: 9,
    marginTop: 15
  },
  image4: {
    width: 33,
    height: 51
  },
  addAmount: {

    color: "rgba(255,255,255,1)",
    fontSize: 25,
    marginLeft: 20,
    marginTop: 12
  },
  image4Row: {
    height: 51,
    flexDirection: "row",
    marginTop: -681,
    marginLeft: 17,
    marginRight: 151
  }
})
export default AddAmount;
