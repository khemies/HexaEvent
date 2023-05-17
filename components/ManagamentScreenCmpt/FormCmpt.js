import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomView from "../CustomView";
import AppText from "../AppText";
import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../form";
import * as Yup from "yup";
import AppFormLabel from "../form/AppFormLabel";
import { adaptToHeight } from "../../config/dimensions";
import colors from "../../config/colors";
import PickerBody from "../PickerBody";
import AppButton from "../AppButton";
import Loading from "../Loading";
import {
  acceptDon,
  getDonMethods,
  getDonSources,
  getDonTypes,
} from "../../controller/formCmptApis";
import StatusBar from "../CustomStatusBar";
import CustomStatusBar from "../CustomStatusBar";

const initValues = {
  don_value: "",
  don_method: "",
  don_type: "",
  don_source: "",
  don_comment: "",
};

const FormCmpt = ({ item, onClose, onType }) => {
  const [donTypes, setDonTypes] = useState(null);
  const [donMethods, setDonMethods] = useState(null);
  const [donSouce, setDonSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, toggleStatus] = useState(null);
  const getDonSourcesApis = async () => {
    setLoading(true);
    getDonSources()
      .then((res) => {
        setDonSource(
          res.data.map((el) => ({ label: el.sourceDescription, value: el.id }))
        );
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const getDonMethodsAPi = async () => {
    setLoading(true);
    getDonMethods()
      .then((res) => {
        setDonMethods(
          res.data.map((el) => ({ label: el.method, value: el.id }))
        );
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const getDonTypesAPi = async () => {
    setLoading(true);
    getDonTypes()
      .then((res) => {
        setDonTypes(
          res.data.map((el) => ({ label: el.typeDescription, value: el.id }))
        );
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const docAcceptApi = (values) => {
    let post_values = {
      ...values,
      id: item.id,
      validationHjrDate: item.validationHjrDate ? item.validationHjrDate : "",
    };

    acceptDon(post_values)
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

  const renderStatusBar = () => {
    if (status == true)
      return <CustomStatusBar message="تمت الموافقة" color={"green"} />;
    else if (status == false)
      return <CustomStatusBar message="تعطلت العملية" color={"red"} />;
    else {
      return null;
    }
  };

  const handleSubmit = (values) => {
    docAcceptApi(values);
  };
  useEffect(() => {
    getDonMethodsAPi();
    getDonSourcesApis();
    getDonTypesAPi();
    console.log(item.donationTypeId);
  }, [
    JSON.stringify(donMethods),
    JSON.stringify(donSouce),
    JSON.stringify(donTypes),
  ]);

  const initValues = {
    validatedDonationAmount: String(item.donationAmount),
    donationMethodId:
      donMethods?.length >= 1
        ? donMethods.find((el) => el.value == item.donationMethodId)?.value
        : null,
    donationTypeId:
      donTypes?.length >= 1
        ? donTypes.find((el) => el.value == item.donationTypeId)?.value
        : null,
    donationSourcesId:
      donSouce?.length >= 1
        ? donSouce.find((el) => el.value == item.donationSourcesId)?.value
        : null,
    validationComments: String(item.validationComments),
  };
  if (loading) {
    return (
      <CustomView style={{ width: "100%", height: "100%" }}>
        <Loading />
      </CustomView>
    );
  } else {
    return (
      <CustomView style={styles.container}>
        {renderStatusBar()}
        <AppForm initialValues={initValues} onSubmit={handleSubmit}>
          <AppText style={styles.title}>إعتماد الطلب</AppText>
          <ScrollView>
            <CustomView style={styles.form}>
              <CustomView style={styles.box}>
                <AppFormLabel
                  name="don_value"
                  label={"قيمة الدعم"}
                  style={{
                    textAlign: "right",
                    width: "100%",
                    top: adaptToHeight(0.03),
                  }}
                />
                <AppFormField
                  name="don_value"
                  placeholder="قيمة الدعم"
                  defaultValue={String(item.donationAmount)}
                />
              </CustomView>
              <CustomView style={styles.box}>
                <AppFormLabel
                  name="don_value"
                  label={"طريقة الدفع"}
                  style={{ textAlign: "right", width: "100%" }}
                />
                <PickerBody
                  items={donMethods}
                  name="don_method"
                  containerStyle={styles.pickerContainerStyle}
                  value={
                    donMethods
                      ? donMethods.find(
                          (el) => el.value == item.donationMethodId
                        )
                      : null
                  }
                />
              </CustomView>
              <CustomView style={styles.box}>
                <AppFormLabel
                  name="don_value"
                  label={"جهة الصرف"}
                  style={{ textAlign: "right", width: "100%" }}
                />
                <PickerBody
                  items={donSouce}
                  name="don_source"
                  containerStyle={styles.pickerContainerStyle}
                  value={
                    donSouce
                      ? donSouce.find(
                          (el) => el.value == item.donationSourcesId
                        )
                      : null
                  }
                />
              </CustomView>
              <CustomView style={styles.box}>
                <AppFormLabel
                  name="don_value"
                  label={"نوع الدعم"}
                  style={{ textAlign: "right", width: "100%" }}
                />
                <PickerBody
                  items={donTypes}
                  name="don_type"
                  containerStyle={styles.pickerContainerStyle}
                  value={
                    donTypes
                      ? donTypes.find((el) => el.value == item.donationTypeId)
                      : null
                  }
                />
              </CustomView>
              <CustomView style={styles.box}>
                <AppFormLabel
                  name="don_value"
                  label={"الرأي"}
                  style={{
                    textAlign: "right",
                    width: "100%",
                    top: adaptToHeight(0.03),
                  }}
                />
                <AppFormField
                  name="don_comment"
                  placeholder="الرأي"
                  editable={false}
                  defaultValue={
                    item.validationComments
                      ? String(item.validationComments)
                      : ""
                  }
                />
              </CustomView>
            </CustomView>
          </ScrollView>

          <CustomView style={styles.btns}>
            <SubmitButton
              style={[styles.btnFooter, { backgroundColor: "green" }]}
              title="موافق"
            />
            <AppButton
              style={[
                styles.btnFooter,
                { backgroundColor: colors.greyPlaceholder },
              ]}
              onPress={() => onType()}
              title="غلق"
            />
          </CustomView>
        </AppForm>
      </CustomView>
    );
  }
};

export default FormCmpt;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: adaptToHeight(0.02),
    height: adaptToHeight(0.8),
    width: "100%",

    backgroundColor: colors.white,
  },
  form: {
    height: adaptToHeight(0.8),

    width: "77%",
    alignItems: "flex-end",
    justifyContent: "center",
    justifyContent: "space-around",
  },
  box: {
    width: "90%",

    justifyContent: "flex-end",
    alignItems: "center",

    height: adaptToHeight(0.1),
  },
  title: {
    textAlign: "center",
    width: "100%",
    marginBottom: adaptToHeight(0.05),
    fontSize: adaptToHeight(0.03),
    color: colors.medium,
    top: adaptToHeight(0.03),
  },
  pickerContainerStyle: {
    height: adaptToHeight(0.05),
  },

  btns: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",

    height: "12%",
    justifyContent: "space-around",
  },
  btnFooter: {
    width: "40%",
    height: "80%",
  },
});
