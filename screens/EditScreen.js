import { RefreshControl, ScrollView, StyleSheet, Text, View, style , Image } from 'react-native'
import React, { useState } from 'react'
import { AppForm, AppFormField, SubmitButton } from '../components/form'
import routes from '../navigation/routes';
import * as Yup from "yup";
import CustomView from '../components/CustomView';
import LinkText from '../components/LinkText';
import { adaptToHeight, adaptToWidth } from '../config/dimensions';
import colors from '../config/colors';
import ImageUploader from '../components/ManagamentScreenCmpt/Imageuploder';
import * as ImagePicker from "expo-image-picker";
import AppButton from '../components/AppButton';
import { updateProfile } from '../controller/profileApi';





export default function EditScreen({profile, closeModal}) {

const [image, setImage] = useState(null);

  const validationSchema = Yup.object({
    username: Yup.string().label("Username"),
    Fullname: Yup.string().min(6).label("Fullname"),
    email: Yup.string().email().label("mail"),
    phone: Yup.string().min(9).label("phone")
  });

  const initValues = {
    username: "",
    email: "",
    phone: "",
    Fullname: ""
  };

const selectImage =async  () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result);
    }
};

  const handleSubmit = (refresh) => {
    console.log({...refresh,image});
    const obj = {}
    const formData = new FormData()
    if(refresh.username.length > 0) {
      obj["username"] = refresh.username
    }
        if (image) {  let formatImage = {
          name: image.uri.split("/")[image.uri.split("/").length - 1],
          uri: image.uri,
          type:
            "image/" +
            image.uri.split("/")[image.uri.split("/").length - 1].split(".")[
              image.uri.split("/")[image.uri.split("/").length - 1].split(".")
                .length - 1
            ],
        };
          obj["image"] = formatImage;
        }
     if (refresh.Fullname.length > 0) {
       obj["full_name"] = refresh.Fullname;
     }
      if (refresh.email.length > 0) {
         obj["email"] = refresh.email;
       }
         if (refresh.phone.length > 0) {
           obj["phone"] = refresh.phone;
         }
      console.log(obj , "obj")
      Object.entries(obj).forEach(([key,value]) => formData.append(key,value))
      console.log(formData)
    updateProfile(formData).then(res => {
     console.log(res)
    }).catch( e => console.log(e))
    closeModal()
  }

  return (
    <CustomView style={[styles.container]}>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <CustomView style={styles.containerIMG}>
            {image && (
              <Image
                source={{ uri: image.assets[0].uri }}
                style={styles.image}
              />
            )}
            <AppButton title="Select Image" onPress={selectImage} />
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
            <SubmitButton title={"Submit"} />
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
    backgroundColor: colors.white,
  },
  containerForm: {
    alignItems: "center",
    justifyContent: "flex-end",
    width: "80%",
    marginTop: adaptToHeight(0.01),
  },
  containerIMG: {

    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: adaptToHeight(0.01),
  },
});