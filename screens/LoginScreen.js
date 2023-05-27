import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useContext, useState } from "react";
import CustomView from "../components/CustomView";
import {
  AppForm,
  AppFormField,
  ErrorMessage,
  SubmitButton,
} from "../components/form";
import { adaptToWidth, adaptToHeight } from "../config/dimensions";
import LoginSVG from "../assets/LoginGreenLight.svg";
import Vector from "../assets/VectorGreenLight.svg";
import AppText from "../components/AppText";
import colors from "../config/colors";
import * as Yup from "yup";
import { authenticate } from "../controller/userApi";
import storage from "../Auth/storage";
import AuthContext from "../context/AuthContext";
import useAuth from "../Auth/useAuth";
import LinkText from "../components/LinkText";
import routes from "../navigation/routes";

const validationSchema = Yup.object({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
});

const initValues = {
  username: "",
  password: "",
};

const LoginScreen = (props) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const { user, setUser } = useContext(AuthContext);
  const { logIn } = useAuth();

  const navigate = props.navigation.navigate
  const handleSubmit = (values) => {
    console.log(values);
    storage
      .removeToken()
      .then((res) => {
        authenticate(values)
          .then((res) => {
           
            if (res.ok) {
               console.log(
                 res.data.access,
                 "aut hand refres\n",
                 res.data.refresh
               );
             logIn(res.data.access , res.data.refresh);
            } else {
              setLoginFailed(true);
              setUser(false)
            }
          })
          .catch((e) => console.log(e));
      })
      .catch((e) => console.log(e));
  };

  return (
    <CustomView
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: adaptToHeight(0.2),

        alignItems: "center",
        justifyContent: "center",
        paddingBottom: adaptToHeight(0.06),
      }}
    >
      <CustomView style={{ alignSelf: "center" }}>
        <LoginSVG height={adaptToHeight(0.3)} width={adaptToWidth(0.7)} />
      </CustomView>
      <AppForm
        initialValues={initValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <CustomView
          style={{
            backgroundColor: "white",
            width: "90%",
            alignSelf: "center",
            height:"80%",
            paddingTop:20,
          }}
        
        >
          <AppText style={styles.title}>Welcome</AppText>
          <CustomView style={{ backgroundColor: "white", width: "90%" }}>
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
              icon="lock"
              name="password"
              placeholder="password"
            />
          </CustomView>
          <SubmitButton title="Sign In" style={{ alignSelf: "center" }} />
          <LinkText onPress={() => navigate(routes.REGISTER)} > you don't have an account yet ? register now !</LinkText>
          <ErrorMessage
            error={"incorrect information"}
            visible={loginFailed}
            style={{ alignSelf: "center", paddingTop: adaptToHeight(0.01) }}
          />
        </CustomView>
      </AppForm>
    </CustomView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  welcomeContainer: {
    height: "40%",
    backgroundColor: "dodgerblue",
    width: "100%",
    borderBottomLeftRadius: adaptToWidth(0.3),
    borderTopEndRadius: adaptToWidth(0.6),
  },
  title: {
    fontSize: adaptToHeight(0.035),
    color: colors.medium,
    fontWeight: "bold",
    textAlign: "left",
    marginRight: adaptToWidth(0.02),
  },
});
