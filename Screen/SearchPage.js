import React from "react";
import { Text, View, StyleSheet, StatusBar, TextInput } from "react-native";

const SearchPage = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      {/* <StatusBar /> */}
      <View style={{ marginTop: 24 }}></View>
      <Text style={styles.mainFont}>검색</Text>
      <View style={styles.searchBar}>
        <TextInput
          style={{
            width: 352,
            height: 37,
            flexShrink: 0,
            borderRadius: 34.1,
            borderWidth: 1,
            borderColor: "#F2F2F2",
            backgroundColor: "#F7F6F6",
            paddingLeft: 16,
          }}
          placeholder="원하는 약품이나 헤어제품을 검색하세요"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.extraFont}>최근 검색어</Text>
        <Text style={styles.eraseFont}>지우기</Text>
      </View>
      <View style={styles.searchArea}>
        <View style={styles.box}>
          <Text style={styles.searchFont}>두피샴푸</Text>
        </View>
      </View>
      {/* <Text style={styles.extraFont}>추천 검색어</Text>
      <View style={styles.searchArea}>
        <View style={styles.box}>
          <Text style={styles.searchFont}>두피샴푸</Text>
        </View>
      </View> */}
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  mainFont: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 13,
    color: "#000",
    // fontFamily: 'Pretendard',
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 24,
  },
  searchBar: {
    marginLeft: 20,
    marginBottom: 19,
    width: 320,
    height: 32,
    flexShrink: 0,
    borderRadius: 31,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
  },
  searchFont: {
    color: "#707070",
    // fontFamily: "Pretendard",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 14, // 'normal' 대신 적절한 숫자 값을 사용해야 합니다.
  },
  extraFont: {
    marginLeft: 20,
    marginBottom: 13,
    color: "#545454",
    // fontFamily: "Pretendard",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 16, // 'normal' 대신 적절한 숫자 값을 사용해야 합니다.
  },
  searchArea: {
    flexDirection: "row",
  },
  box: {
    marginLeft: 20,
    marginBottom: 22,
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 31,
    backgroundColor: "#F3F3F3",
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  eraseFont: {
    marginRight: 20,
    color: "#BDBDBD",
    // fontFamily: "Pretendard",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 16,
  },
});
