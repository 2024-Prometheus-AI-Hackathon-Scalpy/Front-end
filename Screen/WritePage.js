import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

const WritePage = () => {
  const monthlyData = [
    {
      month: "1월",
    },
    {
      month: "2월",
    },
    {
      month: "3월",
    },
    {
      month: "4월",
    },
    {
      month: "5월",
    },
    {
      month: "6월",
    },
    {
      month: "7월",
    },
    {
      month: "8월",
    },
    {
      month: "9월",
    },
    {
      month: "10월",
    },
    {
      month: "11월",
    },
    {
      month: "12월",
    },
  ];

  return (
    <View>
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
            onPress={() => alert(`선택한 월: ${data.month}`)}
          >
            <View style={styles.month}>
              <Text>{data.month}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
});
