import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomView from "../CustomView";
import AppText from "../AppText";
import Male from "../../assets/male.svg";
import Female from "../../assets/female.svg";
import { adaptToHeight, adaptToWidth } from "../../config/dimensions";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import colors from "../../config/colors";
import AppButton from "../AppButton";
import Line from "../list/Line";

const conditionRender = () => {};

const DetailsCmpt = ({ item, onClose, onType, onAccept, onRefuse }) => {
  const [navSelected, setNavSelected] = useState("informations");
  const conditionRender = () => {
    if (navSelected == "documents") {
      return (
        <CustomView style={styles.docHeader}>
          <AppText style={styles.subtitle}>لا يوجد مرفقات</AppText>
        </CustomView>
      );
    } else {
      return (
        <CustomView style={styles.infoContainer}>
          <Line
            style={{
              height: adaptToHeight(0.001),
              backgroundColor: colors.greyPlaceholder,
            }}
          />
          <CustomView style={styles.infoHeader}>
            <AppText style={styles.title}>المهنة</AppText>

            <AppText style={styles.subtitle}>{item.job}</AppText>
          </CustomView>
          <CustomView style={styles.infoHeader}>
            <AppText style={styles.title}>المكان</AppText>

            <AppText style={styles.subtitle}>{item.delegationName}</AppText>
          </CustomView>
          <CustomView style={styles.infoHeader}>
            <AppText style={styles.title}>التفسير</AppText>

            <AppText style={styles.subtitle}>
              {item.donationDescription}
            </AppText>
          </CustomView>
          <CustomView style={styles.infoHeader}>
            <AppText style={styles.title}>المبلغ</AppText>

            <AppText style={styles.subtitle}>{item.donationAmount}</AppText>
          </CustomView>
        </CustomView>
      );
    }
  };
  return (
    <CustomView style={styles.container}>
      <CustomView style={styles.header}>
        {item.gender == 1 ? (
          <Male width={adaptToWidth(0.2)} height={adaptToHeight(0.08)} />
        ) : (
          <Female width={adaptToWidth(0.2)} height={adaptToHeight(0.08)} />
        )}
        <AppText style={styles.title}>وائل الفتحي خميس الترهوني</AppText>
        <AppText style={styles.subtitle}>tdfscv@dsqd.ds</AppText>
      </CustomView>
      <CustomView style={styles.nav}>
        <AppButton
          style={[
            styles.navBtn,
            { borderBottomWidth: navSelected == "informations" ? 1 : 0 },
          ]}
          styleText={styles.navText}
          title="معلومات"
          onPress={() => setNavSelected("informations")}
        />
        <AppButton
          style={[
            styles.navBtn,
            { borderBottomWidth: navSelected == "documents" ? 1 : 0 },
          ]}
          title="مرفقات"
          styleText={styles.navText}
          onPress={() => setNavSelected("documents")}
        />
      </CustomView>
      {conditionRender()}
      <CustomView style={styles.btns}>
        <AppButton
          style={[styles.btnFooter, { backgroundColor: "green" }]}
          onPress={() => onAccept()}
          title="موافق"
        />
        <AppButton
          style={[styles.btnFooter, { backgroundColor: "red" }]}
          onPress={() => onRefuse()}
          title="رفض"
        />
        <AppButton
          style={[
            styles.btnFooter,
            { backgroundColor: colors.greyPlaceholder },
          ]}
          onPress={() => onClose()}
          title="غلق"
        />
      </CustomView>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
  },
  title: {
    fontSize: adaptToHeight(0.023),
    color: colors.grey,
    textAlign: "right",
  },
  subtitle: {
    fontSize: adaptToHeight(0.02),
    color: colors.medium,
    textAlign: "right",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navBtn: {
    backgroundColor: colors.white,

    width: "45%",
    borderRadius: 0,
    borderBottomColor: colors.primary,
  },
  navText: {
    fontSize: adaptToHeight(0.02),
    color: colors.primary,
  },
  infoContainer: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "60%",
    padding: adaptToHeight(0.02),
  },
  infoHeader: {
    width: "100%",
    height: "20%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    justifyContent: "space-around",
    padding: adaptToHeight(0.01),
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.greySelection,
  },
  docHeader: {
    width: "100%",
    height: "60%",
    alignItems: "center",
    justifyContent: "flex-start",
    justifyContent: "space-around",
    padding: adaptToHeight(0.01),
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.greySelection,
  },
  btns: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",

    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
  },
  btnFooter: {
    width: "30%",
  },
});
export default DetailsCmpt;
