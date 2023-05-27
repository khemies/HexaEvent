import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./AppContainer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AuthContext from "./context/AuthContext";
import { useState, useEffect } from "react";
import store from "./redux/store/store";
import { Provider } from "react-redux";


export default function App() {
  const [user, setUser] = useState(null);
  let [fontsLoaded] = useFonts({
    NeoSansArabic: require("./assets/fonts/NeoSansArabic.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <Provider store={store()}>
          <AppContainer />
        </Provider>
      </AuthContext.Provider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
