import { ScrollView, StyleSheet, Text, View, Image } from "react-native";

import React, { useState, useEffect } from "react";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/form";

import * as ImagePicker from "expo-image-picker";

import AddButton from "../components/AppButton";

import * as Yup from "yup";

import CustomView from "../components/CustomView";

import LinkText from "../components/LinkText";

import { adaptToHeight, adaptToWidth } from "../config/dimensions";

import colors from "../config/colors";
import { getCategories } from "../controller/categoriesApi";
import Loading from "../components/Loading";
import AppFormDatePicker from "../components/form/AppFormDatePicker";
import { createEvent } from "../controller/eventsApi";



export default function EventForm({closeModal}) {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image , setImage] = useState(null)

  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((res) => {
        console.log(res);
        if (res.ok) {
          setCategories(res.data.results);
          setLoading(false);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  const selectImage = async () => {
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

  const validationSchema = Yup.object({
    title: Yup.string().required().label("Titre"),

    location: Yup.string().required().label("Location"),

    description: Yup.string().required().label("Description"),
    phone: Yup.string().required().label("Phone"),
    price: Yup.string().required().label("price"),
  });

  const initValues = {
    title: "",

    location: "",

    description: "",
    phone : "" , 
    price : ""
  };

  const handleSubmit = (data) => {
        const formData = new FormData();
      if (image) {
        let formatImage = {
          name: image.uri.split("/")[image.uri.split("/").length - 1],
          uri: image.uri,
          type:
            "image/" +
            image.uri.split("/")[image.uri.split("/").length - 1].split(".")[
              image.uri.split("/")[image.uri.split("/").length - 1].split(".")
                .length - 1
            ],
        };
        data["image"] = formatImage;
      }
      data["casts"] = null
      data["points"] = null
           Object.entries(data).forEach(([key, value]) =>
             formData.append(key, value)
           );

        createEvent(formData).then(res => {
          console.log(res)
            closeModal();
        }).catch(e => console.log(e))
           
    closeModal()
  };
  if (loading) return <Loading />;

  return (
    <CustomView style={{ height: adaptToHeight(1) }}>
      <ScrollView>
        <CustomView style={styles.containerIMG}>
          {image && (
            <Image source={{ uri: image.assets[0].uri }} style={styles.image} />
          )}
          <AddButton title="Select Image" onPress={selectImage} />
        </CustomView>
        <AppForm
          initialValues={initValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <CustomView style={[styles.containerForm]}>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="title"
              placeholder="Event Title"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="location"
              placeholder="Event Location"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="phone"
              placeholder="manager phone"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="price"
              placeholder="Price"
            />

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="description"
              placeholder="Description"
            />
            <AppFormPicker
              name={"category"}
              placeholder={"categoreis"}
              items={categories?.map((el) => ({
                label: el?.title,
                value: el?.id,
              }))}
            />
            <AppFormDatePicker
              name="event_actual_date"
              mode="date"
              label="date"
              iconName={"date"}
            />
            <AppFormDatePicker
              name="event_actual_time"
              mode="time"
              label="clock"
              iconName={"clock"}
            />
          </CustomView>
          <CustomView
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: adaptToHeight(0.5),
            }}
          >
            <AddButton
              title="Cancel"
              style={styles.addBtn}
              styleText={styles.styleText}
              onPress={() => closeModal()}
            />
            <SubmitButton
              title="Creat Event"
              style={styles.submitBtn}
              styleText={styles.styleText}
            />
          </CustomView>
        </AppForm>
      </ScrollView>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.yellowFlash,
  },

  containerForm: {
    marginLeft: 30,

    width: "80%",

    height: adaptToHeight(0.9),
  },

  containerIMG: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: adaptToWidth(1),
    height: adaptToHeight(0.2),
    marginVertical: adaptToHeight(0.01),
  },
  addBtn: {
    height: adaptToHeight(0.07),
    width: adaptToWidth(0.4),
  },
  submitBtn: {
    height: adaptToHeight(0.07),
    width: adaptToWidth(0.4),
  },
  styleText : {
    fontSize : 15
  }
});
