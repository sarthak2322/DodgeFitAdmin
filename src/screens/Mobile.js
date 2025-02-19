import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Mobile() {
  const [countryCode, setCountryCode] = useState("India (+91)");
  const [number, setNumber] = useState();

  const [check1, setCheck1] = useState();
  const [check2, setCheck2] = useState();

  const navigation = useNavigation();

  function navigateNext() {
    navigation.navigate("OTP");
  }

  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.cont}>
        {/* <KeyboardAvoidingView style={styles.cont}> */}
        <View style={styles.head}>
          <Text style={styles.headText}>Your Phone Number</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            // onChangeText={setCountryCode}
            value={countryCode}
          />
          <TextInput
            style={styles.input}
            onChangeText={setNumber}
            value={number}
            keyboardType="numeric"
            placeholder="Phone Number"
            placeholderTextColor={"white"}
          />

          <Pressable
            style={styles.agree}
            onPress={() => {
              setCheck1((prev) => !prev);
            }}
          >
            <Text style={styles.agreeText}>
              Lorem bnm bccnnmcjjioiokdls nndjdkkd,cc,v
              nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            </Text>
            <View style={check1 ? styles.agreeCheck : styles.notChecked}></View>
          </Pressable>
          <Pressable
            onPress={() => {
              setCheck2((prev) => !prev);
            }}
            style={styles.agree}
          >
            <Text style={styles.agreeText}>
              Lorem bnm bccnnmcjjioiokdls nndjdkkd,cc,v
              nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            </Text>
            <View style={check2 ? styles.agreeCheck : styles.notChecked}></View>
          </Pressable>
        </View>
        <View style={styles.signin}>
          <Text style={styles.singinText}>sign in</Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={navigateNext} style={styles.signinButton}>
            <Text style={styles.textSign}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    paddingHorizontal: 30,
    gap: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    paddingLeft: 10,
  },
  signinButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9089ED",
    height: 50,
  },

  textSign: {
    color: "white",
    fontSize: 16,
  },

  agree: {
    flexDirection: "row",
    paddingRight: 20,
  },

  agreeText: {
    color: "white",
    paddingRight: 10,
  },

  agreeCheck: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    width: 20,
    height: 20,
    backgroundColor: "#9089ED",
  },
  notChecked: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 2,
    width: 20,
    height: 20,
  },

  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
