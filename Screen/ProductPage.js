import React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import arrow from "../assets/arrow.png";
import prd from "../assets/prd.png";

const ProdectPage = () => {
  return (
    <View>
      {/* <StatusBar /> */}
      <Image source={arrow} style={styles.arrImg} />
      <Image source={prd} style={styles.prdImg} />
      <View>
        <Text style={styles.comText}>라우시</Text>
        <Text style={styles.prdText}>스위스 허벌 헤어 토닉</Text>
      </View>
      <View style={styles.line}></View>

      <View>
        <Text>성분</Text>
        <Text>리뷰</Text>
      </View>
    </View>
  );
};

export default ProdectPage;

const styles = StyleSheet.create({
  main: {},
  arrImg: {
    width: 24,
    height: 24,
  },
  prdImg: {
    width: 327,
    height: 327,
    // flexShrink: 0,
    // borderTopLeftRadius: 1.919,
    // borderTopRightRadius: 1.919,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0,
    // backgroundColor: "lightgray",
    // resizeMode: "cover",
  },
  comText: {
    color: "#9B9393",
    // fontFamily: "Pretendard",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 17, // 'normal' 대신 적절한 숫자 값을 사용해야 합니다.
  },
  prdText: {
    color: "#000",
    // fontFamily: "Pretendard",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 23, // 'normal' 대신 적절한 숫자 값을 사용해야 합니다.
  },
  line: {
    width: 360,
    height: 4,
    backgroundColor: "#EAE9E9",
  },
});
