import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import close from "../assets/close.png";

const ProductModal = ({ modalVisible, setModalVisible, navigation }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Image
                source={close}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft: 270,
                  marginTop: 15,
                }}
              />
            </TouchableOpacity>
            <Text style={styles.comText}>아로마티카</Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.prodText}>로즈마리 스칼프</Text>
              <Text style={styles.prodText}>스케일링 샴푸</Text>
              <Text style={styles.modalText}>를</Text>
            </View>
            <Text style={styles.periodText}>2024.12.01 ~ 2024.12.22</Text>
            <Text style={styles.modalText}>동안 사용했어요!</Text>
            <TouchableOpacity
              style={styles.GoDocu}
              onPress={() => navigation.navigate("CameraPage")}
            >
              <Text style={styles.buttonText}>기록 보러가기</Text>
            </TouchableOpacity>
            <View style={styles.highlight}></View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  highlight: {
    color: "#DFCB09",
    textAlign: "center",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25.488,
    width: 216,
    height: 26,
  },
  GoDocu: {
    width: 159,
    height: 42,
    borderRadius: 85.714,
    borderWidth: 1.7,
    borderColor: "#265DE8",
    backgroundColor: "#3A72FF",
    marginLeft: 74,
    marginTop: 48,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 308,
    height: 326,
    borderRadius: 10,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {},

  modalText: {
    color: "#5A5A5A",
    textAlign: "center",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  comText: {
    marginTop: 38,
    marginBottom: 7,
    color: "#808080",

    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  prodText: {
    color: "#151515",
    textAlign: "center",
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 24,
    marginBottom: 14,
  },
  periodText: {
    color: "#DFCB09",
    textAlign: "center",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25.488,
    marginBottom: 10,
  },
});

export default ProductModal;
