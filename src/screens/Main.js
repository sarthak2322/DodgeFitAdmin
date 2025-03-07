import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import backgroundImage from "../../assets/home.png";

export default function Main() {
  const navigation = useNavigation();

  function gotToSelect() {
    navigation.navigate("SelectLogin");
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={styles.mainText}>
        <Text style={styles.headOne}>YoursFit</Text>
        <Text style={styles.headTwo}>This App will help you to</Text>
        <Text style={styles.headTwo}>stay fit</Text>
      </View>
      <Pressable style={styles.bottomButton} onPress={gotToSelect}>
        <Text style={styles.bottomText}>Get Started -{">"}</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: { flex: 1, alignItems: "flex-end", justifyContent: "center" },
  headOne: {
    fontSize: 60,
    fontWeight: 500,
    paddingRight: 10,
    marginRight: '12',
    textShadowColor: "white", 
    textShadowOffset: { width: -1, height: 1 }, 
    textShadowRadius: 2, 
  },
  headTwo: {
    fontWeight: 500,
    paddingRight: 10,
    fontWeight: 'bold',
    marginRight: '12'
  },
  bottomButton: {
    alignItems: "center",
  },
  bottomText: {
    color: "white",
    paddingBottom: 10,
    fontWeight: 'bold',
    marginBottom: '16'
  },
});
