import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Navbar from "../components/UI/Navbar";
import Icon from "react-native-vector-icons/Ionicons";
import IconF from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

export default function Session() {
  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      <ScrollView style={styles.cont}>
        <View style={styles.main}>
          <Image
            source={require("../../assets/homeimages/yoga.png")}
            style={styles.topImage}
          />
          <View style={styles.overlay}>
            <View style={styles.topbutton}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Base");
                }}
                style={{
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: "50%",
                }}
              >
                <Icon name="chevron-back" size={15} color="white" />
              </Pressable>
              <View
                style={{
                  backgroundColor: "black",
                  padding: 10,
                  borderRadius: "50%",
                }}
              >
                <Icon name="settings-outline" size={15} color="white" />
              </View>
            </View>

            {/*  */}
            <View>
              <Text
                style={{
                  color: "white",
                  fontSize: 34,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Strength
              </Text>
              <Text
                style={{ color: "white", fontSize: 30, textAlign: "center" }}
              >
                Trainer Alex
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 40,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon5 name="clock" size={15} color="#8888e9" />
                <Text style={{ color: "white", fontSize: 14 }}>25 min</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Icon6 name="bolt-lightning" size={15} color="#8888e9" />
                <Text style={{ color: "white", fontSize: 14 }}>560 kcal</Text>
              </View>
            </View>
            {/*  */}
          </View>
        </View>

        <View style={{ gap: 15 }}>
          <Text style={{ color: "white" }}>Dynamic Warmup : 6 min</Text>
          <View style={{ gap: 15, backgroundColor: "black" }}>
            <FlatList
              data={[
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Side Streches Left",
                  time: "8X",
                },
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Side Streches Roght",
                  time: "8X",
                },
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Cobra",
                  time: "8X",
                },
              ]}
              keyExtractor={(item) => {
                item.text;
              }}
              renderItem={({ item }) => {
                return (
                  <View style={styles.exItem}>
                    <Image
                      source={item.image}
                      style={{
                        width: 117,
                        height: 96,
                      }}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Text style={{ color: "white" }}>{item.text}</Text>
                      <Text style={{ color: "white" }}>{item.time}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View style={{ gap: 15 }}>
          <Text style={{ color: "white" }}>Interval : 15 min</Text>
          <View style={{ gap: 15, backgroundColor: "black" }}>
            <FlatList
              data={[
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Side Streches Left",
                  time: "8X",
                },
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Side Streches Roght",
                  time: "8X",
                },
                {
                  image: require("../../assets/homeimages/yoga.png"),
                  text: "Cobra",
                  time: "8X",
                },
              ]}
              keyExtractor={(item) => {
                item.text;
              }}
              renderItem={({ item }) => {
                return (
                  <View style={styles.exItem}>
                    <Image
                      source={item.image}
                      style={{
                        width: 117,
                        height: 96,
                      }}
                    />
                    <View style={{ justifyContent: "center" }}>
                      <Text style={{ color: "white" }}>{item.text}</Text>
                      <Text style={{ color: "white" }}>{item.time}</Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          height: 66,
          alignItems: "center",
          gap: 20,
        }}
      >
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: "#8288E8",
            width: 307,
            height: 61,
            marginLeft: 10,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 36,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            Start Workout
          </Text>
        </Pressable>
        <View
          style={{
            padding: 20,
            borderRadius: "50%",
            backgroundColor: "#414339",
          }}
        >
          <Icon6 name="music" size={20} color="white" />
        </View>
        {/* <Navbar /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    // paddingTop: 50,
    backgroundColor: "#1d1d1d",
    gap: 15,
  },
  main: {},
  topImage: {
    width: 412,
    height: 370,
  },
  overlay: {
    position: "absolute",
    justifyContent: "space-between",
    height: 350,
  },
  topbutton: {
    paddingTop: 50,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  exItem: {
    flexDirection: "row",
    gap: 20,
    marginVertical: 5,
  },
});
