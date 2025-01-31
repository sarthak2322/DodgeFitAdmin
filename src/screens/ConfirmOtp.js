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

export default function ConfirmOTP() {
  const [otp1, setOtp1] = useState();
  const [otp2, setOtp2] = useState();
  const [otp3, setOtp3] = useState();
  const [otp4, setOtp4] = useState();

  const navigation = useNavigation();

  function navigateNext() {
    navigation.navigate("Base");
  }

  return (
    <SafeAreaView style={styles.cont}>
      <KeyboardAvoidingView style={styles.cont}>
        <View style={styles.head}>
          <Text style={styles.headText}>Enter OTP</Text>
          <Text style={styles.headBaseText}>Fill the OTP</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.otpForm}>
            <TextInput
              style={styles.input}
              onChangeText={setOtp1}
              value={otp1}
              maxLength={1}
            />

            <TextInput
              style={styles.input}
              onChangeText={setOtp2}
              value={otp2}
              maxLength={1}
            />

            <TextInput
              style={styles.input}
              onChangeText={setOtp3}
              value={otp3}
              maxLength={1}
            />

            <TextInput
              style={styles.input}
              onChangeText={setOtp4}
              value={otp4}
              maxLength={1}
            />
          </View>

          <View style={styles.resend}>
            <Text style={styles.textForgot}>Didn't get the code?</Text>
            <TouchableOpacity
              onPress={navigateNext}
              style={styles.signinButton}
            >
              <Text style={styles.textSign}>Resend</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity onPress={navigateNext} style={styles.NextButton}>
            <Text style={styles.textSign}>Resend</Text>
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
    paddingHorizontal: 20,
    gap: 20,
  },
  otpForm: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    height: 40,
    width: 40,
    alignItems: "center",
    textAlign: "center",
  },
  signinButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9089ED",
  },
  resend: {
    flex: 1,
    alignItems: "center",
    gap: 20,
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
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  NextButton: {
    height: 50,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9089ED",
  },
});
