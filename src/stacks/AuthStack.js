import { StyleSheet, Pressable, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Main from "../screens/Main";
import SelectLogin from "../screens/SelectLogin";
import EmailLogin from "../screens/EmailLogin";
import Mobile from "../screens/Mobile";
import ConfirmOTP from "../screens/ConfirmOtp";
import Dashboard from "../screens/Dashboard";
import Session from "../screens/Session";
import Performance from "../screens/Performance";
import Profile from "../screens/Profile";
import Classes from "../screens/Classes";
import More from "../screens/More";
import Enquiries from "../screens/Enquiries";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectLogin"
        component={SelectLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmailLogin"
        component={EmailLogin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Mobile"
        component={Mobile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP"
        component={ConfirmOTP}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Base"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Session"
        component={Session}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Performance"
        component={Performance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Classes"
        component={Classes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="More"
        component={More}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Enquiries"
        component={Enquiries}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
