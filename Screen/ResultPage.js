import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import arrow from "../assets/arrow.png";
import scalp from "../assets/scalp.png";
import oil from "../assets/oil.png";
import noil from "../assets/noil.png";
import talmo from "../assets/talmo.png";
import point from "../assets/point.png";
import info from "../assets/info.png";

const ResultPage = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "#FCFCFF" }}>
      {/* 상단부 */}
      <View
        style={{
          width: 393,
          height: 618,
          flexShrink: 0,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          backgroundColor: "#FFF",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.05,
          shadowRadius: 9,
          elevation: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginTop: 32,
            marginLeft: 12.1,
            marginBottom: 12,
          }}
        >
          <Image source={arrow} style={styles.arrImg} />
          <Text
            style={{
              color: "#000",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: "600",
              // lineHeight: "normal",
              marginLeft: 106.7,
            }}
          >
            두피 분석 결과
          </Text>
        </View>
        <Text
          style={{
            color: "#5C5C5C",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "500",
            marginLeft: 275,
            marginBottom: 6.96,
          }}
        >
          2024.1.12 분석 결과
        </Text>
        <Image
          source={scalp}
          style={{ width: 351, height: 258, marginLeft: 21 }}
        />
        <Text style={styles.cate}>두피 상태</Text>
        <Text style={styles.state}>관리 필요성</Text>
        <View
          style={{
            width: 351,
            height: 24,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "#F0F0F0",
            backgroundColor: "#E1E1E1",
            marginLeft: 19,
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              color: "#262626",
              fontSize: 11,
              fontStyle: "normal",
              fontWeight: "500",
              paddingLeft: 8,
            }}
          >
            10종 질병의 평균 중증도에 따라 “양호", “관리 필요", “치료 필요" 로
            구분돼요.
          </Text>
        </View>
        <Text style={styles.cate}>두피 타입</Text>
        <Text style={styles.state}>지성 두피</Text>
        {/* <View style={styles.top}><View styles={styles.nemo}></View></View> */}

        {/* <View style={{ width: 393, height: , flexShrink: 0 }}></View> */}
      </View>
      {/* 하단부 */}
      <View style={{ flexDirection: "row", marginTop: 31.66, marginLeft: 83 }}>
        <Text style={styles.selected}>두피 진단</Text>
        <Text style={[styles.nonSelected, { marginLeft: 121 }]}>솔루션</Text>
      </View>
      <View>
        {/* 탈모 */}
        <View style={{ flexDirection: "row" }}>
          <Image source={talmo} style={styles.expImg} />
          <Text style={styles.expNot}>탈모</Text>
        </View>
        {/* 원형 탈모 */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.disease}>원형 탈모</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 여성형 탈모 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>여성형 탈모</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 남성형 탈모 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>남성형 탈모</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 탈모끝  */}
        <View style={styles.line}></View>
        {/* 지성 두피 */}
        <View style={{ flexDirection: "row" }}>
          <Image source={oil} style={styles.expImg} />
          <Text style={styles.expNot}>지성 두피</Text>
        </View>
        {/* 지루성 두피염 */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.disease}>지루성 두피염</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 모낭염 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>모낭염</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 지성두피 끝 */}
        <View style={styles.line}></View>
        {/* 건성부피 */}
        <View style={{ flexDirection: "row" }}>
          <Image source={noil} style={styles.expImg} />
          <Text style={styles.expNot}>건성 두피</Text>
        </View>
        {/* 건선 */}
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.disease}>건선</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 편평태선 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>편평태선</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 두피백선 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>두피백선</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>

        {/* 머릿니 */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 59 }}>
            <Text style={styles.disease}>머릿니</Text>
            <Image source={info} style={styles.infoImg} />
          </View>
          <View style={styles.diagram}>
            <View style={styles.caution}></View>
            <View style={styles.little}></View>
            <View style={styles.percent}></View>
          </View>
        </View>
        {/* 증상없음 경증 주의 */}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.degree, { marginLeft: 26 }]}>증상없음</Text>
          <Text style={[styles.degree, { marginLeft: 63 }]}>경증</Text>
          <Text style={[styles.degree, { marginLeft: 77 }]}>주의</Text>
          <Text style={[styles.degree, { marginLeft: 80 }]}>중증</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResultPage;

const styles = StyleSheet.create({
  line: {
    backgroundColor: "#C6C6C6",
    width: 349.333,
    height: 0.54,
    marginTop: 40,
    marginLeft: 19.65,
  },
  degree: {
    marginTop: 14,
    color: "#272727",
    fontSize: 12.008,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 14,
  },
  little: {
    position: "absolute",
    left: 0,
    width: 98,
    height: 9,
    borderTopLeftRadius: 29.937,
    borderBottomLeftRadius: 29.937,
    borderWidth: 1.111,
    borderColor: "#EEEEED",
    backgroundColor: "#F5F5F5",
  },
  caution: {
    width: 192,
    height: 9,
    backgroundColor: "#EAEAEA",
  },
  percent: {
    // position: "absolute",
    // left: 0,
    // width: 221.037,
    // height: 8.798,
    // flexShrink: 0,
    // borderRadius: 3.84891,
    // backgroundColor: "#F7EE97",
    // borderWidth: 1.09969,
    // borderColor: "#F2E780",
  },
  infoImg: {
    width: 18,
    height: 18,
  },
  disease: {
    color: "#1F1F1F",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "600",
    marginLeft: 20,
    marginRight: 6,
    marginBottom: 60,
  },
  expNot: {
    color: "#1C1C1C",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "600",
    marginTop: 33,
    marginLeft: 8,
    marginBottom: 28,
  },
  expImg: {
    width: 24,
    height: 24,
    marginTop: 33,
    marginLeft: 19,
    marginBottom: 28,
  },
  selected: {
    color: "#2360FC",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  nonSelected: {
    color: "#000",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
  },
  cate: {
    color: "#737373",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "500",
    marginLeft: 19,
    marginTop: 5,
    marginBottom: 5,
  },
  state: {
    color: "#000",
    fontSize: 22,
    fontStyle: "normal",
    fontWeight: "700",
    marginLeft: 21,
    marginBottom: 10,
  },
  arrImg: {
    width: 26.2,
    height: 26.2,
  },
  top: {
    width: 360,
    height: 439,
    flexDirection: "row",
    backgroundColor: "#FFF",
    elevation: 3,
    marginLeft: 19.02,
  },
  resultArea: {
    width: 104,
    height: 48,
    borderRadius: 32.14,
    backgroundColor: "#FDFDFD",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  mainExpText: {
    color: "#000",
    // fontFamily: "Pretendard",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 21,
  },
  nemo: {
    width: 330,
    height: 183,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  diagram: {
    width: 320,
    height: 10.774,
    borderRadius: 26.936,
    backgroundColor: "#D9D9D9",
    flexDirection: "row",
    position: "relative",
    marginLeft: 48,
  },
  diaStart: {
    width: 8.62,
    height: 8.62,
    backgroundColor: "#F7F7F7",
    justifyContent: "flex-start",
    position: "absolute",
    left: 0,
  },
  diaEnd: {
    width: 8.62,
    height: 8.62,
    backgroundColor: "#F7F7F7",
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
  },
});
