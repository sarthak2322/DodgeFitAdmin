import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon5 from "react-native-vector-icons/FontAwesome5";
import Icon6 from "react-native-vector-icons/FontAwesome6";
import Navbar from "../components/UI/Navbar";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = [12, 13, 14, 15, 16, 17, 18];

  const navigation = useNavigation();
  return (
    <View style={styles.cont}>
      {/* <ScrollView style={styles.cont}> */}
      <View style={styles.head}>
        <Text style={{ fontSize: 20 }}>Training Plan</Text>
        <Image source={require("../../assets/homeimages/fire.png")} />
      </View>
      <View style={styles.calender}>
        <View style={styles.days}>
          <FlatList
            data={days}
            numColumns={7}
            keyExtractor={(day) => day}
            renderItem={({ item }) => {
              return (
                <View style={styles.calItem}>
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>

        <View style={styles.dates}>
          <FlatList
            data={dates}
            numColumns={7}
            keyExtractor={(day) => day}
            renderItem={({ item }) => {
              return (
                <View style={styles.calItem}>
                  <Text>{item}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate("Session");
        }}
        style={styles.session}
      >
        <Text style={styles.sessionText}>Todays's Session</Text>
        <Image
          source={require("../../assets/homeimages/yoga.png")}
          style={styles.sessionImage}
        />
        <View style={styles.io}>
          <Pressable
            style={{
              backgroundColor: "#8888e9",
              width: 70,
              borderRadius: 27,
            }}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 14 }}>
              Day 12
            </Text>
          </Pressable>

          <View>
            <Text style={{ color: "white", fontSize: 14 }}>Strength</Text>
            <Text style={{ color: "white", fontSize: 14 }}>Trainer Alex</Text>
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
            <View
              style={{
                backgroundColor: "#8888e9",
                padding: 10,
                borderRadius: "50%",
              }}
            >
              <Icon5 name="play" size={15} color="#ffff" />
            </View>
          </View>
        </View>
      </Pressable>

      <View style={styles.session}>
        <Text style={styles.sessionText}>Categories</Text>
        <FlatList
          data={[
            {
              text: "cardio",
              image: require("../../assets/homeimages/cardio.png"),
              color: "black",
            },
            {
              text: "yoga",
              image: require("../../assets/homeimages/yoga2.png"),
              color: "white",
            },
            {
              text: "boxing",
              image: require("../../assets/homeimages/boxing.png"),
              color: "white",
            },
          ]}
          keyExtractor={(item) => item.text}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.catCard}>
                <Image source={item.image} style={styles.catImage} />
                <Text style={[styles.catText, { color: item.color }]}>
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.session}>
        <Text style={styles.sessionText}>Categories</Text>
        <FlatList
          data={[
            {
              text: "cardio",
              image: require("../../assets/homeimages/cat1.png"),
              color: "white",
            },
            {
              text: "yoga",
              image: require("../../assets/homeimages/cat2.png"),
              color: "white",
            },
          ]}
          keyExtractor={(item) => item.text}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <View style={styles.catCard}>
                <Image source={item.image} style={styles.catImage} />
                <Text style={[styles.catText, { color: item.color }]}>
                  {item.text}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#8288E8",
          width: "100%",
          height: 66,
        }}
      >
        <Navbar />
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    paddingTop: 50,
    gap: 40,
  },
  head: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  calender: {
    width: "100%",
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  days: {
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 10,
    width: "100%",
    paddingHorizontal: 5,
  },
  dates: {
    paddingHorizontal: 5,
  },
  calItem: {
    width: `${100 / 7}%`,
  },
  session: {
    alignItems: "center",
  },
  sessionText: {
    alignSelf: "flex-start",
    paddingLeft: 20,
    fontSize: 20,
    paddingBottom: 10,
  },
  sessionImage: {
    width: 365,
    height: 184,
    objectFit: "cover",
    borderRadius: 13,
  },
  io: {
    width: 365,
    height: 160,
    position: "absolute",
    top: 50,
    paddingLeft: 20,
    justifyContent: "space-between",
  },
  catCard: {},
  catImage: {
    marginHorizontal: 20,
  },
  catText: {
    position: "absolute",
    marginLeft: 30,
    fontSize: 14,
  },
});
