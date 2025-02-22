import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "../components/UI/Navbar";

export default function Profile() {
  return (
    <View style={{ paddingTop: 50, flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image source={require("../../assets/profile/profile.png")} />
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Hello Neha!</Text>
          <Text style={{ fontSize: 14 }}>Lets Start Your Day</Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <Text style={{ color: "#B3AFAF", fontSize: 14 }}>9</Text>
        <Text style={{ color: "#646363", fontSize: 16 }}>10</Text>
        <Text style={{ color: "#000000", fontSize: 20 }}>11</Text>
        <Text
          style={{
            color: "white",
            fontSize: 15,
            backgroundColor: "black",
            alignSelf: "center",
            paddingVertical: 3,
            paddingHorizontal: 20,
            borderRadius: 22,
          }}
        >
          Tuesday, 12 Nov
        </Text>
        <Text style={{ color: "#000000", fontSize: 20 }}>13</Text>
        <Text style={{ color: "#646363", fontSize: 16 }}>14</Text>
        <Text style={{ color: "#B3AFAF", fontSize: 14 }}>15</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ paddingLeft: 0 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Daily Steps</Text>
          <Text style={{ fontSize: 43, color: "#7372BD" }}>5000</Text>
          <Text style={{ fontSize: 14, color: "#646363" }}>steps</Text>
        </View>
        <View
          style={{
            backgroundColor: "#BFBFBF",
            aspectRatio: 1,
            width: "30%",
            borderRadius: "50%",
          }}
        >
          <View
            style={{
              backgroundColor: "#7372BD",
              aspectRatio: 1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                aspectRatio: 1,
                width: "80%",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>40%</Text>
              <Text style={{ fontSize: 8 }}>From 100%</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginVertical: 20,
        }}
      >
        <View>
          <Image source={require("../../assets/profile/leftrec.png")} />
          <View
            style={{
              position: "absolute",
              paddingLeft: 30,
              paddingTop: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>Last Month</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              1000 steps
            </Text>
          </View>
        </View>
        <View>
          <Image source={require("../../assets/profile/rightrec.png")} />
          <View
            style={{
              position: "absolute",
              paddingLeft: 60,
              paddingTop: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>This Month</Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              5000 steps
            </Text>
          </View>
        </View>
      </View>
      <Text>Statictics</Text>
      <View style={{ gap: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View
            style={{
              backgroundColor: "#F1F2F6",
              paddingVertical: 20,
              paddingHorizontal: 10,
              borderRadius: 13,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                width: 25,
                aspectRatio: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("../../assets/profile/heart.png")} />
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>Heart</Text>
              <Image source={require("../../assets/profile/heartrate.png")} />
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "flex-end", gap: 10 }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>100</Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>BPM</Text>
            </View>
          </View>
          <View style={{ gap: 10 }}>
            <View
              style={{
                backgroundColor: "#F1F2F6",
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderRadius: 13,
              }}
            >
              <View style={{ flexDirection: "row", gap: 80 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  Calerois
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 25,
                    aspectRatio: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../assets/profile/fire.png")} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>800</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Kcal</Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#F1F2F6",
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderRadius: 13,
              }}
            >
              <View style={{ flexDirection: "row", gap: 80 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Water</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 25,
                    aspectRatio: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../assets/profile/drop.png")} />
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>1.9</Text>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>Liters</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: "#F1F2F6",
              paddingVertical: 20,
              paddingHorizontal: 10,
              borderRadius: 13,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    width: 25,
                    aspectRatio: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={require("../../assets/profile/moon.png")} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  SleepTime
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 10,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "bold" }}>7h10m</Text>
                {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>BPM</Text> */}
              </View>
            </View>
          </View>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({});
