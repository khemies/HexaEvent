import { RefreshControl, ScrollView, StyleSheet, Text, View, style } from 'react-native'
import React, { useState } from 'react'
import { AppForm, AppFormField, SubmitButton } from '../components/form'
import routes from '../navigation/routes';
import * as Yup from "yup";
import CustomView from '../components/CustomView';
import LinkText from '../components/LinkText';
import { adaptToHeight, adaptToWidth } from '../config/dimensions';
import colors from '../config/colors';
import ImageUploader from '../components/ManagamentScreenCmpt/Imageuploder';





export default function EditScreen(props) {



  const validationSchema = Yup.object({
    username: Yup.string().required().label("Username"),
    Fullname: Yup.string().required().min(6).label("Fullname"),
    email: Yup.string().required().email().label("mail"),
    phone: Yup.string().required().min(9).label("phone")
  });

  const initValues = {
    username: "",
    email: "",
    phone: "",
    Fullname: ""
  };


  const handleSubmit = (refresh) => {
    console.log(refresh);
  }

  return (
    <CustomView style={[styles.container]}>

      <ScrollView style={{ flex: 1 }} >
        <View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}>





          <CustomView>

            <ImageUploader style={{ Flex: 1 }} />

          </CustomView>
          <AppForm
            initialValues={initValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <View style={[styles.containerForm]}>
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="user"
                name="username"
                placeholder="username"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="user"
                name="Fullname"
                placeholder="Fullname"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail"
                name="email"
                placeholder="mail"
              />
              <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="phone"
                name="phone"
                placeholder="phone"
              />





            </View>
          </AppForm>
        </View>
      </ScrollView>
    </CustomView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white

  },
  containerForm: {

    alignItems: "center",
    justifyContent: "flex-end",
    width: "80%",
    marginTop: 100,
  },
});