import React, { Component, useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Picker } from '@react-native-picker/picker';
// import Icon from "react-native-vector-icons/Entypo";
// import { DropDownPicker } from 'react-native-dropdown-select-list';


// export function (props) {
   


    const ViewCertificate = () => {
        const [selectedPage, setSelectedPage] = useState('');
      
        const pages = [
          { label: '     5', value: '5' },
          { label: '     10', value: '2' },
          { label: '     25', value: '3' },
          { label: '     50', value: '50' },
          { label: '     100', value: '100' },
          // Add more pages as needed
        ];
      
        const handlePageChange = (page) => {
          setSelectedPage(page);
          // You can add logic here to navigate to the selected page
        };




    return (
        <ScrollView horizontal={true} style={styles.outerScrollView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    {/* <Text style={styles.show}>Show</Text> */}
                    {/* <View style={styles.rect}></View>
                    
                    <TextInput placeholder="Select" style={styles.select}></TextInput>

                    <Icon name="chevron-small-down" style={styles.icon}>
                        
                    </Icon> */}
                    <View>
                    <Text style={{marginTop:30, marginLeft:10}}> Select :</Text>
                    </View>
                   
    <View style={{ flex: 1, }}>
      <Picker
        selectedValue={selectedPage}
        style={{ height: 50, width: 130, marginLeft: 50, marginTop:-36 }}
        onValueChange={(itemValue) => handlePageChange(itemValue)}
      >
        {pages.map((page, index) => (
          <Picker.Item key={index} label={page.label} value={page.value} />
        ))}
      </Picker>
      {/* <Text>You selected: {selectedPage}</Text> */}
    </View>
                    <Text style={styles.entries}>entries</Text>
                    <Text style={styles.loremIpsum}>
                        Showing 1 to 1 of 1 entries (filtered from 6,530 total entries)
                    </Text>
                    <View style={styles.rect2}></View>
                    <View style={styles.rect3}></View>
                    <Text style={styles.sno}>Sno.</Text>
                    <Text style={styles.loremIpsum2}>Date of {"\n"}Installation</Text>
                    <Text style={styles.vehicleNumber}>Vehicle{"\n"}Number</Text>
                    <Text style={styles.vehicleMakeModel}>Vehicle Make &amp;{"\n"}Model</Text>
                    <Text style={styles.loremIpsum3}></Text>
                    <Text style={styles.deviceImei}>Device IMEI</Text>
                    <Text style={styles.customerName}>Customer {"\n"}Name</Text>
                    <Text style={styles.dealerName}>Dealer{"\n"}Name</Text>
                    <Text style={styles.loremIpsum4}>
                        Fitment{"\n"}Certificate{"\n"}No.
                    </Text>
                    <Text style={styles.downloadCertificate}>Download Certificate</Text>
                    <Text style={styles.loremIpsum5}>1.</Text>
                    <Text style={styles.loremIpsum6}>2024-03-01</Text>
                    <Text style={styles.mh15Gv63}>MH15GV63...</Text>
                    <Text style={styles.marutiSu}>Maruti Su..</Text>
                    <Text style={styles.loremIpsum7}>860560066189</Text>
                    <Text style={styles.shaikhAsib}>SHAIKH ASIB</Text>
                    <Text style={styles.rajServices}>Raj Services</Text>
                    <Text style={styles.ctvltd022412}>CTVLTD022412</Text>
                    <TouchableOpacity style={styles.button2}></TouchableOpacity>
                    <TouchableOpacity style={styles.button}></TouchableOpacity>
                    <Text style={styles.departmentCopy}>Department Copy</Text>
                    <Text style={styles.customerCopy}>Customer Copy</Text>
                    <TouchableOpacity style={styles.button3}></TouchableOpacity>
                    <View style={styles.rect9}></View>
                    <TouchableOpacity style={styles.button4}></TouchableOpacity>
                    <Text style={styles.previous}>Previous</Text>
                    <Text style={styles.next}>Next</Text>
                    <Text style={styles.loremIpsum8}>1</Text>
                </View>
            </ScrollView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    outerScrollView: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 5,
        backgroundColor: "rgba(15,15, 15,0)"
    },
    show: {
        top: 61,
        left: 12,

        fontFamily: "roboto-regular",
        color: "#121212"
    },

    rect: {
        top: 57,
        left: 53,
        width: 73,
        height: 23,

        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.3,
        shadowRadius: 10,
        marginTop: -18
    },
    select: {
        top: 63,
        left: 56,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        height: 16,
        width: 53
    },
    icon: {
        top: 35,
        left: 103,

        color: "rgba(128,128,128,1)",
        fontSize: 21
    },
    entries: {
        top: -480,
        left: 170,
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    loremIpsum: {
        top: -470,
        left: 12,
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    rect2: {
        top: -440,
        left: 12,
        width: 790,
        height: 81,

        backgroundColor: "rgba(199,177,237,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.57,
        shadowRadius: 10
    },
    rect3: {
        top: 103,
        left: 12,
        width: 790,
        height: 44,
        position: "absolute",
        backgroundColor: "rgba(78,45,135,1)"
    },
    sno: {
        top: 120,
        left: 19,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    loremIpsum2: {
        top: 110,
        left: 56,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    vehicleNumber: {
        top: 110,
        left: 126,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    vehicleMakeModel: {
        top: 117,
        left: 186,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12,
        lineHeight: 12
    },
    loremIpsum3: {
        top: 131,
        left: 291,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    deviceImei: {
        top: 120,
        left: 279,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    customerName: {
        top: 110,
        left: 366,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    dealerName: {
        top: 110,
        left: 447,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    loremIpsum4: {
        top: 104,
        left: 521,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    downloadCertificate: {
        top: 119,
        left: 625,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    },
    loremIpsum5: {
        top: 160,
        left: 25,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    loremIpsum6: {
        top: 160,
        left: 51,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    mh15Gv63: {
        top: 160,
        left: 118,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    marutiSu: {
        top: 160,
        left: 195,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    loremIpsum7: {
        top: 160,
        left: 269,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    shaikhAsib: {
        top: 160,
        left: 359,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    rajServices: {
        top: 160,
        left: 438,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    ctvltd022412: {
        top: 160,
        left: 509,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    button2: {
        top: 160,
        left: 605,
        width: 82,
        height: 20,
        position: "absolute",
        backgroundColor: "rgba(65,117,5,1)",
        borderRadius: 3
    },
    button: {
        top: 160,
        left: 695,
        width: 82,
        height: 20,
        position: "absolute",
        backgroundColor: "rgba(65,117,5,1)",
        borderRadius: 3
    },
    departmentCopy: {
        top: 160,
        left: 607,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 10
    },
    customerCopy: {
        top: 160,
        left: 701,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 10
    },
    button3: {
        top: 227,
        left: 15,
        width: 61,
        height: 21,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.46,
        shadowRadius: 10
    },
    rect9: {
        top: 227,
        left: 75,
        width: 42,
        height: 21,
        position: "absolute",
        backgroundColor: "rgba(65,117,5,1)",
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.46,
        shadowRadius: 10
    },
    button4: {
        top: 227,
        left: 117,
        width: 61,
        height: 21,
        position: "absolute",
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.46,
        shadowRadius: 10
    },
    previous: {
        top: 230,
        left: 20,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    next: {
        top: 230,
        left: 130,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 12
    },
    loremIpsum8: {
        top: 230,
        left: 92,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "rgba(255,255,255,1)",
        fontSize: 12
    }
});

export default ViewCertificate;