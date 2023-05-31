import { ScrollView, StyleSheet, Text, View } from 'react-native'

import React from 'react'

import { AppForm, AppFormField, SubmitButton } from '../components/form'

import routes from '../navigation/routes';

import AddButton from "../components/AppButton"

import * as Yup from "yup";

import CustomView from '../components/CustomView';

import LinkText from '../components/LinkText';

import { adaptToHeight, adaptToWidth } from '../config/dimensions';

import colors from '../config/colors';

import RegisterSVG from "../assets/lOGINrEGISTER.svg";

import { getAccount } from '../controller/userApi';







export default function EventForm(props) {



  const validationSchema = Yup.object({

    Titre: Yup.string().required().label("Titre"),

    Date: Yup.string().required().label("Date"),

    Description: Yup.string().required().label("Description"),



  });



  const initValues = {

    Titre: "",

    Date: "",

    Description: ""

  };






  const handleSubmit = (refresh) => {

    console.log(refresh);



  }



return (



  <AppForm

    initialValues={initValues}

    onSubmit={handleSubmit}

    validationSchema={validationSchema}

  >

    <ScrollView>

      <View>





        <CustomView style={[styles.containerForm]}>

          <AppFormField

            autoCapitalize="none"

            autoCorrect={false}



            name="Titre"

            placeholder="Titre de l'évenement"

          />

          <AppFormField

            autoCapitalize="none"

            autoCorrect={false}



            name="Date"

            placeholder="Date de l'évenement"

          />

          <AppFormField

            autoCapitalize="none"

            autoCorrect={false}



            name="Description"

            placeholder="Déscription"

          />

        </CustomView>

      </View>

    </ScrollView>

    <View>

      <AddButton title="Add Cast" style={{ alignSelf: "center" }} />

    </View>

    <View>

      <SubmitButton title="Creat Event" style={{ alignSelf: "center" }} />

    </View>









  </AppForm>





);


}


const styles = StyleSheet.create({

  container: {

    alignItems: "center",

    justifyContent: "center",

    width: "100%",

    height: "100%",

    backgroundColor: colors.yellowFlash



  },

  containerForm: {



    marginLeft: 30,

    width: "80%",

    height: "100%",



  },

});