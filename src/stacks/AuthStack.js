import { StyleSheet, Pressable, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Main from "../screens/Main";
import SelectLogin from "../screens/SelectLogin";
import EmailLogin from "../screens/EmailLogin";
import Mobile from "../screens/Mobile";
import ConfirmOTP from "../screens/ConfirmOtp";
import Home from "../screens/Home";

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
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
