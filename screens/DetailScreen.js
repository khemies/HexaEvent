import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import CustomView from "../components/CustomView";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Rate from "../components/rate";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { adaptToHeight, adaptToWidth } from "../config/dimensions";
import Separator from "../components/ListItemSeparator";
import Sms from "react-native-sms";
import { rate as rating } from "../controller/rateApi";
import CustomModal from "../components/CustomModel";
import * as SMS from "expo-sms";

const DetailScreen = (props) => {
  const [modalStatus, setModalStatus] = useState(false);
  const data = props?.route?.params?.data;
    // const rateEvent = () => {
    //   rate(data?.id);
    // };
    const openModal = () => {
      setModalStatus(true);
    };

    const closeModal = () => {
      setModalStatus(false);
    };
  const handleRateNow = (rate) => {
    rating(data?.id, rate)
      .then((res) => {
        console.log(res, "rate res");
        closeModal();
      })
      .catch((e) => console.log(e));
  }

  const sendSMS = async () => {
 const isAvailable = await SMS.isAvailableAsync();
 if (isAvailable) {
  const { result } = await SMS.sendSMSAsync(
    ["0123456789", "9876543210"],
    "My sample HelloWorld message"
 
  );
 } else {
  console.log("there's no SMS available on this device")  
 }
  };
  return (
    <CustomView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innercontainer}>
        <Image
          style={styles.image}
          source={{
            uri: data?.image,
          }}
        />
        <CustomView style={styles.title}>
          <AppText style={styles.titleMovie}>{data?.title}</AppText>
        </CustomView>
        <CustomView style={styles.titleAndRate}>
          <CustomView style={styles.Ratebox}>
            <CustomView style={styles.RateBoxText}>
              <CustomView style={styles.RateStar}>
                <MaterialIcons
                  name={"star"}
                  size={22}
                  color={colors.yellowFlash}
                />
                <AppText style={styles.Rate}>{`${data?.rate}/5`}</AppText>
                <AppText style={styles.yourRating}>Your rating matter</AppText>
              </CustomView>
              <AppText style={styles.addyourrating}>
                Add your ratings & reviews
              </AppText>
            </CustomView>
            <AppButton
              title={"Rate now"}
              style={styles.RateNowBox}
              styleText={styles.RateNowText}
              onPress={openModal}
            />
          </CustomView>
        </CustomView>
        <CustomView style={styles.about}>
          <AppText style={styles.aboutTitle}>About</AppText>
          <AppText style={styles.aboutInfo}>
            {`${data?.event_actual_time} , ${data?.category?.title}, ${data?.event_actual_date}`}
          </AppText>
          <AppText style={styles.aboutDescription}>{data?.description}</AppText>
        </CustomView>
        <Separator style={styles.separator} />
        <CustomView style={styles.castbox}>
          <AppText style={styles.castTitle}>Cast</AppText>
          <CustomView style={styles.castList}>
            <ScrollView horizontal={true}>
              {data?.casts.length > 0 ? (
                data?.casts.map((el) => (
                  <CustomView style={styles.cast}>
                    <Image
                      source={{
                        uri: el?.image
                          ? el?.image
                          : "https://www.tomorrowland.com/src/Frontend/Files/slideshows/images/900x/6388ef21d6714.jpg",
                      }}
                      style={styles.castImage}
                    />
                    <AppText style={styles.castName}>{el?.full_name}</AppText>
                    <AppText style={styles.castDescription}>
                      first Actor
                    </AppText>
                  </CustomView>
                ))
              ) : (
                <AppText styles={styles.noCast}>No Casts Found</AppText>
              )}
            </ScrollView>
          </CustomView>
        </CustomView>
        <AppButton
          title={"Book ticket"}
          style={styles.bookTicket}
          onPress={sendSMS}
        />
      </ScrollView>
      <CustomModal visible={modalStatus}  width="100%"
        height="100%"
        child={<Rate onPress={handleRateNow}   />} />
    </CustomView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {},
  innercontainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",
  },
  title: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "80%",
    padding: adaptToHeight(0.01),
  },

  titleMovie: { fontSize: 21, fontWeight: "bold" },
  titleUsername: { fontSize: 16, color: colors.medium },
  titleAndRate: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
    height: adaptToHeight(0.25),
    marginVertical: adaptToHeight(0.02),
  },
  RateNowText: { color: colors.blueLink, fontSize: 10, fontWeight: "bold" },
  RateNowBox: {
    borderColor: colors.blueLink,
    borderWidth: 1,
    backgroundColor: colors.light,
    width: "30%",
    height: "55%",
  },
  RateStar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-around",

    width: "72%",
  },
  addyourrating: {
    fontSize: 16,
    color: colors.medium,
  },
  Rate: { fontSize: 12 },
  yourRating: { fontSize: 12, color: colors.greyPlaceholder },
  Ratebox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    width: "100%",
    borderColor: colors.medium,
    borderStyle: "dotted",
    padding: "2%",
  },
  RateBoxText: {},
  image: {
    width: "100%",
    height: adaptToHeight(0.3),
  },
  about: {
    height: adaptToHeight(0.5),
    width: "80%",
  },
  aboutDescription: { fontSize: 12, lineHeight: 20 },
  aboutTitle: { fontSize: 16, fontWeight: "bold" },
  aboutInfo: { fontSize: 12, color: colors.medium },
  castbox: {
    marginTop: adaptToHeight(0.05),
    height: adaptToHeight(0.3),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "80%",
  },
  cast: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  castList: {
    width: adaptToWidth(0.8),
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: adaptToWidth(0.05),
  },
  castTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: "bold",
  },
  castImage: {
    height: adaptToHeight(0.1),
    width: adaptToWidth(0.17),
    borderRadius: adaptToWidth(0.1),
  },
  castName: {
    fontSize: 14,
    fontWeight: "bold",
    width: adaptToWidth(0.2),
    textAlign: "center",
  },
  castDescription: { fontSize: 12, color: colors.medium },
  separator: {
    backgroundColor: colors.medium,
  },
  bookTicket: { height: adaptToHeight(0.07), width: adaptToWidth(1) },
  noCast: {
    fontSize: 18,
    color: colors.medium,
    fontWeight: "bold",
  },
});
