import {
  Text,
  View,
  Button,
  FlexAlignType,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import AddButton from "../components/AppButton";
import CustomModal from "../components/CustomModel";
import EditScreen from "../screens/EditScreen";
import ImageUploader from "../components/ManagamentScreenCmpt/Imageuploder";
import { SubmitButton } from "../components/form";
import ProfileView from "./ProfileView";
import colors from "../config/colors";
import { getItemAsync } from "expo-secure-store";
import { getProfile } from "../controller/profileApi";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import CustomView from "../components/CustomView";
import Loading from "../components/Loading";

export default function ProfileScreen() {
  const [modalStatus, setModalStatus] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGetProfile = async () => {
    setLoading(true);
    getProfile()
      .then((res) => {
        setProfile(res?.data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };
  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  useEffect(() => {
    handleGetProfile();
  }, []);
  if (loading) return <Loading />;

  return (
    <CustomView style={styles.container}>
      <CustomView style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            profile?.image
              ? { uri: profile?.image }
              : require("../assets/hexagone.png")
          }
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            color: colors.medium,
          }}
        >
          {profile?.full_name}
        </Text>
      </CustomView>
      <ProfileView profile={profile} />
      <AddButton title="Edit" onPress={openModal} style={styles.btn} />
      <CustomModal
        width="100%"
        height="100%"
        child={
          <View style={{ width: "100%", height: "100%" }}>
            <EditScreen closeModal={closeModal} />
          </View>
        }
        visible={modalStatus}
      />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: adaptToWidth(0.18),
    height: adaptToHeight(0.1),
    borderRadius: adaptToHeight(0.1),
    marginVertical: adaptToHeight(0.01),
  },
  btn: {
    width: "100%",
  },
});
