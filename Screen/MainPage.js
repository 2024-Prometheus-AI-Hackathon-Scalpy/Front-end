import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
  StatusBar,
} from "react-native";
import mainLogo from "../assets/mainLogo.png";
import jangsik1 from "../assets/jangsik1.png";
import jangsik2 from "../assets/jangsik2.png";
import camera from "../assets/camera.png";
import { LinearGradient } from "expo-linear-gradient";
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeMorphology,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
  Rect,
} from "react-native-svg";

import ProductModal from "./ProductModal";
import InputModal from "./InputModal";

const MainPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputVisible, setInputVisible] = useState(false);
  return (
    <ScrollView>
      {/* 상단 */}
      <LinearGradient
        style={styles.top}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 1.0 }}
        colors={["rgba(32, 77, 193, 0.89)", "rgba(35, 96, 252, 0.86)"]}
      >
        <View style={{ marginTop: 24 }}></View>
        <Image source={mainLogo} style={styles.logo} />
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 7,
            color: "#07173F",
            fontSize: 18,
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 22,
          }}
        >
          반가워요 은서님!
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 21,
            color: "#FFF",
            fontSize: 21,
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 25,
          }}
        >
          두피 상태를 확인해보세요!
        </Text>
        {/* <Image source={jangsik1} style={styles.js1} />
        <Image source={jangsik2} style={styles.js2} />
        <View style={styles.scanArea}>
          <Text
            style={{
              color: "#000",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: 18,
              marginRight: 8.09,
            }}
          >
            오늘의 두피 스캔하기
          </Text>
          <View style={styles.backScan}>
            <Image source={camera} style={styles.cameraImg} />
          </View>
        </View> */}
        <View style={{ position: "relative" }}>
          <Image source={jangsik1} style={[styles.js1, { zIndex: 10 }]} />
          <Image source={jangsik2} style={[styles.js2, { zIndex: 10 }]} />
          <TouchableOpacity
            style={[styles.scanArea, { zIndex: 20 }]}
            onPress={() => navigation.navigate("CameraPage")}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: 18,
                marginRight: 8.09,
              }}
            >
              오늘의 두피 스캔하기
            </Text>
            <View style={styles.backScan}>
              <Image source={camera} style={styles.cameraImg} />
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* 두피 상태 */}
      <View style={styles.scalpArea}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 28,
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.mainExpText}>내 두피 상태</Text>
          <Text style={styles.expText}>자세히 보러가기 ></Text>
        </View>
        <View style={styles.nemo}></View>
        <View>
          <Text style={styles.grayText}>두피 타입</Text>
          <Text style={[styles.mainExpText, { marginBottom: 28 }]}>
            민감성 두피
          </Text>
        </View>
        <View>
          <Text style={styles.grayText}>진단 결과</Text>
          <Text style={[styles.mainExpText, { marginBottom: 21.55 }]}>
            접촉성 두피염
          </Text>
        </View>
        <View style={styles.diagram}>
          <View style={styles.percent}></View>
          {/* <View style={styles.diaStart}></View>
          <View style={styles.diaEnd}></View> */}
        </View>
      </View>

      <View style={styles.prodArea}>
        {/* 제품 관련 */}
        <Text style={[styles.mainExpText, { marginTop: 30, marginBottom: 16 }]}>
          사용 제품
        </Text>
        <ScrollView horizontal style={styles.manyProd}>
          <View style={{ marginLeft: 20 }}></View>
          {/* 각 상풍 정보 */}
          <TouchableOpacity
            style={styles.aProd}
            onPress={() => setModalVisible(true)}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* 제품 삭제 */}
              <View style={{ width: "30%" }}>
                <Svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                  <Circle cx="8.5498" cy="8.8999" r="8.25" fill="#F9F5C9" />
                  <Path
                    d="M3 9H14"
                    stroke="#D1BE09"
                    strokeWidth="1.34063"
                    strokeLinecap="round"
                  />
                </Svg>
              </View>
              {/* 사용한 기간 */}
              <View style={[styles.period]}>
                <Text>D-25</Text>
              </View>
            </View>

            <Text
              style={{
                color: "#535353",
                fontSize: 11,
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: 14,
                marginTop: 22.55,
              }}
            >
              아로마티카
            </Text>
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: 18,
              }}
            >
              로즈마리 스칼프 스케
            </Text>
          </TouchableOpacity>
          <ProductModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          {/* 새상품 추가 */}
          <TouchableOpacity onPress={() => setInputVisible(true)}>
            <Svg width="167" height="97" viewBox="0 0 167 97" fill="none">
              <Rect width="166.1" height="96.8" rx="8.8" fill="#EEEEEE" />
              <Rect
                x="0.75"
                y="0.75"
                width="164.6"
                height="95.3"
                rx="8.05"
                stroke="#D5D5D5"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <Circle cx="83.25" cy="48.75" r="11.75" fill="#FAFAFA" />
              <Path
                d="M77.1973 48.394H88.9473"
                stroke="#C6C6C6"
                strokeWidth="1.90937"
                strokeLinecap="round"
              />
              <Path
                d="M83.0723 42.519L83.0723 54.269"
                stroke="#C6C6C6"
                strokeWidth="1.90937"
                strokeLinecap="round"
              />
            </Svg>
          </TouchableOpacity>
          <InputModal
            inputVisible={inputVisible}
            setInputVisible={setInputVisible}
          />
        </ScrollView>
        {/* 약품 관련 */}
        <Text style={[styles.mainExpText, { marginTop: 30, marginBottom: 16 }]}>
          복용 약품
        </Text>
        <ScrollView horizontal style={styles.manyProd}>
          <View style={{ marginLeft: 20 }}></View>
          <View style={styles.aProd}></View>
          <View style={styles.aProd}></View>
          {/* 새상품 추가 */}
          <Svg width="167" height="97" viewBox="0 0 167 97" fill="none">
            <Rect width="166.1" height="96.8" rx="8.8" fill="#EEEEEE" />
            <Rect
              x="0.75"
              y="0.75"
              width="164.6"
              height="95.3"
              rx="8.05"
              stroke="#D5D5D5"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            <Circle cx="83.25" cy="48.75" r="11.75" fill="#FAFAFA" />
            <Path
              d="M77.1973 48.394H88.9473"
              stroke="#C6C6C6"
              strokeWidth="1.90937"
              strokeLinecap="round"
            />
            <Path
              d="M83.0723 42.519L83.0723 54.269"
              stroke="#C6C6C6"
              strokeWidth="1.90937"
              strokeLinecap="round"
            />
          </Svg>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  js1: {
    width: 103.972,
    height: 34,
    marginLeft: 300,
  },
  js2: {
    width: 112.81,
    height: 112.81,
    marginLeft: 300.9,
  },
  period: {
    width: 47.3,
    height: 19.8,
    paddingVertical: 0.22,
    paddingHorizontal: 0.66,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24.461,
    backgroundColor: "#EFF4FF",
    marginLeft: 61,
  },
  grayText: {
    marginLeft: 20,
    marginBottom: 5,
    color: "#8D8D8D",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 17,
  },
  top: {
    width: 393,
    height: 317,
  },
  logo: {
    width: 72.956,
    height: 20.536,
    marginLeft: 20,
    marginTop: 29,
    marginBottom: 27,
  },
  scanArea: {
    marginTop: -90,
    width: 184,
    height: 43,
    borderRadius: 32.14,
    backgroundColor: "#FDFDFD",
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 189,
    // zIndex: 50,
  },
  scalpArea: {
    // zIndex: 20,
    position: "realative",
    marginTop: -20,
    width: 393,
    height: 485,
    flexShrink: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#FFF",
    elevation: 2,
  },
  cameraImg: {
    width: 20.776,
    height: 20.776,
  },
  backScan: {
    width: 36.392,
    height: 36.392,
    borderRadius: 25.474,
    backgroundColor: "#B1C7FF",
    justifyContent: "center",
    paddingLeft: 6.91,
  },
  mainExpText: {
    marginLeft: 20,
    color: "#000",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 21,
  },
  expText: {
    marginRight: 20,
    color: "#DFCB09",
    textAlign: "right",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 15,
  },
  nemo: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 20,
    width: 353,
    height: 207,
    borderRadius: 10,
    backgroundColor: "#E6E6E6",
  },
  diagram: {
    marginLeft: 20,
    flexDirection: "row",
    position: "relative",

    width: 312.312,
    height: 8.798,
    borderRadius: 29.621,
    backgroundColor: "#E0DFDF",
  },
  percent: {
    width: 221.037,
    height: 8.798,
    flexShrink: 0,
    borderRadius: 3.84891,
    backgroundColor: "#F7EE97",
    borderWidth: 1.09969,
    borderColor: "#F2E780",
  },
  prodArea: {
    width: 393,
    height: 395,
    backgroundColor: "rgba(236, 236, 236, 0.60)",
  },
  manyProd: {
    flexDirection: "row",
  },
  aProd: {
    marginRight: 7.9,
    display: "flex",
    width: 166.1,
    height: 96.8,
    paddingVertical: 11,
    paddingHorizontal: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    flexShrink: 0,
    borderRadius: 11.39,
    backgroundColor: "#FFF",
    elevation: 3,
  },
});
