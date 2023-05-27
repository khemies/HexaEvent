import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppForm, AppFormField, SubmitButton } from '../components/form'
import routes from '../navigation/routes';
import * as Yup from "yup";
import CustomView from '../components/CustomView';
import LinkText from '../components/LinkText';
import { adaptToHeight, adaptToWidth } from '../config/dimensions';
import colors from '../config/colors';
import RegisterSVG from "../assets/lOGINrEGISTER.svg";
import { register } from '../controller/userApi';




export default function RegisterScreen(props) {

const validationSchema = Yup.object({
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(4).label("Password"),
  email: Yup.string().required().email().label("mail"),
  phone: Yup.string().required().min(9).label("phone")
});

const initValues = {
  username: "",
  email: "",
  phone: "",
  password : ""
};

const navigate = props.navigation.navigate;

const handleSubmit = (values) => {
register(values).then(res => {
  console.log(res)
  if(res.ok){

    navigate(routes.LOGIN)
  }else{
    alert("Motdepasse ou nom utilisateur invalide");
  }
})
}
  return (
    <CustomView style={[styles.container]}>
      <CustomView>
        <RegisterSVG height={adaptToHeight(0.2)} width={adaptToWidth(0.6)} />
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
            icon="user"
            name="username"
            placeholder="username"
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
          <AppFormField
           
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="password"
          />

          <SubmitButton title="Sign Up" style={{ alignSelf: "center" }} />

          <LinkText
            onPress={() => navigate(routes.LOGIN)}
            textStyle={styles.textlink}
          >
            you have an account? LOGIN now !
          </LinkText>
        </CustomView>
      </AppForm>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor : colors.yellowFlash

  },
  containerForm: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "70%",
  },
  textlink : {
    color : colors.blueLink,
    marginTop : adaptToHeight(0.05)
  }
});