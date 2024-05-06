import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerNavigation from './DrawerNavigation';
import { useNavigation } from '@react-navigation/native';
import WalletSettings from '../screen/WalletSettings';
// import AssignCreditLimit from '../screen/AssignCreditLimit';
import EsimReport from '../screen/EsimReport';
import AssignCreditLimit from '../screen/AssignCreditLimit';
// import AddAmounts from '../screen/AddAmounts';
import AddAmount2 from '../screen/AddAmount2';
import AddAmount from '../screen/AddAmount';
import AssignCreditLimits from '../screen/AssignCreditLimits';
import Notifications2 from '../screen/Notifications2';
import RechargeList from '../Distributor/RechargeList';
import SpendsList from '../Distributor/SpendsList';
import History from '../Distributor/History';
import Statement from '../Distributor/Statement';
import WalletScreen from '../screen/WalletScreen';
import InstallationForm from '../screen/InstallationForm';
import TranoAllLogin from '../screen/TranoAllLogin';
import Login from '../screen/Login';
import Technician from '../screen/Technician';
// import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen name='Root'  component={DrawerNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Wallet" component={WalletSettings} options={{ headerShown: true, 
             headerStyle: {
                backgroundColor: '#4e2d87'
            }, headerTintColor: '#ffff'
        }} />
            <Stack.Screen name="EsimReport" component={EsimReport} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            {/* <Stack.Screen name="EsimReport" component={EsimReport} /> */}
            <Stack.Screen name="Assign Credit Limit" component={AssignCreditLimit} options={{ headerShown: true, 
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AddAmount2" component={AddAmount2} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AddAmount" component={AddAmount} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Assign Credit Limits" component={AssignCreditLimits} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Notifications" component={Notifications2} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="RechargeList" component={RechargeList} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Spends List" component={SpendsList} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="History" component={History} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Statement" component={Statement} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="WalletScreen" component={WalletScreen} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             <Stack.Screen name="InstallationForm" component={InstallationForm} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="Technician" component={Technician} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            
            <Stack.Screen name="Login" component={Login} options={{
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
             
             </Stack.Navigator>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})