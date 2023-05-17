import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { AppForm, AppFormField, SubmitButton } from "../form";
import CustomView from "../CustomView";
import AppFormLabel from "../form/AppFormLabel";
import { adaptToHeight, adaptToWidth } from "../../config/dimensions";
import colors from "../../config/colors";
import AppButton from "../AppButton";
import AppText from "../AppText";
import { refuseDon } from "../../controller/formCmptApis";
import CustomStatusBar from "../CustomStatusBar";

const RefuseComponnet = ({ onType, item }) => {
  const [status, toggleStatus] = useState(null);
  const initValues = {
    validationComments: "",
  };
  const refuseDonApi = (values) => {
    let post_values = {
      ...values,
      validationHjrDate: item.validationHjrDate ? item.validationHjrDate : "",
      donationMethodId: item.donationMethodId,
      donationSourcesId: item.donationSourcesId,
      donationTypeId: item.donationTypeId,
      id: item.id,
    };

    refuseDon(post_values)
      .then((res) => {
        console.log(res);

        if (res.ok) {
          toggleStatus(true);
          setTimeout(() => {
            toggleStatus(null);
          }, 5000);
        } else {
          toggleStatus(false);
          setTimeout(() => {
            toggleStatus(null);
          }, 5000);
        }
      })
      .catch((e) => console.log(e));
  };

  const handleSubmit = (values) => {
    refuseDonApi(values);
  };

  const renderStatusBar = () => {
    if (status == true)
      return (
        <CustomStatusBar
          message="تم الرفض"
          color={"green"}
          CustomStyle={{ width: "90%" }}
        />
      );
    else if (status == false)
      return (
        <CustomStatusBar
          message="تعطل الرفض"
          color={"red"}
          CustomStyle={{ width: "90%" }}
        />
      );
    else {
      return null;
    }
  };
  return (
    <CustomView style={styles.container}>
      {renderStatusBar()}
      <AppForm initialValues={initValues} onSubmit={handleSubmit}>
        <AppText style={styles.title}>رفض الطلب</AppText>

        <CustomView style={styles.box}>
          <AppFormLabel
            label="الرأي"
            style={{
              textAlign: "right",
              width: "100%",
            }}
          />
          <AppFormField
            placeholder="الرأي"
            name="comment"
            style={{ width: "100%", color: colors.greyPlaceholder }}
            multiline={true}
            numberOfLines={6}
          />
        </CustomView>
        <CustomView style={styles.btns}>
          <SubmitButton
            title="رفض"
            style={[styles.btn, { backgroundColor: "red" }]}
            onRefuse={onType}
          />
          <AppButton
            title={"غلق"}
            style={[styles.btn, { backgroundColor: colors.greyPlaceholder }]}
            onPress={() => onType()}
          />
        </CustomView>
      </AppForm>
    </CustomView>
  );
};

export default RefuseComponnet;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    justifyContent: "space-around",
  },
  box: {
    width: "80%",
  },
  btn: {
    width: "40%",
    margin: adaptToHeight(0.01),
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    fontSize: adaptToHeight(0.03),
    color: colors.medium,
  },
});
