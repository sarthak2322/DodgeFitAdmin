import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function EmailLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();

  function navigateNext() {
    navigation.navigate("Mobile");
  }

  return (
    <SafeAreaView style={styles.cont}>
      <KeyboardAvoidingView style={styles.cont}>
        <View style={styles.head}>
          <Text style={styles.headText}>Welcome Back</Text>
          <Text style={styles.headBaseText}>Enter Your Details Below</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={"white"}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={"white"}
          />
          <TouchableOpacity onPress={navigateNext} style={styles.signinButton}>
            <Text style={styles.textSign}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.forgotButton}>
            <Text style={styles.textForgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signin}>
          <Text style={styles.singinText}>sign in</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => {}} style={styles.bottombutton}>
            <Image source={require("../../assets/logos/google.png")} />
            <Text style={styles.bottombuttonText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.bottombutton}>
            <Image source={require("../../assets/logos/facebook.png")} />
            <Text style={styles.bottombuttonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "black",
  },
  head: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headText: {
    color: "white",
    fontSize: 34,
  },
  headBaseText: {
    color: "white",
    fontSize: 15,
  },
  form: {
    flex: 2,
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    paddingLeft: 10,
  },
  signinButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9089ED",
  },
  forgotButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
  },
  textSign: {
    color: "white",
    fontSize: 16,
  },
  textForgot: {
    color: "white",
    fontSize: 16,
  },
  signin: {
    alignItems: "center",
  },
  singinText: {
    color: "white",
    backgroundColor: "black",

    position: "relative",

    width: 100,
    paddingHorizontal: 30,
    paddingVertical: 10,
    top: -20,
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  bottombutton: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 32,
    paddingVertical: 16,
    height: 62,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
  },
  bottombuttonText: {
    color: "white",
    fontSize: 15,
  },
});
