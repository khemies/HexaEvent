import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DetailsCmpt from "./DetailsCmpt";
import FormCmpt from "./FormCmpt";
import CustomStatusBar from "../CustomStatusBar";
import RefuseComponnet from "./RefuseComponnet";

const ModalMngmtCmpt = ({ type, item, onClose, onType }) => {
  const [screen, setScreen] = useState("details");
  if (screen == "details") {
    return (
      <DetailsCmpt
        item={item}
        onType={onType}
        onClose={onClose}
        onAccept={() => setScreen("accept")}
        onRefuse={() => setScreen("refuse")}
      />
    );
  } else if (screen == "accept") {
    return (
      <FormCmpt
        item={item}
        onClose={onClose}
        onType={() => setScreen("details")}
      />
    );
  } else if (screen == "refuse")
    return (
      <RefuseComponnet
        onType={() => setScreen("details")}
        onClose={onClose}
        item={item}
      />
    );
  else return <View />;
};

export default ModalMngmtCmpt;

const styles = StyleSheet.create({});
