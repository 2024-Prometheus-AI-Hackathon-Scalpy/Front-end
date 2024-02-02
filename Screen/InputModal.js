import React, { useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import close from "../assets/close.png";

const InputModal = ({ inputVisible, setInputVisible, navigation }) => {
  // { modalVisible, setModalVisible, navigation }) => {
  const [productCompany, setProductCompany] = useState("");
  const [productName, setProductName] = useState("");

  const handleSave = () => {
    // setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={inputVisible}
        onRequestClose={() => {
          setInputVisible(!inputVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setInputVisible(!inputVisible);
              }}
            >
              <Image
                source={close}
                style={{
                  width: 24,
                  height: 24,
                  marginLeft: 270,
                  marginTop: 35,
                }}
              />
            </TouchableOpacity>
            {/* 상단 설명 */}
            <View
              style={{
                marginLeft: 84.96,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.expBold}>사용 중인 제품</Text>
                <Text style={styles.expText}>을</Text>
              </View>
              <Text style={[styles.expText2]}>입력해주세요!</Text>
            </View>

            <Text style={styles.smallText}>제품사</Text>
            <TextInput
              style={styles.input}
              onChangeText={setProductCompany}
              value={productCompany}
            />
            <Text style={styles.smallText}>제품명</Text>
            <TextInput
              style={styles.input}
              onChangeText={setProductName}
              value={productName}
            />
            <TouchableHighlight style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>저장하기</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  smallText: {
    color: "#000",
    // textAlign: "center",
    // fontFamily: "Pretendard",
    marginLeft: 36,
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 19,
    // marginBottom: 31,
  },
  expText: {
    color: "#595959",
    // fontFamily: "Pretendard",
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  expText2: {
    color: "#595959",
    // fontFamily: "Pretendard",
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
    marginLeft: 11,
    marginTop: 5,
    marginBottom: 30,
  },
  expBold: {
    color: "#000",
    textAlign: "center",
    // fontFamily: "Pretendard",
    fontSize: 21,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 308,
    height: 355,
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
  button: {
    width: 159,
    height: 42,
    borderRadius: 85.714,
    borderWidth: 1.7,
    borderColor: "#265DE8",
    backgroundColor: "#3A72FF",
    justifyContent: "center",
    marginLeft: 75,
    marginBottom: 5,
  },
  buttonText: {
    color: "#FFF",
    textAlign: "center",
    // fontFamily: "Pretendard",
    fontSize: 17,
    fontStyle: "normal",
    fontWeight: "600",
    justifyContent: "center",
    lineHeight: 25,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: 236,
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 36,
    marginBottom: 15,
  },
});

export default InputModal;
