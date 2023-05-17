import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomView from "../CustomView";
import AppText from "../AppText";
import { adaptToHeight, adaptToWidth } from "../../config/dimensions";
import colors from "../../config/colors";
import Male from "../../assets/male.svg";
import Female from "../../assets/female.svg";
import Line from "./Line";
import { AntDesign } from "@expo/vector-icons";
import CustomModal from "../CustomModel";
import DetailsCmpt from "../ManagamentScreenCmpt/DetailsCmpt";
import ModalMngmtCmpt from "../ManagamentScreenCmpt/ModalMngmtCmpt";
import CustomStatusBar from "../CustomStatusBar";

const ItemList = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const checkStatus = () => {
    if (item.refused !== null)
      return { label: "مرفوض", icon: "closecircle", color: colors.danger };
    if (item.validated !== null)
      return { label: "تم الأعتماد", icon: "checkcircle", color: "green" };
    return {
      label: "قيد الأعتماد ",
      icon: "reload1",
      color: colors.yellowFlash,
    };
  };

  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <CustomView style={styles.container}>
        <CustomView style={styles.TopBox}>
          <AppText style={styles.title}>{item.fullName}</AppText>
          <CustomView style={styles.topRightBox}>
            <AppText style={styles.subdescription}>
              {item.requestHjrDate}
            </AppText>
            <AppText style={styles.subdescription}>
              {item.delegationName}
            </AppText>
          </CustomView>
        </CustomView>
        <Line />
        <CustomView style={styles.BottomBox}>
          {item.gender == 1 ? (
            <Male width={adaptToWidth(0.2)} height={adaptToHeight(0.08)} />
          ) : (
            <Female width={adaptToWidth(0.2)} height={adaptToHeight(0.08)} />
          )}
          <CustomView style={styles.BottomRightBox}>
            <CustomView style={styles.BottomRightTopBox}>
              <AppText
                style={styles.subdescription}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.job}
              </AppText>
              <AppText
                style={styles.description}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.donationDescription}
              </AppText>
            </CustomView>
            <CustomView style={styles.BottomRightBottomBox}>
              <AntDesign
                name={checkStatus().icon}
                color={checkStatus().color}
                size={adaptToHeight(0.03)}
              />
              <AppText style={styles.subdescription}>
                {item.donationAmount}
              </AppText>
            </CustomView>
          </CustomView>
        </CustomView>
      </CustomView>
      <CustomModal
        visible={visible}
        height={adaptToHeight(0.8)}
        width={adaptToWidth(0.9)}
        child={<ModalMngmtCmpt item={item} onClose={() => setVisible(false)} />}
      />
    </TouchableOpacity>
  );
};

export default ItemList;

const styles = StyleSheet.create({
  container: {
    width: adaptToWidth(0.85),
    height: adaptToHeight(0.19),
    borderRadius: adaptToHeight(0.02),

    marginBottom: adaptToHeight(0.02),
    backgroundColor: colors.white,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 10,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,

    alignItems: "flex-start",
    justifyContent: "center",
    justifyContent: "space-around",
    padding: adaptToHeight(0.01),
  },
  TopBox: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    justifyContent: "space-between",
    padding: adaptToHeight(0.01),
  },
  topRightBox: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  BottomBox: {
    flexDirection: "row-reverse",
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    padding: adaptToHeight(0.01),
  },
  BottomRightBox: {
    alignItems: "center",
    justifyContent: "center",
    width: "65%",
    height: "100%",
  },
  BottomRightTopBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: adaptToHeight(0.01),
    width: "100%",
    height: "45%",
  },
  BottomRightBottomBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    paddingHorizontal: adaptToHeight(0.01),
    width: "100%",
    height: "45%",
  },
  title: {
    fontSize: adaptToHeight(0.022),
    letterSpacing: -2,

    width: adaptToWidth(0.53),
    textAlign: "right",
    paddingVertical: adaptToHeight(0.005),
    height: adaptToHeight(0.07),
    textAlignVertical: "center",
  },
  description: {
    fontSize: adaptToHeight(0.019),
    textAlign: "right",
    width: "70%",
  },
  subdescription: {
    fontSize: adaptToHeight(0.018),
    color: colors.medium,
    width: adaptToWidth(0.22),

    textAlign: "right",
  },
});
