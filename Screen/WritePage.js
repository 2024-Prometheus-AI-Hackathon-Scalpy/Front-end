import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { monthData } from "./monthData.json";
// import { monthData } from "monthData.json";

const WritePage = () => {
  const monthlyData = monthData;
  //   monthlyData = data.data;

  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <Text
        style={{
          marginTop: 24,
          marginLeft: 21,
          fontSize: 20,
          fontWeight: "bold",
          marginLeft: 10,
          marginBottom: 66,
        }}
      >
        기록
      </Text>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row", marginBottom: 88 }}>
          <View style={styles.line}></View>
          <Text>양호</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 88 }}>
          <View style={styles.line}></View>
          <Text>관리 필요</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 88 }}>
          <View style={styles.line}></View>
          <Text>치료 필요</Text>
        </View>
      </View>
      <ScrollView horizontal={true}>
        {monthlyData.map((data, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedMonth(data.month)}
          >
            <View style={styles.month}>
              <Text>{data.month + "월"}</Text>{" "}
              {/* 숫자를 문자열로 변환합니다 */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedMonth === "1월" && <View style={styles.selectedTri}></View>}
    </View>
  );
};

export default WritePage;

const styles = StyleSheet.create({
  month: {
    margin: 15,
    paddingVertical: 6.674,
    paddingHorizontal: 16.684,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20.021,
    borderWidth: 1.5,
    borderColor: "#CFCCCC",
    backgroundColor: "#F8F8F8",
  },
  line: {
    width: 314,
    height: 2,
    backgroundColor: "#E7E7E7",
    marginRight: 10,
  },
  selectedTri: {
    position: "absolute",
    height: 30,
    width: 5,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    top: 50,
    left: 50,
    marginLeft: 50,
  },
});
