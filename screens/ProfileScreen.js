import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppButton from "../components/AppButton";
import CustomModal from "../components/CustomModel";

export default function ProfileScreen() {
  const [modalStatus, setModalStatus] = useState(false);
  const openModal = () => {
    setModalStatus(true);
  };
  const closeModal = () => {
    setModalStatus(false);
  };
  const confirmModal = () => {};
  return (
    <View>
      <Text>ProfileScreen</Text>
      <AppButton title="Edit" onPress={openModal} />
      <CustomModal
        width="80%"
        height="80%"
        child={
          <View style={{ width: "80%", height: "80%" }}>
            <Text>
              <AppButton title="confirm" onPress={() => {console.log("ok!")}} />
              <AppButton title="cancel" onPress={() => {closeModal()}} />
            </Text>
          </View>
        }
        visible={modalStatus}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
