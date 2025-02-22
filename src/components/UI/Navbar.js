import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
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
        <FoundationIcon name="home" size={37} color="black" />
        <Text style={styles.navText}>Home</Text>
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Performance");
        }}
      >
        <FoundationIcon name="graph-bar" size={37} color="black" />
        <Text style={styles.navText}>Performance</Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Classes");
        }}
      >
        {/* <FontAwesome6 name="user-doctor" size={37} color="black" /> */}
        <Image
          source={require("../../../assets/homeimages/clasesicon.png")}
          style={{ width: 37, height: 37 }}
        />
        <Text style={styles.navText}>Classes</Text>
      </Pressable>
      <Pressable
        style={styles.navItem}
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Icon name="user" size={37} color="black" />
        <Text style={styles.navText}>Profile</Text>
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
  },
  centerNav: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    position: "relative",
    top: -40,
    borderRadius: "50%",
    overflow: "visible",
    width: "25%",
    aspectRatio: 1,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
  },
  centerNavItem: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // top: -15,
  },
  navItem: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "15%",
    height: 60,
  },
  navText: {
    fontSize: 10,
  },
  centerNavText: {
    fontSize: 12,
  },
});
