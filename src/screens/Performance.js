import {
  FlatList,
  FlatListComponent,
  Image,
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Navbar from "../components/UI/Navbar";

import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Performance() {
  const topList = ["Workout", "Fitness", "Strength", "Training"];
  return (
    <SafeAreaView style={styles.cont}>
      <ScrollView style={styles.cont}>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <FlatList
            data={topList}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    backgroundColor: "black",
                    marginHorizontal: 10,
                    height: 37,
                    width: 106,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>{item}</Text>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              borderRightWidth: 1,
              width: (windowWidth - 30) / 3,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Icon name="filter" size={16} />
            <Text style={{ fontWeight: "bold" }}>Filter</Text>
          </View>
          <View
            style={{
              borderRightWidth: 1,
              width: (windowWidth - 30) / 3,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Icon name="bars" size={16} />
            <Text style={{ fontWeight: "bold" }}>Sorting</Text>
          </View>
          <View
            style={{
              width: (windowWidth - 30) / 3,
              gap: 10,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon name="search" size={16} />
            <Text style={{ fontWeight: "bold" }}>Search</Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#EFEFEF",
            marginHorizontal: 50,
            marginVertical: 40,
            borderRadius: 14,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 30,
            }}
          >
            <View style={{ width: windowWidth / 2.7 }}>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Scan Me</Text>
              <Text style={{ fontSize: 14 }}>
                Scan the QR code to book your online classes
              </Text>
            </View>
            <Image
              source={require("../../assets/performance/qr.png")}
              style={{
                width: windowHeight / 8,
                aspectRatio: 1,
                position: "relative",
                top: 50,
                zIndex: 2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "black",
              height: 60,
              borderBottomRightRadius: 14,
              borderBottomStartRadius: 14,
            }}
          ></View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 10,
          }}
        >
          <FlatList
            data={[
              {
                id: 1,
                text: "Total Body Strength",
                time: "45 min",
                image: require("../../assets/performance/yoga.png"),
              },
              {
                id: 2,
                text: "Total Body Strength",
                time: "45 min",
                image: require("../../assets/performance/yoga2.png"),
              },
              {
                id: 3,
                text: "Total Body Strength",
                time: "45 min",
                image: require("../../assets/performance/yoga3.png"),
              },
              {
                id: 4,
                text: "Total Body Strength",
                time: "45 min",
                image: require("../../assets/performance/cardio.png"),
              },
            ]}
            keyExtractor={(item) => {
              return item.id;
            }}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    borderRadius: 14,
                    marginHorizontal: (windowWidth - 264) / 20,
                    marginVertical: 5,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: 182,
                      height: 217,
                      objectFit: "fill",
                      borderBottomRightRadius: 14,

                      borderBottomLeftRadius: 14,
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "black",
                      position: "absolute",
                      width: 182,
                      height: 86,
                      bottom: 0,
                      justifyContent: "center",
                      paddingLeft: 20,
                      borderBottomRightRadius: 14,

                      borderBottomLeftRadius: 14,
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.text}</Text>
                    <Text
                      style={{ color: "white", paddingLeft: 22, paddingTop: 5 }}
                    >
                      {item.time}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{ height: 150 }}></View>
      </ScrollView>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "white",
    paddingTop: 25,
    flex: 1,
  },
});
