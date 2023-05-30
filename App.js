import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "./AppContainer";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AuthContext from "./context/AuthContext";
import { useState, useEffect } from "react";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import * as Location from "expo-location";


export default function App() {
  const [user, setUser] = useState(null);
  let [fontsLoaded] = useFonts({
    NeoSansArabic: require("./assets/fonts/NeoSansArabic.ttf"),
  });

    useEffect(() => {
      (async () => {
        Location.enableNetworkProviderAsync();
        let { status } = await Location.requestForegroundPermissionsAsync();
        let { status: tstatus } =
          await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          alert("Permission to access location was denied");
          return;
        }
      })();
    }, []);

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
