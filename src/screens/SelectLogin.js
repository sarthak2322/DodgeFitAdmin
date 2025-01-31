import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import topImage from "../../assets/signup.png";
import { useNavigation } from "@react-navigation/native";
import EmailLogin from "./EmailLogin";

export default function SelectLogin() {
  const navigation = useNavigation();
  function goToEmailLogin() {
    navigation.navigate("EmailLogin");
  }

  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.imageCont}>
        <Image source={topImage} style={styles.topImage} />
      </View>

      <View style={styles.headCont}>
        <Text style={styles.whiteHead}>Track Your</Text>
        <Text style={styles.purpleHead}>Fitness</Text>
        <Text style={styles.whiteHead}>Journey</Text>
      </View>

      <View style={styles.buttonCont}>
        <Pressable style={styles.button} onPress={goToEmailLogin}>
          <Text style={styles.text}>Continue With Email</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToEmailLogin}>
          <Text style={styles.text}>Continue With Google</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={goToEmailLogin}>
          <Text style={styles.text}>Continue With Apple</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    backgroundColor: "black",
    flex: 1,
  },
  imageCont: {
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 30,
  },
  topImage: {},
  headCont: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteHead: {
    color: "white",
    fontSize: 50,
  },
  purpleHead: {
    color: "#9089ed",
    fontSize: 50,
  },
  buttonCont: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    width: 300,
    paddingVertical: 10,
    borderRadius: 50,
  },
  text: {
    fontWeight: 500,
  },
});
