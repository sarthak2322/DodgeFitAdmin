import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Base");
        }}
      >
        <Image
          source={require("../../../assets/homeimages/home.png")}
          style={{ width: 25, height: 25 }}
        />
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Performance");
        }}
      >
        <Image
          source={require("../../../assets/homeimages/performance.png")}
          style={{ width: 25, height: 25 }}
        />
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Classes");
        }}
      >
        <Image
          source={require("../../../assets/homeimages/classicon.png")}
          style={{ width: 25, height: 25 }}
        />
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image
          source={require("../../../assets/homeimages/user.png")}
          style={{ width: 25, height: 25 }}
        />
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("More");
        }}
      >
        <Image
          source={require("../../../assets/homeimages/more.png")}
          style={{ width: 25, height: 25 }}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopEndRadius: 36,
    borderTopLeftRadius: 36,
    width: "100%",
    backgroundColor: "#66c9de",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: 60, // 
  },
});
